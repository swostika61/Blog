import React from "react";
import { Link } from "react-router-dom";
const Navbar:React.FC = () => {
  return (
    <div className="flex py-4 items-center pl-6 text-white bg-gray-900	">
      <Link className="capitalize " to="/posts">
        posts
      </Link>
      <Link className="capitalize ml-6" to="/albums">
        albums
      </Link>
      <Link className="capitalize ml-6" to="/todos">
        todos
      </Link>
    </div>
  );
};

export default Navbar;
