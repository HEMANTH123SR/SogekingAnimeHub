import BlogCard from "../../components/BlogCard";
import Navigation from "../../components/Navigation";
import ShareComponent from "../../components/ShareComponent";
import { Outlet } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="w-full h-full bg-[#242428]">
      <Navigation />
      <ShareComponent />
      <BlogCard
        title={"Myths to Manga"}
        blogImg={
          "https://blog.alltheanime.com/wp-content/uploads/2023/10/totoro-1536x864.jpg"
        }
        Date={"November 7, 2023 "}
        blogParagraph={`
           Young V&A, formerly the Museum of Childhood, opened its doors again on 1st July 2023 after a revamp that took seven years to plan and design. This is its first exhibition since the opening, and every aspect of its presentation and marketing has been engineered to establish itself with its target audience – children and, just as importantly, their parents.

           That’s a tough brief. To make an exhibition that can interest people aged from toddler to grandparent, across such a range of interests, capacities and attention spans, is never easy.
           `}
        comments={20}
      />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;

//import Navigation from "./components/Navigation/Navigation"
// import ShareComponent from "./components/Navigation/ShareComponent";
