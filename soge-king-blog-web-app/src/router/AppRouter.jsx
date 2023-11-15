import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BigThree from "../pages/BlogsDisplayContent/BigThree";
import Popular from "../pages/BlogsDisplayContent/Popular";
import NineNovas from "../pages/BlogsDisplayContent/NineNovas";
import Recent from "../pages/BlogsDisplayContent/Recent";
import Favourite from "../pages/BlogsDisplayContent/Favourite";
import CreateBlog from "../pages/CreateBlog";
import BlogsContainer from "../pages/BlogsContainer";
import BlogPage from "../pages/BlogPage";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<Popular />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/bigthree" element={<BigThree />} />
          <Route path="/ninenovas" element={<NineNovas />} />
          <Route path="/favourite" element={<Favourite />} />
        </Route>
        <Route path="createBlog" element={<CreateBlog />} />
        <Route path="blog" element={<BlogsContainer />}>
          <Route path=":id" element={<BlogPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
