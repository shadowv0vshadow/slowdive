'use client'

import { useState } from 'react'
import { motion } from 'framer-motion' 
import { AlbumGrid } from '@/components/album-grid'
import { useAlbums } from '@/hooks/use-albums'
import { SlowdiveLogo } from '@/components/slowdive-logo'

export default function Home() {
  const {
    currentAlbums,
    loading,
    error,
    handleShuffle
  } = useAlbums()
  
  const [isShuffling, setIsShuffling] = useState(false)

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

  if (loading) {
    return <div className="h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="ml-4">正在加载专辑...</p>
    </div>
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
      position: 'relative'
    }}>
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
        
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={triggerShuffle}
            disabled={isShuffling}
            style={{
              padding: '6px 12px',
              fontSize: '14px',
              backgroundColor: 'rgba(16,185,129,0.8)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isShuffling ? 'not-allowed' : 'pointer',
              opacity: isShuffling ? 0.5 : 1
            }}
          >
            随机专辑
          </button>
          <button
            onClick={() => window.location.href = '/customize'}
            style={{
              padding: '6px 12px',
              fontSize: '14px',
              backgroundColor: 'rgba(37,99,235,0.8)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            自定义海报墙
          </button>
        </div>
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
          onClick={() => window.location.href = '/customize'}
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
      </div>
    </main>
  )
} 