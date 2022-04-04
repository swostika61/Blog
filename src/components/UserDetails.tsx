import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../services/PostServices";

const UserDetails = () => {
  let params = useParams();
  const [users, setUsers] = useState<IPost[]>([]);
  let id = params.userId;
  useEffect(() => {
    const people = getPosts()
      .then((res: IPost[]) => setUsers(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h2 className="font-normal text-xl text-rose-400 my-2 mx-4">
        UserDetails
      </h2>
      {console.log(typeof params.userId)}
      <div style={{ minHeight: `calc(100vh - 9.12rem)` }}>
        {users
          .filter((person) => person.id == id)
          .map((filteredPerson) => (
            <>
              <h3 className="mx-4 capitalize font-semibold text-lg">{ filteredPerson.title}:</h3>
              <p className="mx-4 font-normal text-lg">{filteredPerson.body}</p>
            </>
          ))}
      </div>
    </>
  );
};

export default UserDetails;
