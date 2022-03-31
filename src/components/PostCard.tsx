import React from "react";
export interface IPostProps {
  data?: IPost;
}
const Card: React.FC<IPostProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="max-w-md sm:max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={process.env.PUBLIC_URL + "/images/coffee.jpg"}
        alt="Notes"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data?.title}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
};

export default Card;
