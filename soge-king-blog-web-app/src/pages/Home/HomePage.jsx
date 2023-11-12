import Navigation from "../../components/Navigation";
import ShareComponent from "../../components/ShareComponent";
import { Outlet } from "react-router-dom";
import TabsContent from "../../components/Tags";
import AuthModel from "../../components/AuthModel";
import { getBlogs } from "../../appwrite/Auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleBlogsLoading, setListOfBlogs } from "../../store/BlogsReducer";
import HamBurgerMenu from "../../components/HamBurgerMenu";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listOfBlogsCollectionFromDatbase = await getBlogs();
        if (listOfBlogsCollectionFromDatbase) {
          dispatch(setListOfBlogs(listOfBlogsCollectionFromDatbase));
          dispatch(handleBlogsLoading(true));
        }
      } catch (e) {
        console.log(
          "useEffect :: HomePage.jsx :: getting the list from db :: error "
        );
        dispatch(handleBlogsLoading(false));
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full h-full bg-[#242428]">
      <Navigation />
      <ShareComponent />
      <TabsContent />
      <Outlet />
      <AuthModel />
      <HamBurgerMenu/>
    </div>
  );
};

export default HomePage;
