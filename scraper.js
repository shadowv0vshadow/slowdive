const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const https = require('https');

// 延迟函数，避免请求过快
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// 豆瓣音乐Top250页面
const BASE_URL = 'https://music.douban.com/top250';

// 伪造请求头，模拟浏览器行为
const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Referer': 'https://music.douban.com/',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8'
};

// 获取专辑列表
async function getAlbumList(page = 0) {
    try {
        const url = page === 0 ? BASE_URL : `${BASE_URL}?start=${page * 25}`;
        console.log(`正在爬取: ${url}`);
        
        const response = await axios.get(url, { headers });
        const $ = cheerio.load(response.data);
        
        const albums = [];
        
        $('.item').each((i, element) => {
            const $element = $(element);
            const title = $element.find('.pl2 a').text().trim().replace(/\s+/g, ' ');
            const link = $element.find('.pl2 a').attr('href');
            const id = link.match(/(\d+)/)[0];
            const cover = $element.find('img').attr('src');
            const info = $element.find('.pl').text().trim();
            
            // 从info中提取艺术家
            const artist = info.split('/')[0].trim();
            
            albums.push({
                id: parseInt(id),
                title,
                artist,
                cover,
                link
            });
        });
        
        return albums;
    } catch (error) {
        console.error('获取专辑列表失败:', error.message);
        return [];
    }
}

// 下载图片的函数
async function downloadImage(url, id) {
    const imgDir = path.join(__dirname, 'images');
    
    // 确保目录存在
    if (!fs.existsSync(imgDir)) {
        fs.mkdirSync(imgDir, { recursive: true });
    }
    
    const imagePath = path.join(imgDir, `${id}.jpg`);
    const file = fs.createWriteStream(imagePath);
    
    return new Promise((resolve, reject) => {
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Referer': 'https://music.douban.com/'
            }
        }, response => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve(`images/${id}.jpg`);
            });
        }).on('error', err => {
            fs.unlink(imagePath, () => {}); // 删除可能部分下载的文件
            reject(err);
        });
    });
}

// 爬取多页数据
async function scrapeAlbums(pageCount = 10) {
    const allAlbums = [];
    
    for (let i = 0; i < pageCount; i++) {
        const albums = await getAlbumList(i);
        
        // 下载每个专辑的封面
        for (const album of albums) {
            try {
                console.log(`下载封面: ${album.title}`);
                // 下载图片并更新cover属性为本地路径
                album.cover = await downloadImage(album.cover, album.id);
            } catch (error) {
                console.error(`下载封面失败: ${album.title}`, error.message);
                // 保留原始URL，以便后续处理
            }
            
            // 添加延迟以避免请求过快
            await delay(500 + Math.random() * 1000);
        }
        
        allAlbums.push(...albums);
        console.log(`已爬取 ${allAlbums.length} 张专辑`);
        
        await delay(3000 + Math.random() * 2000);
    }
    
    fs.writeFileSync('albums.json', JSON.stringify(allAlbums, null, 2));
    console.log(`爬取完成，共 ${allAlbums.length} 张专辑，数据已保存到 albums.json`);
    
    return allAlbums;
}

// 开始爬取
scrapeAlbums(); 