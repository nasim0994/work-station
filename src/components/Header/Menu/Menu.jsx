import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import MoreDropdown from "./MenuDropdown/MoreDropdown";
import AccountDropdown from "./MenuDropdown/AccountDropdown";

const Menu = () => {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const [user, setUser] = useState(true);

  return (
    <nav className="text-neutral flex gap-6 items-center">
      <ul className="hidden md:flex gap-6 items-center font-medium ">
        <li>
          <Link to="/freelancers" className="hover:text-primary duration-300">
            Find Freelancer
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="hover:text-primary duration-300">
            Find Work
          </Link>
        </li>
        <li>
          <Link to="/blog" className="hover:text-primary duration-300">
            Blog
          </Link>
        </li>
        <li className="relative">
          <button
            onClick={() => setMoreDropdown(!moreDropdown)}
            className="moreDropdownBtn hover:text-primary duration-300 flex gap-2 items-center"
          >
            More
            <MdOutlineKeyboardArrowDown className="text-lg" />
          </button>

          {moreDropdown && (
            <nav className="moreDropdown z-40 absolute top-10 right-0 bg-base-100 rounded-md shadow-lg w-52">
              <MoreDropdown setMoreDropdown={setMoreDropdown} />
            </nav>
          )}
        </li>
      </ul>

      <ul className="flex gap-6 items-center font-medium ">
        {user ? (
          <>
            {/* Message */}
            <li>
              <Link
                to=""
                className="text-neutral/80 hover:text-primary duration-300"
              >
                <HiOutlineMail className="text-[25px]" />
              </Link>
            </li>

            {/* Account */}
            <li className="relative">
              <button
                className="accountDropdownBtn mt-2"
                onClick={() => setAccountDropdown(!accountDropdown)}
              >
                <img
                  src="https://cdn3.f-cdn.com/ppic/213571528/logo/40081811/jdnht/CROPPED_profile_logo_QRRJV_11b07c74774dd59bfb02a3815ff6204e.png?image-optimizer=force&format=webply&width=336"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </button>

              {/* Dropdown */}
              {accountDropdown && (
                <AccountDropdown setAccountDropdown={setAccountDropdown} />
              )}
            </li>
          </>
        ) : (
          <>
            <li className="">
              <label
                htmlFor="signUpIn"
                className="hidden sm:block hover:text-primary duration-300 cursor-pointer"
              >
                Signup
              </label>
            </li>
            <li>
              <label
                htmlFor="signUpIn"
                className="border border-neutral px-6 py-1.5 rounded-md hover:border-primary hover:text-base-100 hover:bg-primary duration-500 cursor-pointer"
              >
                Join
              </label>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
