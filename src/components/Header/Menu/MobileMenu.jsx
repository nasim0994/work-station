import { Link } from "react-router-dom";
import SearchBox from "./../../HomeComponents/SearchBox/SearchBox";
import { BiSun } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { useSelector } from "react-redux";

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
  const { loggedUser } = useSelector((state) => state.auth);

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
            <button className=" hover:text-primary duration-300 flex items-center gap-1">
              <BiSun className="text-xl" />
              Dark
            </button>
          </li>

          {loggedUser?.status && (
            <li>
              <Link
                to="/dashboard/message"
                className="text-neutral/80 hover:text-primary duration-300"
              >
                <div className="flex items-center gap-1">
                  <HiOutlineMail className="text-xl" />
                  Message
                </div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
