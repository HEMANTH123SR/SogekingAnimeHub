import BlogCard from "../../components/BlogCard";
import Navigation from "../../components/Navigation";
import ShareComponent from "../../components/ShareComponent";
import { Outlet } from "react-router-dom";
import TabsContent from "../../components/Tags";

const HomePage = () => {
  return (
    <div className="w-full h-full bg-[#242428]">
      <Navigation />
      <ShareComponent />
      <TabsContent />
      
        <Outlet />

    </div>
  );
};

export default HomePage;
