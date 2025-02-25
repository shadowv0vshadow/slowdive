"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Album } from '@/types/album';
import { getProxyImageUrl } from '@/lib/utils';

interface AlbumDetailProps {
  album: Album;
  onClose: () => void;
}

export function AlbumDetail({ album, onClose }: AlbumDetailProps) {
  // 关闭详情的键盘事件
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    // 禁止背景滚动
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // 恢复背景滚动
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        backgroundColor: 'rgba(16,37,66,0.85)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 20 }}
        style={{
          backgroundColor: '#1a1a2e',
          borderRadius: '8px',
          maxWidth: '90vw',
          width: '500px',
          maxHeight: '85vh',
          overflow: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'relative',
            width: '100%',
            height: '350px',
            backgroundColor: '#000'
          }}>
            <Image
              src={getProxyImageUrl(album.cover)}
              alt={album.title}
              fill
              sizes="500px"
              style={{ objectFit: 'contain' }}
            />
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.6)',
                border: 'none',
                color: 'white',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </div>
          
          <div style={{ padding: '20px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold',
              margin: '0 0 8px 0'
            }}>
              {album.title}
            </h2>
            
            <p style={{ 
              fontSize: '18px',  
              color: '#bbb',
              margin: '0 0 16px 0'
            }}>
              {album.artist}
            </p>
            
            {album.link && (
              <a 
                href={album.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '16px',
                  color: '#3b82f6',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                在豆瓣查看详情 →
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 