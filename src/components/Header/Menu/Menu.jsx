import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import AccountDropdown from "./MenuDropdown/AccountDropdown";
import SignUpInModal from "../../SignUpInModal/SignUpInModal";
import { useSelector } from "react-redux";
import { BiSun } from "react-icons/bi";

const Menu = () => {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [formToggle, setFormToggle] = useState("");
  const { loggedUser } = useSelector((state) => state.auth);

  return (
    <nav className="text-neutral flex gap-3 sm:gap-6 items-center">
      <ul className="hidden md:flex gap-6 items-center font-medium ">
        <li>
          <NavLink
            to="/freelancers"
            className="hover:text-primary duration-300"
          >
            Find Freelancer
          </NavLink>
        </li>
        <li>
          <NavLink to="/jobs" className="hover:text-primary duration-300">
            Find Work
          </NavLink>
        </li>

        <li>
          <button className="text-xl hover:text-primary duration-300">
            <BiSun />
          </button>
        </li>
      </ul>

      <ul className="flex gap-3 sm:gap-5 items-center font-medium ">
        {loggedUser?.status ? (
          <>
            {/* Message */}
            <li className="hidden sm:block">
              <Link
                to="/dashboard/message"
                className="text-neutral/80 hover:text-primary duration-300 "
              >
                <HiOutlineMail className="text-[25px] mt-[2px]" />
              </Link>
            </li>

            {/* Account */}
            <li className="relative">
              <button
                className="accountDropdownBtn mt-2"
                onClick={() => setAccountDropdown(!accountDropdown)}
              >
                <img
                  src={loggedUser?.data?.photoUrl}
                  alt=""
                  className="w-9 h-9 rounded-full"
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
            <li>
              <button
                onClick={() => setFormToggle("signup")}
                className="signupBtn hidden sm:block hover:text-primary duration-300"
              >
                Signup
              </button>
            </li>
            <li>
              <button
                onClick={() => setFormToggle("login")}
                className="loginBtn border border-neutral px-6 py-1.5 rounded-md hover:border-primary hover:text-base-100 hover:bg-primary duration-500"
              >
                Join
              </button>
            </li>

            {(formToggle === "login" || formToggle === "signup") && (
              <SignUpInModal
                formToggle={formToggle}
                setFormToggle={setFormToggle}
              />
            )}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
