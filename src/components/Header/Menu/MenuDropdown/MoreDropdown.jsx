import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MoreDropdown = ({ setMoreDropdown }) => {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        !e.target.closest(".moreDropdownBtn") &&
        !e.target.closest(".moreDropdown")
      ) {
        setMoreDropdown(false);
      }
    });
  }, [setMoreDropdown]);
  return (
    <ul className="p-2 text-neutral/90 font-normal">
      <li onClick={() => setMoreDropdown(false)}>
        <Link to="/about" className="block p-1 hover:text-primary duration-300">
          About us
        </Link>
      </li>
      <li onClick={() => setMoreDropdown(false)}>
        <Link
          to="/howItWork"
          className="block p-1 hover:text-primary duration-300"
        >
          How it works
        </Link>
      </li>
      <li onClick={() => setMoreDropdown(false)}>
        <Link
          to="/career"
          className="block p-1 hover:text-primary duration-300"
        >
          Career
        </Link>
      </li>
      <li onClick={() => setMoreDropdown(false)}>
        <Link
          to="/termsConditions"
          className="block p-1 hover:text-primary duration-300"
        >
          Terms & Conditions
        </Link>
      </li>
      <li onClick={() => setMoreDropdown(false)}>
        <Link
          to="/privacyPolicy"
          className="block p-1 hover:text-primary duration-300"
        >
          Privacy Policy
        </Link>
      </li>
    </ul>
  );
};

export default MoreDropdown;
