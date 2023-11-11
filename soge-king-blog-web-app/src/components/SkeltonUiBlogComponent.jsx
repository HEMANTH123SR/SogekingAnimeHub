const SkeltonComponentBlog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
      <SkeltonBloagCard />
      <SkeltonBloagCard />
      <SkeltonBloagCard />
      <SkeltonBloagCard />
      <SkeltonBloagCard />
      <SkeltonBloagCard />
      <SkeltonBloagCard />
      <SkeltonBloagCard />
      <SkeltonBloagCard />
      <SkeltonBloagCard />
      <SkeltonBloagCard />
      <SkeltonBloagCard />
    </div>
  );
};

const SkeltonBloagCard = () => {
  return (
    <div className="flex flex-col h-90 w-80  m-4 rounded-xl shadow-xl bg-[#4A4A4D] font-semibold">
      <div className="rounded-t-xl  bg-[#2b2b2e]  py-20 "></div>
      <div className="p-2 space-y-2">
        <h3 className="bg-[#2b2b2e] mx-3 w-2/4 px-20 py-3 rounded-xl">
          {"                           "}
        </h3>
        <p className="  bg-[#2b2b2e]  mx-3 py-10 rounded-xl">{``}</p>
        <div className="flex space-x-6">
          <p className=" bg-[#2b2b2e] w-2/5 mx-3 py-2 px-14 rounded-xl">
            {"             "}
          </p>
          <p className="bg-[#2b2b2e] w-2/5 mx-3 py-2 px-14 rounded-xl">
            {"             "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkeltonComponentBlog;
//max-h-2/5
