import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Tags = () => {
  const pathName = useLocation().pathname;
  const [location, setLocation] = useState("/");
  useEffect(() => {
    setLocation(pathName);
  }, [pathName]);
  return (
    <div className="flex justify-center m-4  text-[#FFFFFF] font-semibold ">
      <div className="flex m-4  ">
        <div
          className={`  text-lg border-b-2  ${
            location == "/" ? "text-[#FFDD95]" : ""
          }`}
          style={{ borderColor: `${location == "/" ? "#FFDD95" : "#FFFFFF"}` }}
        >
          <Link to="/" className="px-4">
            Popular
          </Link>
        </div>

        <div
          className={`  text-lg border-b-2  ${
            location == "/recent" ? "text-[#FFDD95]" : ""
          }`}
          style={{ borderColor: `${location == "/recent" ? "#FFDD95" : "#FFFFFF"}` }}
        >
          <Link to="/recent" className="px-4">
            Recent
          </Link>
        </div>

        <div
          className={`  text-lg border-b-2  ${
            location == "/bigthree" ? "text-[#FFDD95]" : ""
          }`}
          style={{ borderColor: `${location == "/bigthree" ? "#FFDD95" : "#FFFFFF"}` }}
        >
          <Link to="/bigthree" className="px-4">
            Big Three
          </Link>
        </div>

        <div
          className={`  text-lg border-b-2  ${
            location == "/ninenovas" ? "text-[#FFDD95]" : ""
          }`}
          style={{ borderColor: `${location == "/ninenovas" ? "#FFDD95" : "#FFFFFF"}` }}
        >
          <Link to="/ninenovas" className="px-4">
            Nine Nova
          </Link>
        </div>

        <div
          className={`  text-lg border-b-2  ${
            location == "/favourite" ? "text-[#FFDD95]" : ""
          }`}
          style={{ borderColor: `${location == "/favourite" ? "#FFDD95" : "#FFFFFF"}` }}
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

