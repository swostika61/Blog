import React from "react";
import { Link } from "react-router-dom";
export interface IPostProps {
  data?: IPost;
}
const Card: React.FC<IPostProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="max-w-md sm:max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl capitalize mb-2">{data?.title}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <Link to={`/posts/${data?.id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 border text-center border-blue-700 rounded mx-6 mb-3 capitalize">
          more details
        </button>
      </Link>
    </div>
  );
};

export default Card;
