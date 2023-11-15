import { AiFillLike } from "react-icons/ai";

const BlogCard = ({ blogImg, title, blogParagraph, date, liked }) => {
  return (
    <div className="flex flex-col h-90 w-80  m-4 bg-[#242428] rounded-xl shadow-xl text-[#4A4A4D] font-semibold">
      <img src={blogImg} className="rounded-t-xl h-[150px]" />
      <div className="p-2 space-y-2">
        <h3 className="text-[#FFDD95] text-md font-bold">{title}</h3>
        <p className="text-sm">
          {blogParagraph.length > 120
            ? blogParagraph.slice(0, 120)
            : blogParagraph}
          ...
        </p>
        <div className="flex px-5 items-center">
          <div className="w-1/2  align-middle ">
            <p className="text-base">{date}</p>
          </div>

          <div className="w-1/2  align-bottom flex   items-center justify-end">
            <AiFillLike className="text-base " />
            <p className="text-base ">{liked}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
