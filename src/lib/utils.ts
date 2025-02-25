import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// 合并Tailwind类名
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 处理豆瓣图片URL
export function getProxyImageUrl(originalUrl: string | undefined) {
  if (!originalUrl) return '/placeholder.jpg';
  return `https://images.weserv.nl/?url=${encodeURIComponent(originalUrl.replace('https://', ''))}`;
}

// Fisher-Yates 洗牌算法 - 从script.js迁移
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
} 