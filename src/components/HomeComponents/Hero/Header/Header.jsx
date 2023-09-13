import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Menu from "./Menu/Menu";
import MobileMenu from "./Menu/MobileMenu";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        !e.target.closest(".mobileMenuBtn") &&
        !e.target.closest("#mobileMenu")
      ) {
        setMobileMenu(false);
      }
    });
  }, []);

  return (
    <header className="border-b py-1">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            {/* Mobile Sidebar */}
            <div className="md:hidden">
              <button
                className="mobileMenuBtn"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <AiOutlineMenu className="text-2xl text-neutral mt-3" />
              </button>

              {/* -----MobileMenu Drawer---- */}
              <MobileMenu
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
              />
            </div>

            <Link to="/" className="flex gap-2 items-center">
              <img src="/images/logo/logo.png" alt="" className="w-9" />
              <h1 className="primary_text_gradient text-3xl font-semibold">
                WorkStation
              </h1>
            </Link>
          </div>

          <div>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
}
