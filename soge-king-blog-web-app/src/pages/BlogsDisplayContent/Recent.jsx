import React from "react";
import BlogCard from "../../components/BlogCard";
import { useSelector } from "react-redux";
import SkeltonComponentBlog from "../../components/SkeltonUiBlogComponent";

export default function Recent() {
  const BlogsData = useSelector((state) => state.blog);
  if (BlogsData.blogsLoading) {
    return (
      <div>
        <SkeltonComponentBlog />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
      {BlogsData.listOfBlogs.map((data) => (
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
  );
}

