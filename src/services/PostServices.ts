import { instance } from "../utils/axiosInstance";

export const getPosts = async (): Promise<IPost[]> => {
  const response = await instance.get("users/1/posts");
  const data = await response.data;
  return data;
};


