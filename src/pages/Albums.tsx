import React, { useEffect, useState } from "react";
import AlbumCard from "../components/AlbumCard";
import { getAlbums } from "../services/AlbumSevices";

const Albums: React.FC = () => {
  const [album, setAlbum] = useState<IAlbum[]>([]);
  useEffect(() => {
    const albums = getAlbums()
      .then((res: IAlbum[]) => setAlbum(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="mt-3 mx-4">
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-2">
          {album?.map((data) => (
            <AlbumCard data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Albums;
