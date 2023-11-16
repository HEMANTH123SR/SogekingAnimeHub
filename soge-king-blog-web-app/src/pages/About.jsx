import React from "react";
import Navigation from "../components/Navigation";
import ShareComponent from "../components/ShareComponent";
import AuthModel from "../components/AuthModel";
import HamBurgerMenu from "../components/HamBurgerMenu";
import { AiFillGithub ,AiFillAlert,AiOutlineUsergroupAdd,AiFillHtml5} from "react-icons/ai";
export default function About() {
  return (
    <div>
      <Navigation />
      <ShareComponent />
      <div classNameNameName="w-full bg-[#242428]">
        <AboutMeContent />
      </div>
      <AuthModel />
      <HamBurgerMenu />
    </div>
  );
}

const AboutMeContent = () => {
  return (
    <section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
    <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                <div className="lg:max-w-md">
                    <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                        <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                        <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                            About Us
                        </h1>
                    </div>
                    <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                    Welcome to Sogeking, the ultimate hub for anime enthusiasts and bloggers! Founded by Hemanth, a passionate computer science student merging anime love with coding to create a haven for sharing thoughts, favorite moments, and building a vibrant community in the blogging world.
                    </p>
                    <div className="flex flex-wrap items-center">
                        <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                            <div className="p-6 bg-white dark:bg-gray-900">
                                <span className="text-blue-500 dark:text-blue-400">
                                 
                                   <AiFillGithub className="text-3xl"/>
                                </span>
                                <p className="mt-4 mb-2 text-xl font-bold text-gray-700 dark:text-gray-400">Open Source
                                </p>
                              
                            </div>
                        </div>
                        <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                            <div className="p-6 bg-white dark:bg-gray-900">
                                <span className="text-blue-500 dark:text-blue-400">
                                  
                                   <AiFillAlert className="text-3xl"/>
                                </span>
                                <p className="mt-4 mb-2 text-xl font-bold text-gray-700 dark:text-gray-400">Beta Version
                                </p>
                            
                            </div>
                        </div>
                        <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                            <div className="p-6 bg-white dark:bg-gray-900">
                                <span className="text-blue-500 dark:text-blue-400">
                                   <AiOutlineUsergroupAdd className="text-3xl"/>
                                </span>
                                <p className="mt-4 mb-2 text-xl font-bold text-gray-700 dark:text-gray-400"> 10+ Users
                                </p>
                             
                            </div>
                        </div>
                        <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                            <div className="p-6 bg-white dark:bg-gray-900">
                                <span className="text-blue-500 dark:text-blue-400">
                                 <AiFillHtml5 className="text-3xl"/>
                                </span>
                                <p className="mt-4 mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">indie developer
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <img src="https://e1.pxfuel.com/desktop-wallpaper/317/507/desktop-wallpaper-sogeking.jpg" alt=""
                    className="relative z-40 object-cover w-full h-full rounded"/>
            </div>
        </div>
    </div>
</section>
  )
}