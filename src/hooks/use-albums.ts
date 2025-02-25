import { useState, useEffect } from 'react';
import { Album } from '@/types/album';
import { shuffleArray } from '@/lib/utils';

export function useAlbums() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [currentAlbums, setCurrentAlbums] = useState<Album[]>([]);
  const [selectedAlbums, setSelectedAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        setLoading(true);
        console.log('尝试获取专辑数据...');
        const response = await fetch('/albums.json');
        console.log('获取响应:', response.status, response.statusText);
        if (!response.ok) {
          throw new Error(`获取专辑失败: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(`成功加载 ${data.length} 张专辑`);
        setAlbums(data);
        setCurrentAlbums(shuffleArray(data)); // 不限制专辑数量
      } catch (err) {
        console.error('加载专辑数据错误:', err);
        setError(err instanceof Error ? err : new Error('未知错误'));
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  const handleShuffle = () => {
    // 创建一个新数组并打乱
    const shuffled = [...albums].sort(() => Math.random() - 0.5);
    setCurrentAlbums(shuffled);
  };

  const addToSelected = (album: Album) => {
    if (!selectedAlbums.some(a => a.id === album.id)) {
      setSelectedAlbums(prev => [...prev, album]);
    }
  };

  const removeFromSelected = (id: number) => {
    setSelectedAlbums(prev => prev.filter(album => album.id !== id));
  };

  const saveCustomWall = () => {
    if (selectedAlbums.length === 0) return false;
    setCurrentAlbums([...selectedAlbums]);
    return true;
  };

  return {
    albums,
    currentAlbums,
    selectedAlbums,
    loading,
    error,
    handleShuffle,
    addToSelected,
    removeFromSelected,
    saveCustomWall,
    setCurrentAlbums
  };
} 