import React, { useEffect, useState } from "react";
import { getBlog } from "../appwrite/appwrite";
import { Link, useLocation } from "react-router-dom";
export default function BlogPage() {
  const pathName = useLocation().pathname.replace("/blog/", "");
  const [blogData, setBlogData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const blogDataFromAppWriteDb = await getBlog(pathName);
      setBlogData(blogDataFromAppWriteDb);
    };
    fetchData();
  }, []);

  if (!blogData) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <h1>loading </h1>
      </div>
    );
  }
  return (
    <div className="w-full h-full flex justify-center bg-[#242428] p-5">
      <div className="w-4/5 h-full flex  flex-col  space-y-6 ">
        <div className="flex justify-center">
          <h1 className="text-2xl text-[#FFDD95] font-semibold">
            {blogData.title}
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={blogData.image} className="w-full h-90" />
        </div>

        <div>
          <div
            dangerouslySetInnerHTML={{ __html: blogData.textEditorData }}
           
            className="flex flex-col space-y-4 font-mono text-[#FFDD95] font-semibold "
          ></div>
        </div>
        <div style={{height:2}} className="bg-[#FFDD95]">

        </div>
        <div className="flex pt-6">
          <div className="w-1/2 flex flex-col items-start ">
            <h1 className="text-[#FFDD95] text-lg font-semibold underline">Author: {blogData.name}</h1>
            <Link className="text-[#FFDD95]" to="/">Visit Profile</Link>
          </div>

          <div className="w-1/2 flex justify-end">
            <button onClick={()=>{}}>
<p className="text-[#FFDD95] text-lg font-semibold ">Likes {blogData.likes=="" || 0}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="flex flex-col space-y-4">
// <h1 className="text-xl text-[#FFDD95] font-semibold underline ">Summary</h1>
//<p className="text-lg text-white">{blogData.summary}</p>
// </div>
