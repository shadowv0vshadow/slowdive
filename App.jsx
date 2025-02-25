import { useState, useEffect } from 'react';
import AlbumGrid from './components/AlbumGrid';
import CustomizeModal from './components/CustomizeModal';
import { shuffleArray } from './utils/helpers';
import './App.css';

function App() {
  const [albums, setAlbums] = useState([]);
  const [currentAlbums, setCurrentAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  
  useEffect(() => {
    // 加载专辑数据
    const fetchAlbums = async () => {
      try {
        setLoading(true);
        const response = await fetch('/albums.json');
        const data = await response.json();
        setAlbums(data);
        setCurrentAlbums(shuffleArray(data));
      } catch (error) {
        console.error('Error loading albums:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAlbums();
  }, []);
  
  const handleShuffle = () => {
    setCurrentAlbums(shuffleArray(albums));
  };
  
  if (loading) {
    return <div className="loading"><div className="spinner"></div><p>正在加载专辑...</p></div>;
  }
  
  return (
    <div className="app">
      <header>
        <h1>音乐专辑海报墙</h1>
        <div className="controls">
          <button onClick={handleShuffle}>随机专辑</button>
          <button onClick={() => setIsCustomizeOpen(true)}>自定义海报墙</button>
          <button>分享我的墙</button>
        </div>
      </header>
      
      <main>
        <AlbumGrid albums={currentAlbums} onShuffle={handleShuffle} />
      </main>
      
      {isCustomizeOpen && (
        <CustomizeModal 
          allAlbums={albums}
          onClose={() => setIsCustomizeOpen(false)}
          onSave={(selected) => {
            setCurrentAlbums(selected);
            setIsCustomizeOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default App; 