"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useAlbums } from "@/hooks/use-albums";
import { AlbumCard } from "@/components/album-card";
import Image from "next/image";
import { getProxyImageUrl } from "@/lib/utils";

interface CustomizeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomizeModal({ isOpen, onClose }: CustomizeModalProps) {
  const {
    albums,
    selectedAlbums,
    addToSelected,
    removeFromSelected,
    saveCustomWall,
  } = useAlbums();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  
  const filteredAlbums = albums.filter(
    album => 
      album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      album.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = () => {
    const success = saveCustomWall();
    if (success) {
      setIsSaved(true);
      // 生成分享链接
      const albumIds = selectedAlbums.map(album => album.id).join(',');
      const generatedShareUrl = `${window.location.origin}?albums=${albumIds}`;
      setShareUrl(generatedShareUrl);
      setTimeout(() => {
        setIsSaved(false);
        onClose();
      }, 1500);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && e.target === modalRef.current) {
      onClose();
    }
  };

  const shareWall = () => {
    if (shareUrl) {
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          alert('分享链接已复制到剪贴板！');
        })
        .catch(err => {
          console.error('复制链接失败: ', err);
          alert('分享链接: ' + shareUrl);
        });
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      ref={modalRef}
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'auto'
      }}
    >
      <motion.div 
        className="modal-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        style={{
          backgroundColor: '#282828',
          margin: '5% auto',
          padding: '20px',
          borderRadius: '8px',
          width: '80%',
          maxWidth: '900px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative'
        }}
        onClick={e => e.stopPropagation()}
      >
        <span 
          onClick={onClose}
          style={{
            color: '#aaa',
            float: 'right',
            fontSize: '28px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          &times;
        </span>
        <h2 
          style={{
            margin: '0 0 20px 0',
            fontSize: '24px',
            fontWeight: 'bold'
          }}
        >
          自定义你的海报墙
        </h2>
        
        {/* 搜索框部分 */}
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>搜索专辑</h3>
          <div style={{ display: 'flex', margin: '20px 0', gap: '0' }}>
            <input
              type="text"
              placeholder="搜索专辑或艺术家..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: 1,
                padding: '10px',
                border: 'none',
                borderRadius: '4px 0 0 4px',
                backgroundColor: '#333',
                color: 'white'
              }}
            />
            <button
              onClick={() => {/* 搜索已经实时进行，无需额外操作 */}}
              style={{
                padding: '10px 16px',
                backgroundColor: '#1DB954',
                color: 'white',
                border: 'none',
                borderRadius: '0 4px 4px 0',
                cursor: 'pointer'
              }}
            >
              搜索
            </button>
          </div>
        </div>

        {/* 已选择的专辑部分 */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>已选择的专辑</h3>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: '15px',
              marginTop: '10px'
            }}
          >
            {selectedAlbums.map((album, index) => (
              <div 
                key={album.id} 
                style={{
                  position: 'relative',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}
              >
                <div style={{ aspectRatio: '1', position: 'relative' }}>
                  <Image
                    src={getProxyImageUrl(album.cover)}
                    alt={album.title}
                    fill
                    sizes="150px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#e74c3c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  zIndex: 5
                }}
                onClick={() => removeFromSelected(album.id)}
                >
                  ×
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '10px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(5px)'
                }}>
                  <h4 style={{ margin: 0, fontSize: '14px' }}>{album.title}</h4>
                  <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#aaa' }}>{album.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 搜索结果部分 */}
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>搜索结果</h3>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: '15px',
              marginTop: '10px'
            }}
          >
            {filteredAlbums.map((album) => (
              <div 
                key={album.id} 
                onClick={() => addToSelected(album)}
                style={{
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  position: 'relative',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={{ aspectRatio: '1', position: 'relative' }}>
                  <Image
                    src={getProxyImageUrl(album.cover)}
                    alt={album.title}
                    fill
                    sizes="150px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '10px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(5px)'
                }}>
                  <h4 style={{ margin: 0, fontSize: '14px' }}>{album.title}</h4>
                  <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#aaa' }}>{album.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={selectedAlbums.length === 0}
          style={{
            marginTop: '20px',
            width: '100%',
            padding: '12px 0',
            backgroundColor: selectedAlbums.length === 0 ? '#565656' : '#1DB954',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: selectedAlbums.length === 0 ? 'not-allowed' : 'pointer',
            fontSize: '16px'
          }}
        >
          保存我的海报墙
        </button>

        {/* 分享链接部分 */}
        {shareUrl && (
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>分享链接</h3>
            <button
              onClick={shareWall}
              style={{
                width: '100%',
                padding: '12px 0',
                backgroundColor: '#1DB954',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              复制分享链接
            </button>
          </div>
        )}
      </motion.div>

      {isSaved && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#1DB954',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            zIndex: 60
          }}
        >
          已保存自定义海报墙！
        </motion.div>
      )}
    </motion.div>
  );
} 