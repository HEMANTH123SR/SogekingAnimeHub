import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Tags = () => {
  const pathName = useLocation().pathname;
  const [location, setLocation] = useState("/");

  useEffect(() => {
    setLocation(pathName);
  }, [pathName]);

  return (
    <div className="flex justify-center text-[#FFFFFF] font-semibold overflow-x-auto">
      <div className="flex m-4 space-x-4">
        <TagLink to="/" currentPath={location}>Popular</TagLink>
        <TagLink to="/recent" currentPath={location}>Recent</TagLink>
        <TagLink to="/bigthree" currentPath={location}>Big Three</TagLink>     
        <TagLink to="/favourite" currentPath={location}>Favourite</TagLink>
      </div>
    </div>
  );
};

const TagLink = ({ to, currentPath, children }) => (
  <div
    className={`md:text-base lg:text-base border-b-2 ${currentPath === to ? "text-[#FFDD95]" : ""}`}
    style={{ borderColor: `${currentPath === to ? "#FFDD95" : "#FFFFFF"}` }}
  >
    <Link to={to} className="px-1 sm:px-4 md:px-5 lg:px-6">
      {children}
    </Link>
  </div>
);

export default Tags;

