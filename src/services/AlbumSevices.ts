import { instance } from "../utils/axiosInstance";
export const getAlbums = async (): Promise<IAlbum[]> => {
    const response = await instance.get("albums/1/photos");
    const aldata = await response.data;
    return aldata;
  };