import { Link } from "react-router-dom";
import SearchBox from "./../../HomeComponents/SearchBox/SearchBox";

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div
      id="mobileMenu"
      className={`${mobileMenu ? "null" : "mobileMenuHide"} mobileMenu`}
    >
      {/* Search */}
      <SearchBox />

      {/* General Menu */}
      <div className="mt-4">
        <h2 className="pb-2 border-b  text-neutral font-semibold">General</h2>

        <ul className="text-neutral/80">
          <li onClick={() => setMobileMenu(false)}>
            <Link to="/freelancers">Find Freelancer</Link>
          </li>

          <li onClick={() => setMobileMenu(false)}>
            <Link to="/jobs">Find Work</Link>
          </li>

          <li onClick={() => setMobileMenu(false)}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
