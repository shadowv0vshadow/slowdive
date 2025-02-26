"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Album } from '@/types/album';
import { AlbumCard } from '@/components/album-card';
import { AlbumDetail } from '@/components/album-detail';

interface AlbumGridProps {
  albums: Album[];
  isShuffling?: boolean;
}

export function AlbumGrid({ albums, isShuffling = false }: AlbumGridProps) {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  
  // 展示所有专辑，不再计算最佳数量
  const displayAlbums = albums;

  const shareWall = () => {
    const albumIds = displayAlbums.map(album => album.id).join(',');
    const shareUrl = `${window.location.origin}?albums=${albumIds}`;
    
    // 检查Clipboard API是否可用
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          // setIsShared(true);
          setTimeout(() => {
            // setIsShared(false);
          }, 2000);
        })
        .catch(err => {
          console.error('复制链接失败: ', err);
          alert('分享链接: ' + shareUrl);
        });
    } else {
      // 如果Clipboard API不可用，使用prompt
      alert('请手动复制以下链接:\n' + shareUrl);
    }
  };

  return (
    <>
      <div 
        className="album-grid" 
        style={{
          width: '100%',
          boxSizing: 'border-box',
          overflowY: 'auto'
        }}
      >
        <AnimatePresence mode="wait">
          {!isShuffling && displayAlbums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.3, opacity: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.02,
                type: "spring",
                stiffness: 200
              }}
              style={{
                margin: 0,
                padding: 0,
                boxShadow: 'none',
                overflow: 'hidden',
                aspectRatio: '1'
              }}
              whileHover={{
                filter: 'brightness(1.1) contrast(1.1)',
                transition: { duration: 0.2 }
              }}
            >
              <AlbumCard
                album={album}
                onClick={(album) => setSelectedAlbum(album)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {selectedAlbum && (
        <AlbumDetail
          album={selectedAlbum}
          onClose={() => setSelectedAlbum(null)}
        />
      )}
    </>
  );
} 