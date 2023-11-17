import React from "react";
import ShareComponent from "../components/ShareComponent";
import { Link ,Outlet} from "react-router-dom";

export default function BlogsContainer() {
  return (
    <div>
      <NavBar />
      <ShareComponent />
      <Outlet />
    </div>
  );
}

const NavBar = () => {
  return (
    <div className="bg-[#242428] shadow-lg py-8">
      <div className="w-full flex  ">
        <div className="flex w-1/2 justify-start px-4 lg:px-10">
          <h1 className="text-xl  md:text-2xl  text-[#FFDD95] font-semibold">
            Sogeking.Blog
          </h1>
        </div>

        <div className="flex w-1/2 justify-end  space-x-3 lg:space-x-6 px-4 lg:px-10">
          <Link className="text-md text-[#FFDD95] font-semibold " to="/">
            Home
          </Link>
          <Link className="text-md text-[#FFDD95] font-semibold " to="/">
            Profile
          </Link>

          <Link></Link>
        </div>
      </div>
    </div>
  );
};
