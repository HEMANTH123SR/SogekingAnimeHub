const BlogCard = ({ blogImg, title, blogParagraph, Date, comments }) => {
  console.log(blogParagraph)
  return (
    <div
      className="flex flex-col h-90 w-80  m-4 bg-[#242428] rounded-xl shadow-xl text-[#4A4A4D] font-semibold"
    >
      <img src={blogImg} className="rounded-t-xl max-h-2/5 " />
      <div className="p-2 space-y-2">
        <h3 className="text-[#FFDD95] text-md font-bold">{title}</h3>
        <p className="text-sm">{blogParagraph.length > 120 ? blogParagraph.slice(0, 120) : blogParagraph}...</p>
        <div className="flex space-x-6">
          <p className="text-sm">{Date}</p>
          <p className="text-sm">{comments} comments </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
