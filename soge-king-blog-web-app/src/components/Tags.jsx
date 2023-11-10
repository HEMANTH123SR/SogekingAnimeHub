import React, { useState } from "react";
import { Link } from "react-router-dom";
const Tags = () => {
    // const [isTagCliked,setIsTagCliked]=useState()
  return (
    <div className="flex justify-center m-4 text-[#FFDD95]  ">
      <div className="flex m-4  ">
        <div
          className="  text-lg  border-white text-white  border-b-2 "
        //   style={{ borderColor: "#FFDD95" }}
        >
          <Link to="/popular" className="px-4">
            Popular
          </Link>
        </div>

        <div
          className="  text-lg border-gray-400  border-b-2 "
          style={{ borderColor: "#FFDD95" }}
        >
          <Link to="/recent" className="px-4">
            Recent
          </Link>
        </div>

        <div
          className="  text-lg border-gray-400  border-b-2 "
          style={{ borderColor: "#FFDD95" }}
        >
          <Link to="/bigthree" className="px-4">
            Big Three
          </Link>
        </div>

        <div
          className="  text-lg border-gray-400  border-b-2 "
          style={{ borderColor: "#FFDD95" }}
        >
          <Link to="/ninenovas" className="px-4">
            Nine Nova
          </Link>
        </div>

        <div
          className="  text-lg border-gray-400  border-b-2 "
          style={{ borderColor: "#FFDD95" }}
        >
          <Link to="/favourite" className="px-4">
            Favourite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tags;

/*

*/

/*
  
*/
