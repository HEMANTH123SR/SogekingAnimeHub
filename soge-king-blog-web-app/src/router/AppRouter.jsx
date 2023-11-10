import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import BigThree from "../pages/Home/BlogsDisplayContent/BigThree";
import Popular from "../pages/Home/BlogsDisplayContent/Popular";
import NineNovas from "../pages/Home/BlogsDisplayContent/NineNovas";
import Recent from "../pages/Home/BlogsDisplayContent/Recent";
import Favourite from "../pages/Home/BlogsDisplayContent/Favourite";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} >
            <Route path="/popular" element={<Popular/>}/>
            <Route path="/recent" element={<Recent />} />
            <Route path="/bigthree" element={<BigThree/>}/>
            <Route path="/ninenovas" element={<NineNovas/>}/>
            <Route path="/favourite" element={<Favourite/>} />
            </Route>
      </Routes>
    </>
  );
};

export default AppRouter;


