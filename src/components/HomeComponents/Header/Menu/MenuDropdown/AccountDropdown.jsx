import React, { useEffect } from "react";
import { BiSupport } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { TbFileInvoice } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

const AccountDropdown = ({ setAccountDropdown }) => {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        !e.target.closest(".accountDropdownBtn") &&
        !e.target.closest(".accountDropdown")
      ) {
        setAccountDropdown(false);
      }
    });
  }, [setAccountDropdown]);

  return (
    <div className="accountDropdown z-50 bg-base-100 shadow-lg p-4 absolute w-72 rounded-md right-0">
      <div className="flex items-center gap-4 border-b pb-2">
        <img
          src="https://cdn3.f-cdn.com/ppic/213571528/logo/40081811/jdnht/CROPPED_profile_logo_QRRJV_11b07c74774dd59bfb02a3815ff6204e.png?image-optimizer=force&format=webply&width=336"
          alt=""
          className="w-12 h-12 rounded-full"
        />

        <div>
          <h6>Md Nasim Uddin</h6>
          <p className="font-normal">nasimuddin@gmail.com</p>
        </div>
      </div>

      <ul className="font-normal text-neutral/90">
        <li
          onClick={() => setAccountDropdown(false)}
          className="py-1.5 hover:text-primary duration-300 border-b border-gray-100"
        >
          <Link to="/dashboard" className="flex items-center gap-2">
            <RxDashboard />
            <h6>Dashboard</h6>
          </Link>
        </li>
        <li
          onClick={() => setAccountDropdown(false)}
          className="py-1.5 hover:text-primary duration-300 border-b border-gray-100"
        >
          <Link to="/dashboard/profile" className="flex items-center gap-2">
            <BsPersonWorkspace />
            <h6>View Profile</h6>
          </Link>
        </li>

        <li
          onClick={() => setAccountDropdown(false)}
          className="py-1.5 hover:text-primary duration-300 border-b border-gray-100"
        >
          <Link to="/dashboard/support" className="flex items-center gap-2">
            <BiSupport />
            <h6>Support</h6>
          </Link>
        </li>
        <li
          onClick={() => setAccountDropdown(false)}
          className="py-1.5 hover:text-primary duration-300 border-b border-gray-100"
        >
          <Link
            to="/dashboard/account/editProfile"
            className="flex items-center gap-2"
          >
            <FiSettings />
            <h6>Setting</h6>
          </Link>
        </li>
        <li
          onClick={() => setAccountDropdown(false)}
          className="py-1.5 hover:text-primary duration-300 border-b border-gray-100"
        >
          <Link to="/dashboard/invoices" className="flex items-center gap-2">
            <TbFileInvoice className="text-lg" />
            <h6>Invoices</h6>
          </Link>
        </li>
        <li
          onClick={() => setAccountDropdown(false)}
          className="pt-1.5 hover:text-primary duration-300"
        >
          <Link to="/dashboard/profile" className="flex items-center gap-2">
            <CgLogOut className="text-lg" />
            <h6>Logout</h6>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountDropdown;
