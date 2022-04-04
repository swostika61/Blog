// POST INTERFACE
interface IPost {
  id?: number | string;
  userId?: number;
  body?: string;
  title: string;
}

// ALBUM INTERFACE
interface IAlbum {
  albumId?: number;
  id: number;
  title: string;
  url?: string;
  thumbnailUrl?: string;
}
