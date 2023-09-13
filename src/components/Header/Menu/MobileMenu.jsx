import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import MoreDropdown from "./MenuDropdown/MoreDropdown";
import SearchBox from "./../../HomeComponents/SearchBox/SearchBox";

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
  const [moreDropdown, setMoreDropdown] = useState(false);
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

          <li>
            <button
              onClick={() => setMoreDropdown(!moreDropdown)}
              className="py-1 moreDropdownBtn flex justify-between items-center w-full"
            >
              More
              <MdOutlineKeyboardArrowDown className="text-lg" />
            </button>

            {moreDropdown && <MoreDropdown setMoreDropdown={setMoreDropdown} />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
