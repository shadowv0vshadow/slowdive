"use client";

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Album } from '@/types/album';
import { getProxyImageUrl } from '@/lib/utils';

interface AlbumCardProps {
  album: Album;
  onClick?: (album: Album) => void;
  className?: string;
}

export function AlbumCard({ album, onClick, className }: AlbumCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1',
        overflow: 'hidden',
        borderRadius: '0',
        cursor: 'pointer'
      }}
      onClick={() => onClick?.(album)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image
          src={getProxyImageUrl(album.cover)}
          alt={album.title}
          fill
          sizes="120px"
          style={{
            objectFit: 'cover'
          }}
          onLoad={() => setIsLoading(false)}
        />
        {isLoading && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1e1e1e'
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: '#10b981 transparent #10b981 #10b981',
              animation: 'spin 1s linear infinite'
            }} />
          </div>
        )}
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '8px',
        background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}>
        <p style={{
          margin: 0,
          fontSize: '14px',
          fontWeight: 'bold',
          color: 'white',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>{album.title}</p>
        <p style={{
          margin: 0,
          fontSize: '12px',
          color: '#d1d1d1',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>{album.artist}</p>
      </div>
    </div>
  );
} 