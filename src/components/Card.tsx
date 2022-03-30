import React from "react";
const Card: React.FC<IPost> = ({data}) => {
  console.log("1");
  return (
    <div className="max-w-md sm:max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.id}</div>
        <p className="text-gray-700 text-base">
          {data.body}
        </p>
      </div>
    </div>
  );
};

export default Card;
