'use client'

import { useState } from 'react'
import { motion } from 'framer-motion' 
import { AlbumGrid } from '@/components/album-grid'
import { useAlbums } from '@/hooks/use-albums'
import { SlowdiveLogo } from '@/components/slowdive-logo'
import { CustomizeModal } from '@/components/customize-modal'

export default function Home() {
  const {
    currentAlbums,
    loading,
    error,
    handleShuffle
  } = useAlbums()
  
  const [isShuffling, setIsShuffling] = useState(false)
  const [isCustomizeModalOpen, setIsCustomizeModalOpen] = useState(false)
  const [isShared, setIsShared] = useState(false)

  const triggerShuffle = () => {
    if (isShuffling) return; // 防止重复触发
    
    setIsShuffling(true);
    
    // 延迟执行shuffle，让exit动画有时间执行
    setTimeout(() => {
      handleShuffle();
      
      // 给足够时间让动画完成
      setTimeout(() => {
        setIsShuffling(false);
      }, 1000);
    }, 300);
  }

  const shareWall = () => {
    const albumIds = currentAlbums.map(album => album.id).join(',');
    const shareUrl = `${window.location.origin}?albums=${albumIds}`;
    
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        setIsShared(true);
        setTimeout(() => setIsShared(false), 2000);
      })
      .catch(err => {
        console.error('复制链接失败: ', err);
        alert('分享链接: ' + shareUrl);
      });
  }

  if (error) {
    return <div className="h-screen flex items-center justify-center">
      <p>加载专辑数据出错</p>
    </div>
  }

  return (
    <main style={{ 
      minHeight: '100vh', 
      backgroundColor: '#121212',
      padding: 0,
      margin: 0,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      msOverflowStyle: 'none', /* IE and Edge */
      scrollbarWidth: 'none',  /* Firefox */
    }}>
      <style jsx global>{`
        body::-webkit-scrollbar {
          display: none;
        }
        main::-webkit-scrollbar {
          display: none;
        }
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <header style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(5px)',
        padding: '8px 12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '44px',
        boxSizing: 'border-box',
        borderBottom: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 30,
      }}>
        <SlowdiveLogo />
      </header>

      <div style={{ 
        flex: '1',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        marginTop: '44px'
      }}>
        <AlbumGrid albums={currentAlbums} isShuffling={isShuffling} />
      </div>
      
      <div style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 20
      }}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={isShuffling ? { rotate: 360 } : { rotate: 0 }}
          transition={isShuffling ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
          onClick={triggerShuffle}
          disabled={isShuffling}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: isShuffling ? 'not-allowed' : 'pointer',
            opacity: isShuffling ? 0.5 : 1
          }}
          title="随机专辑"
        >
          🔄
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCustomizeModalOpen(true)}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          title="自定义海报墙"
        >
          ⚙️
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={shareWall}
          disabled={currentAlbums.length === 0}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#8b5cf6',
            color: 'white',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            opacity: currentAlbums.length === 0 ? 0.5 : 1
          }}
          title="分享我的墙"
        >
          📤
        </motion.button>
      </div>

      <div style={{
        position: 'fixed',
        left: '20px',
        bottom: '20px', 
        fontSize: '12px',
        color: 'rgba(255,255,255,0.4)',
        maxWidth: '200px',
        lineHeight: 1.4
      }}>
        提示: 点击右下角齿轮图标可自定义海报墙
      </div>

      <CustomizeModal 
        isOpen={isCustomizeModalOpen} 
        onClose={() => setIsCustomizeModalOpen(false)} 
      />

      {isShared && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            backgroundColor: 'rgba(139, 92, 246, 0.9)',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '4px',
            zIndex: 40
          }}
        >
          链接已复制到剪贴板！
        </motion.div>
      )}
    </main>
  )
} 