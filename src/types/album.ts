export interface Album {
  id: number;
  title: string;
  artist: string;
  cover: string;
  link?: string;
}

export interface CustomWall {
  id: string;
  name: string;
  albums: Album[];
  createdAt: Date;
} 