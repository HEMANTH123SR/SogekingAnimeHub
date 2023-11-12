
import React from "react";
import BlogCard from "../../../components/BlogCard";
import { useSelector } from "react-redux";
import SkeltonComponentBlog from "../../../components/SkeltonUiBlogComponent";

export default function BigThree() {
  const BlogsData = useSelector((state) => state.blog);
  if (BlogsData.blogsLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
        <SkeltonComponentBlog />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
      {BlogsData.listOfBlogs.map((data) => (
        <div className="flex justify-center">
          <BlogCard
            title={data.title}
            blogImg={data.img}
            Date={data.date}
            blogParagraph={data.contentBlog}
            liked={data.liked}
          />
        </div>
      ))}
    </div>
  );
}


