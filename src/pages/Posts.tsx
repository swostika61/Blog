import React, { useState, useEffect } from "react";
import Card from "../components/PostCard";
import { getPosts } from "../services/PostServices";

const Posts = () => {
  const [post, setPost] = useState<IPost[]>();
  useEffect(() => {
    const posts = getPosts()
      .then((res: IPost[]) => setPost(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="mt-3 mx-4">
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-2">
          {post?.map((data) => (
            <Card data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
