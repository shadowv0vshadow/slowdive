// 存储随机专辑的示例数据
// 实际项目中，你可能会从API获取这些数据
let sampleAlbums = [
    {
        id: 1,
        title: "午夜的广播",
        artist: "陈绮贞",
        cover: "https://example.com/album1.jpg"
    },
    {
        id: 2,
        title: "Jay",
        artist: "周杰伦",
        cover: "https://example.com/album2.jpg"
    },
    // 添加更多示例专辑...
];

// 当前显示的专辑
let currentAlbums = [];
// 用户选择的专辑
let selectedAlbums = [];

// DOM 元素
const albumWall = document.getElementById('albumWall');
const randomizeBtn = document.getElementById('randomize');
const customizeBtn = document.getElementById('customize');
const shareBtn = document.getElementById('share');
const customizeModal = document.getElementById('customizeModal');
const closeModalBtn = document.querySelector('.close');
const albumSearch = document.getElementById('albumSearch');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const selectedAlbumsContainer = document.getElementById('selectedAlbums');
const saveCustomWallBtn = document.getElementById('saveCustomWall');

// 初始化页面
window.addEventListener('DOMContentLoaded', async () => {
    try {
        // 加载专辑数据
        const albums = await loadAlbumData();
        
        if (albums && albums.length > 0) {
            sampleAlbums = albums;
            console.log(`成功加载 ${sampleAlbums.length} 张专辑封面`);
        } else {
            console.warn('没有从 JSON 加载到专辑数据，使用默认数据');
        }
    } catch (error) {
        console.error('加载专辑数据出错:', error);
    }
    
    loadFromUrl();
    setupEventListeners();
    
    // 如果URL没有指定专辑，加载随机专辑
    if (currentAlbums.length === 0) {
        loadRandomAlbums();
    }
});

// 设置事件监听器
function setupEventListeners() {
    randomizeBtn.addEventListener('click', loadRandomAlbums);
    customizeBtn.addEventListener('click', openCustomizeModal);
    closeModalBtn.addEventListener('click', closeCustomizeModal);
    searchBtn.addEventListener('click', searchAlbums);
    saveCustomWallBtn.addEventListener('click', saveCustomWall);
    shareBtn.addEventListener('click', shareWall);
    
    // 点击模态窗口外部关闭
    window.addEventListener('click', (e) => {
        if (e.target === customizeModal) {
            closeCustomizeModal();
        }
    });
}

// 添加 Fisher-Yates 洗牌算法函数
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // 交换元素
    }
    return shuffled;
}

// 增强的随机专辑加载函数，添加动画效果
function loadRandomAlbums() {
    // 禁用按钮，防止动画过程中重复点击
    randomizeBtn.classList.add('disable-interaction');
    
    console.log(`正在随机排列 ${sampleAlbums.length} 张专辑...`);
    // 获取所有现有专辑元素
    const albumElements = document.querySelectorAll('.album');
    
    // 第一步：添加淡出动画
    albumElements.forEach((album, index) => {
        // 设置不同的动画延迟，使动画看起来更自然
        album.style.animationDelay = `${index % 5 * 0.05}s`;
        album.classList.add('shuffle-out');
    });
    
    // 使用 Fisher-Yates 洗牌算法准备新的顺序
    const newOrder = shuffleArray(sampleAlbums);
    
    // 在动画结束后更新DOM
    setTimeout(() => {
        // 更新当前显示的专辑
        currentAlbums = newOrder;
        
        // 清空专辑墙
        albumWall.innerHTML = '';
        
        // 添加新顺序的专辑，并应用淡入动画
        currentAlbums.forEach((album, index) => {
            const albumElement = createAlbumElement(album);
            
            // 添加位置类以增加随机感
            const posClasses = ['pos1', 'pos2', 'pos3', 'pos4', 'pos5', 'pos6'];
            const rotClasses = ['rot1', 'rot2', 'rot3', 'rot4'];
            const randomPosClass = posClasses[Math.floor(Math.random() * posClasses.length)];
            const randomRotClass = rotClasses[Math.floor(Math.random() * rotClasses.length)];
            
            albumElement.classList.add(randomPosClass, randomRotClass);
            
            // 设置不同的动画延迟
            albumElement.style.animationDelay = `${index % 7 * 0.04}s`;
            
            // 添加到DOM
            albumWall.appendChild(albumElement);
            
            // 需要等待元素进入DOM后再添加动画类
            setTimeout(() => {
                albumElement.classList.add('shuffle-in');
                // 动画完成后移除类
                setTimeout(() => {
                    albumElement.classList.remove(randomPosClass, randomRotClass, 'shuffle-in');
                }, 600);
            }, 10);
        });
        
        // 恢复按钮可点击
        setTimeout(() => {
            randomizeBtn.classList.remove('disable-interaction');
        }, 800);
        
    }, 500); // 等待淡出动画完成
}

