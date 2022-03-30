import React from 'react'

export interface IPostProps{
  posts: IPost;
}

const Card:React.FC<IPostProps> = ({posts}) => {
  return (
    <div className="max-w-md sm:max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{posts.id}</div>
      <p className="text-gray-700 text-base">
        {posts.title}
      </p>
    </div>
  </div>
  )
}

export default Card;
