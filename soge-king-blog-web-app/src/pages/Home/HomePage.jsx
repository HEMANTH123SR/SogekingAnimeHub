import Navigation from "../../components/Navigation";
import ShareComponent from "../../components/ShareComponent";
import { Outlet } from "react-router-dom";
import TabsContent from "../../components/Tags";
import AuthModel from "../../components/AuthModel";

const HomePage = () => {
  return (
    <div className="w-full h-full bg-[#242428]">
      <Navigation />
      <ShareComponent />
      <TabsContent />
      <Outlet />
      <AuthModel/>
    </div>
  );
};

export default HomePage;