// 渲染专辑墙
function renderAlbumWall(albums) {
    albumWall.innerHTML = '';
    albums.forEach(album => {
        const albumElement = createAlbumElement(album);
        albumWall.appendChild(albumElement);
    });
}

// 添加一个辅助函数，处理豆瓣图片URL
function getProxyImageUrl(originalUrl) {
    if (!originalUrl) return 'placeholder.jpg';
    return `https://images.weserv.nl/?url=${encodeURIComponent(originalUrl.replace('https://', ''))}`;
}

// 创建专辑元素
function createAlbumElement(album) {
    const albumDiv = document.createElement('div');
    albumDiv.className = 'album';
    albumDiv.innerHTML = `
        <img src="${getProxyImageUrl(album.cover)}" alt="${album.title}">
        <div class="album-info">
            <h3>${album.title}</h3>
            <p>${album.artist}</p>
        </div>
    `;
    
    // 添加点击事件显示详情
    albumDiv.addEventListener('click', () => showAlbumDetails(album));
    
    return albumDiv;
}

// 添加显示专辑详情的函数
function showAlbumDetails(album) {
    const proxyUrl = getProxyImageUrl(album.cover);
    
    const detailsModal = document.createElement('div');
    detailsModal.className = 'album-details-modal';
    detailsModal.innerHTML = `
        <div class="album-details-content">
            <span class="close-details">&times;</span>
            <div class="album-cover">
                <img src="${proxyUrl}" alt="${album.title}">
            </div>
            <div class="album-info-details">
                <h2>${album.title}</h2>
                <p class="artist">艺术家: ${album.artist}</p>
                <p class="douban-link"><a href="${album.link}" target="_blank">在豆瓣查看 →</a></p>
                <button class="add-to-wall">添加到我的墙</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(detailsModal);
    
    // 点击关闭
    const closeBtn = detailsModal.querySelector('.close-details');
    closeBtn.addEventListener('click', () => {
        detailsModal.remove();
    });
    
    // 点击模态窗口外部关闭
    detailsModal.addEventListener('click', (e) => {
        if (e.target === detailsModal) {
            detailsModal.remove();
        }
    });
    
    // 添加到墙功能
    const addToWallBtn = detailsModal.querySelector('.add-to-wall');
    addToWallBtn.addEventListener('click', () => {
        addToSelected(album);
        detailsModal.remove();
        if (customizeModal.style.display !== 'block') {
            openCustomizeModal();
        }
    });
}

// 打开自定义模态窗口
function openCustomizeModal() {
    customizeModal.style.display = 'block';
    // 清空之前的搜索结果
    searchResults.innerHTML = '';
    // 显示已选择的专辑（如果有）
    renderSelectedAlbums();
}

// 关闭自定义模态窗口
function closeCustomizeModal() {
    customizeModal.style.display = 'none';
}

// 搜索专辑
function searchAlbums() {
    const query = albumSearch.value.trim().toLowerCase();
    if (!query) return;
    
    // 在豆瓣专辑数据中搜索
    const results = sampleAlbums.filter(album => 
        album.title.toLowerCase().includes(query) || 
        album.artist.toLowerCase().includes(query)
    );
    
    renderSearchResults(results);
    
    // 如果没有结果，显示提示
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">未找到匹配的专辑，请尝试其他关键词</p>';
    }
}

// 渲染搜索结果
function renderSearchResults(results) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p>未找到结果</p>';
        return;
    }
    
    results.forEach(album => {
        const proxyUrl = getProxyImageUrl(album.cover);
        
        const itemElement = document.createElement('div');
        itemElement.className = 'search-item album';
        itemElement.innerHTML = `
            <img src="${proxyUrl}" alt="${album.title}">
            <div class="album-info">
                <h3>${album.title}</h3>
                <p>${album.artist}</p>
            </div>
        `;
        
        // 点击添加到选中的专辑
        itemElement.addEventListener('click', () => addToSelected(album));
        
        searchResults.appendChild(itemElement);
    });
}

// 添加专辑到已选择列表
function addToSelected(album) {
    // 避免重复添加
    if (!selectedAlbums.some(a => a.id === album.id)) {
        selectedAlbums.push(album);
        renderSelectedAlbums();
    }
}

// 渲染已选择的专辑
function renderSelectedAlbums() {
    selectedAlbumsContainer.innerHTML = '';
    
    selectedAlbums.forEach((album, index) => {
        const proxyUrl = getProxyImageUrl(album.cover);
        
        const albumElement = document.createElement('div');
        albumElement.className = 'album';
        albumElement.innerHTML = `
            <img src="${proxyUrl}" alt="${album.title}">
            <div class="album-info">
                <h3>${album.title}</h3>
                <p>${album.artist}</p>
                <button class="remove-btn" data-index="${index}">移除</button>
            </div>
        `;
        
        selectedAlbumsContainer.appendChild(albumElement);
    });
    
    // 为所有移除按钮添加事件监听
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            removeFromSelected(index);
        });
    });
}

// 从已选择列表中移除专辑
function removeFromSelected(index) {
    selectedAlbums.splice(index, 1);
    renderSelectedAlbums();
}

// 保存自定义的海报墙
function saveCustomWall() {
    if (selectedAlbums.length === 0) {
        alert('请至少选择一张专辑封面！');
        return;
    }
    
    // 将用户选择的专辑设置为当前显示的专辑
    currentAlbums = [...selectedAlbums];
    renderAlbumWall(currentAlbums);
    closeCustomizeModal();
    
    // 启用分享按钮
    shareBtn.disabled = false;
}

// 分享海报墙
function shareWall() {
    // 实际应用中，这里可能会生成一个唯一的链接用于分享
    // 这里简单实现为将当前状态编码到URL中
    
    if (currentAlbums.length === 0) {
        alert('没有海报可分享！');
        return;
    }
    
    // 将当前专辑ID编码到URL
    const albumIds = currentAlbums.map(album => album.id).join(',');
    const shareUrl = `${window.location.origin}${window.location.pathname}?albums=${albumIds}`;
    
    // 复制链接到剪贴板
    navigator.clipboard.writeText(shareUrl)
        .then(() => {
            alert('分享链接已复制到剪贴板！');
        })
        .catch(err => {
            console.error('复制链接失败: ', err);
            alert('分享链接: ' + shareUrl);
        });
}

// 从URL参数加载专辑
function loadFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const albumParam = urlParams.get('albums');
    
    if (albumParam) {
        const albumIds = albumParam.split(',').map(id => parseInt(id));
        const albumsToLoad = sampleAlbums.filter(album => albumIds.includes(album.id));
        
        if (albumsToLoad.length > 0) {
            currentAlbums = albumsToLoad;
            renderAlbumWall(currentAlbums);
            shareBtn.disabled = false;
        }
    }
}

// 在script.js中添加显示/隐藏加载动画的函数
function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.innerHTML = '<div class="spinner"></div><p>正在加载专辑...</p>';
    document.body.appendChild(loadingDiv);
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// 从JSON文件加载专辑数据
async function loadAlbumData() {
    showLoading();
    try {
        const response = await fetch('albums.json');
        const albums = await response.json();
        hideLoading();
        return albums;
    } catch (error) {
        console.error('加载专辑数据失败:', error);
        hideLoading();
        return [];
    }
}

// 为动画生成随机延迟
function getRandomDelay(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2) + 's';
}

// 在添加shuffle-in类之前可以使用这个函数
albumElement.style.animationDelay = getRandomDelay(0, 0.3);