import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#18202B]">
      <div className="container">
        {/* Main Footer */}
        <footer className="grid sm:grid-cols-2 md:grid-cols-4 py-10 gap-10 text-base-100">
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex gap-2 items-center">
              <img src="/images/logo/logo.png" alt="" className="w-9" />
              <h1 className="primary_text_gradient text-3xl font-semibold">
                WorkStation
              </h1>
            </Link>
            <p className="text-gray-400 text-[15px] mt-2">
              Best Job Platform in Bangladesh
            </p>
          </div>

          <div className="text-sm">
            <h6 className="text-neutral-content font-bold">ABOUT</h6>
            <nav className="flex flex-col gap-1.5 mt-4">
              <Link to="/about" className="hover:text-primary duration-300">
                About us
              </Link>
              <Link to="/career" className="hover:text-primary duration-300">
                Career
              </Link>
              <Link
                to="/terms-conditions"
                className="hover:text-primary duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy-policy"
                className="hover:text-primary duration-300"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div className="text-sm">
            <h6 className="text-neutral-content font-bold">Support</h6>
            <nav className="flex flex-col gap-1.5 mt-4">
              <Link
                to="/dashboard/support"
                className="hover:text-primary duration-300"
              >
                Help & Support
              </Link>
              <Link
                to="/dashboard/setting"
                className="hover:text-primary duration-300"
              >
                Setting
              </Link>
              <Link to="" className="hover:text-primary duration-300">
                Selling on WorkStation
              </Link>
              <Link to="" className="hover:text-primary duration-300">
                Buying on WorkStation
              </Link>
            </nav>
          </div>

          <div className="text-sm">
            <h6 className="text-neutral-content font-bold">Community</h6>
            <nav className="flex flex-col gap-1.5 mt-4">
              <Link to="/blogs" className="hover:text-primary duration-300">
                Blogs
              </Link>
              <Link to="/" className="hover:text-primary duration-300">
                Events
              </Link>
            </nav>
          </div>
        </footer>

        {/* Bottom Footer */}
        <div className="flex justify-around items-center py-4 border-t border-accent/50">
          <p className="text-gray-400 text-sm sm:text-[15px]">
            © WorkStation 2023
          </p>

          {/* Social Link */}
          <div className="text-gray-300">
            <div className="flex sm:gap-2">
              <Link
                to=""
                target="_blank"
                className="hover:bg-gray-700 p-2 rounded-full duration-200"
              >
                <FaFacebookF className="text-lg" />
              </Link>

              <Link
                to=""
                target="_blank"
                className="hover:bg-gray-700 p-2 rounded-full duration-200"
              >
                <AiOutlineTwitter className="text-xl" />
              </Link>

              <Link
                to=""
                target="_blank"
                className="hover:bg-gray-700 p-2 rounded-full duration-200"
              >
                <AiFillInstagram className="text-xl" />
              </Link>

              <Link
                to=""
                target="_blank"
                className="hover:bg-gray-700 p-2 rounded-full duration-200"
              >
                <FaLinkedinIn className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
