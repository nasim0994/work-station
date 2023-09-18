import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import AccountDropdown from "./MenuDropdown/AccountDropdown";
import SignUpInModal from "../../SignUpInModal/SignUpInModal";

const Menu = () => {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [formToggle, setFormToggle] = useState("");
  const user = false;

  return (
    <nav className="text-neutral flex gap-6 items-center">
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
          <NavLink to="/blogs" className="hover:text-primary duration-300">
            Blog
          </NavLink>
        </li>
      </ul>

      <ul className="flex gap-6 items-center font-medium ">
        {user ? (
          <>
            {/* Message */}
            <li>
              <Link
                to="/dashboard/message"
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
                className="signupBtn hidden sm:block hover:text-primary duration-300 cursor-pointer"
              >
                Signup
              </button>
            </li>
            <li>
              <button
                onClick={() => setFormToggle("login")}
                className="loginBtn border border-neutral px-6 py-1.5 rounded-md hover:border-primary hover:text-base-100 hover:bg-primary duration-500 cursor-pointer"
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
