import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleHamBurgerCliked } from "../store/AuthReducer";
import { FaLessThan } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function HamBurgerMenu() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const onClickHamburgerMenuEventHandler = (e) => {
    if (e.target.id === "container") {
      dispatch(handleHamBurgerCliked());
    }
  };

  if (!auth.hamBurgerBtnCliked) return;

  return (
    <div
      className="fixed inset-0  backdrop-blur-sm  flex w-full "
      id="container"
      onClick={onClickHamburgerMenuEventHandler}
    >
      <div
        className="w-2/3 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-1/5 bg-[#3B3B3E] flex flex-col items-center 
      
      "
      >
        <div className="mb-6"></div>

        <button
          className="text-[#CDCDCE] bg-[#56565B] text-base flex space-x-2 rounded-full  justify-center items-center px-5 py-3 mb-6"
          id="closingBtn"
          onClick={() => {
            dispatch(handleHamBurgerCliked());
          }}
        >
          <FaLessThan />
          <p>Closs Menu</p>
        </button>

        <div className="text-white text-lg font-semibold w-full  py-4 px-3 ">
          <Link
            to="/recent"
            className=""
            onClick={() => {
              dispatch(handleHamBurgerCliked());
            }}
          >
            Home
          </Link>
        </div>
        <div className=" w-full bg-[#FFDD95]" style={{ height: 1 }}></div>
        <div className="text-white text-lg font-semibold w-full  py-4 px-3 ">
          <Link
            to="/recent"
            className=""
            onClick={() => {
              dispatch(handleHamBurgerCliked());
            }}
          >
            Trending Blogs
          </Link>
        </div>
        <div className=" w-full bg-[#FFDD95]" style={{ height: 1 }}></div>
        <div className="text-white text-lg font-semibold w-full  py-4 px-3 ">
          <Link
            to="createBlog"
            className=""
            onClick={() => {
              dispatch(handleHamBurgerCliked());
            }}
          >
            Create Blogs
          </Link>
        </div>
        <div className=" w-full bg-[#FFDD95]" style={{ height: 1 }}></div>
        <div className="text-white text-lg font-semibold w-full  py-4 px-3 ">
          <Link
            to="/recent"
            className=""
            onClick={() => {
              dispatch(handleHamBurgerCliked());
            }}
          >
            My Favourites
          </Link>
        </div>
        <div className=" w-full bg-[#FFDD95]" style={{ height: 1 }}></div>
        <div className="text-white text-lg font-semibold w-full  py-4 px-3 ">
          <Link
            to="userProfile"
            className=""
            onClick={() => {
              dispatch(handleHamBurgerCliked());
            }}
          >
            My Profile
          </Link>
        </div>
        <div className=" w-full bg-[#FFDD95]" style={{ height: 1 }}></div>
        <div className="text-white text-lg font-semibold w-full  py-4 px-3 ">
          <Link
            to="userSettings"
            className=""
            onClick={() => {
              dispatch(handleHamBurgerCliked());
            }}
          >
            User Settings
          </Link>
        </div>
        <div className=" w-full bg-[#FFDD95]" style={{ height: 1 }}></div>

        <div className="text-white text-lg font-semibold w-full  py-4 px-3 ">
          <Link
            to="about"
            className=""
            onClick={() => {
              dispatch(handleHamBurgerCliked());
            }}
          >
            About Page
          </Link>
        </div>
        <div className=" w-full bg-[#FFDD95]" style={{ height: 1 }}></div>
      </div>
    </div>
  );
}
