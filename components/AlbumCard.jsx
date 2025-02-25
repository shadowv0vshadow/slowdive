import React from 'react';

const AlbumCard = ({ album, onClick }) => {
  // 处理豆瓣图片URL
  const getProxyImageUrl = (originalUrl) => {
    if (!originalUrl) return 'placeholder.jpg';
    return `https://images.weserv.nl/?url=${encodeURIComponent(originalUrl.replace('https://', ''))}`;
  };

  return (
    <div className="album" onClick={() => onClick(album)}>
      <img 
        src={getProxyImageUrl(album.cover)} 
        alt={album.title} 
      />
      <div className="album-info">
        <h3>{album.title}</h3>
        <p>{album.artist}</p>
      </div>
    </div>
  );
};

export default AlbumCard; 