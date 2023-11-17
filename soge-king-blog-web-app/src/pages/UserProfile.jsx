import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import ShareComponent from "../components/ShareComponent";
import AuthModel from "../components/AuthModel";
import HamBurgerMenu from "../components/HamBurgerMenu";
import ussop from "../assets/guest/usoop-guest-3.jpg";
import { getUserBlog } from "../appwrite/appwrite";
import BlogCard from "../components/BlogCard";
export default function UserProfile() {
  const [userBlogData, setUserBlogData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserBlog();
      console.log(data);
      setUserBlogData(data.documents);
    };
    if (localStorage.getItem("id")) {
      fetchData();
    }
  }, []);
  return (
    <div>
      <Navigation />
      <ShareComponent />
      <div className="w-full bg-[#242428]">
        {localStorage.getItem("id") ? (
          <Profile userBlogList={userBlogData} />
        ) : (
          <DontHaveAccount />
        )}
      </div>
      <AuthModel />
      <HamBurgerMenu />
    </div>
  );
}

const Profile = ({ userBlogList }) => {
  return (
    <div className="flex justify-center  w-full ">
      <div className="w-11/12  md:w-4/5 flex flex-col items-center absolute  mt-24 shadow-2xl rounded-md bg-[#242428]">
        <img
          src={ussop}
          className=" h-24 w-24 md:h-28 md:w-28 lg:h-40 lg:w-40 rounded-full relative bottom-16"
        />
        <div className=" flex flex-col items-center space-y-0 mb-5 -mt-10">
          <h1 className="text-xl text-[#FFDD95] font-semibold ">
            {localStorage.getItem("email").replace("@gmail.com", "")}
          </h1>
          <h1 className="text-lg text-[#FFDD95] font-semibold -mt-12">
            {localStorage.getItem("email")}
          </h1>
        </div>
        <div>
          <button
            onClick={() => {
              localStorage.removeItem("id");
              localStorage.removeItem("email");
              window.location.reload();
            }}
            className="px-4 py-2 mb-4 rounded-md font-semibold text-lg bg-[#FFDD95] text-[#242428]"
          >
            Logout
          </button>
        </div>
        <div className="h-1 w-full bg-[#FFDD95] mb-5"></div>
        <h1 className="text-[#FFDD95] text-center mb-5">
          Your Blogs, Double click to edit it
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {userBlogList.map((data) => (
            <div className="flex justify-center" key={data.$id}>
              <BlogCard
                title={data.title}
                blogImg={data.image}
                date={data.date}
                blogParagraph={data.summary}
                liked={data.liked}
                documentId={data.$id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DontHaveAccount = () => {
  return (
    <div className="flex justify-center w-full " style={{ height: "80vh" }}>
      <h1 className="text-3xl text-red-500 font-semibold">
        Create a account first
      </h1>
    </div>
  );
};
