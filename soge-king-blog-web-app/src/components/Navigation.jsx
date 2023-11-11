import { useDispatch, useSelector } from "react-redux";
import {handleLoginBtnCliked} from "../store/AuthReducer"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import logo from "../assets/soge-king-logo.jpg";

import { useState } from "react";

const Navigation = () => {
  const dispatch = useDispatch();
  const [searchBtnCliked, setSearchBtnClicked] = useState(false);
  return (
    <div className="bg-[#242428] relative shadow-lg">
      <div className="flex p-5 ">
        <div className="flex items-center w-2/5 space-x-4 sm:space-x-5 lg:space-x-6 xl:space-x-7">
          <GiHamburgerMenu className="text-4xl text-[#FFDD95]" />
          <img src={logo} alt="" className="w-10 h-10 rounded-full" />
        </div>
        <div className="w-3/5 flex justify-center">
          <h1 className="text-2xl text-[#FFDD95] font-semibold">
            Sogeking.Blog
          </h1>
        </div>
        <div className="flex items-center w-2/5 justify-end space-x-4">
          <BiSearch
            className="text-3xl text-[#FFDD95]"
            onClick={() => {
              setSearchBtnClicked((prev) => !prev);
            }}
          />
          <button
            className="px-4 py-1 rounded-sm font-semibold text-lg bg-[#FFDD95]"
            onClick={() => {
              dispatch(handleLoginBtnCliked());
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div
        className={` flex w-full relative justify-center ${
          searchBtnCliked ? "" : "hidden"
        } `}
      >
        <input
          type="text"
          placeholder="search"
          className="w-full m-3 p-3 rounded-md pr-14 "
        />
        <BiSearch className="absolute  right-10 bottom-6 text-xl " />
      </div>
    </div>
  );
};

export default Navigation;
