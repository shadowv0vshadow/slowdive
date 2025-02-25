import React, { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';
import AlbumDetail from './AlbumDetail';

const AlbumGrid = ({ albums, onShuffle }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  
  const handleCardClick = (album) => {
    setSelectedAlbum(album);
  };
  
  const closeDetails = () => {
    setSelectedAlbum(null);
  };
  
  return (
    <div>
      <div className="album-wall">
        {albums.map((album) => (
          <AlbumCard 
            key={album.id} 
            album={album} 
            onClick={handleCardClick}
          />
        ))}
      </div>
      
      {selectedAlbum && (
        <AlbumDetail 
          album={selectedAlbum} 
          onClose={closeDetails} 
        />
      )}
    </div>
  );
};

export default AlbumGrid; 