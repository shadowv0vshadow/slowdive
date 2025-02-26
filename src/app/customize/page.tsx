"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAlbums } from "@/hooks/use-albums";
import { AlbumCard } from "@/components/album-card";
import { SlowdiveLogo } from "@/components/slowdive-logo";
import { useRouter } from "next/navigation";

export default function CustomizeWall() {
  const router = useRouter();
  const {
    albums,
    selectedAlbums,
    addToSelected,
    removeFromSelected,
    saveCustomWall,
  } = useAlbums();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  
  const filteredAlbums = albums.filter(
    album => 
      album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      album.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = () => {
    const success = saveCustomWall();
    if (success) {
      setIsSaved(true);
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-900 text-white p-4">
      <header className="flex justify-between items-center mb-4">
        <SlowdiveLogo />
        <div className="flex gap-2">
          <button
            onClick={() => router.push("/")}
            className="px-3 py-1 bg-zinc-800 rounded text-sm hover:bg-zinc-700"
          >
            返回首页
          </button>
          <button
            onClick={handleSave}
            disabled={selectedAlbums.length === 0}
            className={`px-3 py-1 rounded text-sm ${
              selectedAlbums.length === 0
                ? "bg-zinc-700 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-500"
            }`}
          >
            保存选择({selectedAlbums.length})
          </button>
        </div>
      </header>

      {isSaved && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-emerald-600 text-white p-4 rounded-lg"
          >
            已保存自定义海报墙！正在返回首页...
          </motion.div>
        </div>
      )}

      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">自定义你的专辑海报墙</h1>
        <p className="text-zinc-300 mb-4">
          点击专辑添加到您的自定义墙中，再次点击可移除。
        </p>
        <input
          type="text"
          placeholder="搜索专辑或艺术家..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {selectedAlbums.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">已选择的专辑</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {selectedAlbums.map((album) => (
              <div key={album.id} className="relative">
                <AlbumCard
                  album={album}
                  onClick={() => removeFromSelected(album.id)}
                />
                <div className="absolute top-1 right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white cursor-pointer">
                  ×
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <h2 className="text-xl font-bold mb-2">所有专辑</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
        {filteredAlbums.map((album) => (
          <div 
            key={album.id} 
            className={`relative ${
              selectedAlbums.some(a => a.id === album.id) 
                ? "ring-2 ring-emerald-500" 
                : ""
            }`}
          >
            <AlbumCard
              album={album}
              onClick={() => {
                if (selectedAlbums.some(a => a.id === album.id)) {
                  removeFromSelected(album.id);
                } else {
                  addToSelected(album);
                }
              }}
            />
            {selectedAlbums.some(a => a.id === album.id) && (
              <div className="absolute top-1 right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                ✓
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
} 