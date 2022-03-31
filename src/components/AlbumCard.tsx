import React from "react";
interface IAlbumProps{
    data ?: IAlbum;
}

const AlbumCard:React.FC <IAlbumProps> = ({data}) => {
  return (
    <div className="max-w-md sm:max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={data?.url}
        alt="Notes"
      />
      <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 capitalize">{data?.title}</div>
              <p className="text-slate-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque autem velit consequatur repudiandae, inventore illo!</p>
      </div>
    </div>
  );
};

export default AlbumCard;
