import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { getPosts } from "../services/PostServices";

const Posts: React.FC = () => {
  const [post, setPost] = useState<IPost[]>([]);
  useEffect(() => {
    getPosts()
      .then((res: IPost[]) => setPost(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="mt-3 mx-3">
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-2">
          {post?.map((data: IPost) => (
            <Card posts={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
