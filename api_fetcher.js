const axios = require('axios');
const fs = require('fs');

async function fetchMusicFromDoubanAPI() {
    try {
        // 注意：需要申请豆瓣API的开发者权限
        const API_KEY = '你的豆瓣API密钥';
        const response = await axios.get(`https://api.douban.com/v2/music/search?apikey=${API_KEY}&tag=流行&count=100`);
        
        const albums = response.data.musics.map(music => ({
            id: music.id,
            title: music.title,
            artist: music.attrs.singer.join(', '),
            cover: music.image,
            link: music.alt
        }));
        
        fs.writeFileSync('albums.json', JSON.stringify(albums, null, 2));
        console.log(`获取完成，共 ${albums.length} 张专辑`);
    } catch (error) {
        console.error('获取豆瓣音乐数据失败:', error.message);
    }
}

fetchMusicFromDoubanAPI(); 