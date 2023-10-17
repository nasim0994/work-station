import { useState } from "react";
import { Link } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { HiUser } from "react-icons/hi";
import { MdEmail, MdKeyboardArrowDown } from "react-icons/md";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillUnlock,
  AiTwotonePhone,
} from "react-icons/ai";
import { HiFlag } from "react-icons/hi";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { GiLaptop } from "react-icons/gi";

const countriesData = [
  "Argentina",
  "Bangladesh",
  "India",
  "Pakisthan",
  "Nepal",
  "Vhutan",
  "Brazil",
];

export default function CreateAccount() {
  const [signUpPage, setSignUpPage] = useState(1);
  const [accountType, setAccountType] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [privacyToggle, setPrivacyToggle] = useState(false);

  const [countries, setCountries] = useState(countriesData);
  const [countryToggle, setCountryToggle] = useState(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");

  const handelSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    const countryName = countriesData.filter((country) =>
      country.toLowerCase().includes(searchText)
    );
    setCountries(countryName);
  };

  const handelOutputCountry = (e) => {
    setCountry(e.target.innerText);
    setCountryToggle(false);
  };

  const handelSecondPage = () => {
    if (accountType !== null) {
      setSignUpPage(2);
    } else {
      alert("select Account Type");
    }
  };

  const handelThirdPage = () => {
    if (userName === "") {
      alert("user name is required");
    } else if (password === "") {
      alert("password is required");
    } else if (password.length < 8) {
      alert("password must be at least 8 characters");
    } else if (rePassword === "") {
      alert("rePassword is required");
    } else if (password !== rePassword) {
      alert("password not match");
    } else {
      setSignUpPage(3);
      setShowPassword(false);
    }
  };

  const handelCreateAccount = () => {
    if (name === "") {
      alert("Name is required");
    } else if (email === "") {
      alert("Email is required");
    } else if (number === "") {
      alert("Number is required");
    } else if (country === "") {
      alert("Country is required");
    } else {
      alert("ok");
    }
  };

  return (
    <div>
      {/* Form 1 */}
      <div className={`${signUpPage !== 1 && "hidden"}`}>
        <img src="/images/logo/logo.png" alt="" className="w-14 mx-auto" />

        <h6 className="text-xl font-medium text-center mt-3">
          Join as a client or freelancer
        </h6>

        <div className="mt-10">
          <div className="grid grid-cols-2 justify-center gap-5">
            <label
              className="cursor-pointer"
              onClick={() => setAccountType("client")}
            >
              <input type="radio" className="peer sr-only" name="signup" />
              <div
                className={`${
                  accountType === "client" &&
                  "bg-primary text-base-100 ring-primary ring-offset-2 ring-2"
                } rounded-md py-4 ring-1 transition-all hover:shadow-lg  ring-neutral/70`}
              >
                <div className="flex justify-between px-4">
                  <BsFillClipboardDataFill className="text-xl" />

                  <BsFillCheckCircleFill className="text-xl" />
                </div>

                <div>
                  <h6 className="text-lg mt-3 font-medium px-4">
                    I’m a client,hiring for a project
                  </h6>
                </div>
              </div>
            </label>

            <label
              className="cursor-pointer"
              onClick={() => setAccountType("freelancer")}
            >
              <input type="radio" className="peer sr-only" name="signup" />
              <div
                className={`${
                  accountType === "freelancer" &&
                  "bg-primary text-base-100 ring-primary ring-offset-2 ring-2"
                } rounded-md py-4  ring-1 transition-all hover:shadow-lg ring-neutral/70 `}
              >
                <div className="flex justify-between px-4">
                  <GiLaptop className="text-xl" />

                  <BsFillCheckCircleFill className="text-xl" />
                </div>

                <div className="px-4">
                  <h6 className="text-lg mt-3 font-medium">
                    I’m a freelancer, looking for work
                  </h6>
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className="py-2 px-10 font-medium primary_bg_gradient"
            onClick={handelSecondPage}
          >
            Next
          </button>
        </div>
      </div>

      {/* Form 2 */}
      <div className={`${signUpPage !== 2 && "hidden"}`}>
        <button onClick={() => setSignUpPage(1)}>
          <BiLeftArrowAlt className="text-2xl opacity-80" />
        </button>
        <img src="/images/logo/logo.png" alt="" className="w-14 mx-auto mb-2" />
        <h6 className="font-medium text-center">UserName & Password</h6>

        <div className="mt-10 text-neutral">
          {/* input */}
          <div>
            {/* User name */}
            <div className="mb-6 relative">
              <span className="absolute bottom-2 text-neutral/80">
                <MdEmail />
              </span>
              <input
                type="text"
                placeholder="User name"
                onChange={(e) => setUserName(e.target.value)}
                className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6 relative">
              <span className="absolute bottom-2 text-neutral/80">
                <AiFillUnlock className="text-lg" />
              </span>
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                required
              />

              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 bottom-2 cursor-pointer"
              >
                <span className={`${showPassword ? "block" : "hidden"}`}>
                  <AiFillEye />
                </span>
                <span className={`${showPassword ? "hidden" : "block"}`}>
                  <AiFillEyeInvisible />
                </span>
              </div>
            </div>

            {/*Re Password */}
            <div className="mb-6 relative">
              <span className="absolute bottom-2 text-neutral/80">
                <AiFillUnlock className="text-lg" />
              </span>
              <input
                type="password"
                placeholder="Re Password"
                onChange={(e) => setRePassword(e.target.value)}
                className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                required
              />
            </div>
          </div>

          {/* Button */}
          <div>
            <div className="flex flex-col w-full border-opacity-50">
              <button
                type="submit"
                onClick={handelThirdPage}
                className="w-full py-2 font-semibold text-base-100 primary_bg_gradient"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Form 3 */}
      <div className={`${signUpPage !== 3 && "hidden"}`}>
        <button onClick={() => setSignUpPage(2)}>
          <BiLeftArrowAlt className="text-2xl opacity-80" />
        </button>
        <img src="/images/logo/logo.png" alt="" className="w-14 mx-auto mb-2" />
        <h6 className="font-medium text-center">Personal Info</h6>

        <div className="mt-10 text-neutral">
          {/* input */}
          <div>
            {/* name */}
            <div className="mb-6 relative">
              <span className="absolute bottom-2 text-neutral/80">
                <HiUser />
              </span>
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6 relative">
              <span className="absolute bottom-2 text-neutral/80">
                <MdEmail />
              </span>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-6 relative">
              <span className="absolute bottom-2 text-neutral/80">
                <AiTwotonePhone className="text-lg" />
              </span>
              <input
                type="text"
                placeholder="Number"
                onChange={(e) => setNumber(e.target.value)}
                className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                required
              />
            </div>

            {/* Country */}
            <div className="mb-2 relative">
              <div className="relative">
                <span className="absolute bottom-2 text-neutral/80">
                  <HiFlag className="text-lg" />
                </span>
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light cursor-pointer"
                  required
                  onClick={() => setCountryToggle(!countryToggle)}
                  defaultValue={country}
                  readOnly
                />
                <span className="absolute right-0">
                  <MdKeyboardArrowDown />
                </span>
              </div>
              <div
                className={`${
                  countryToggle && "selectDropdownShow"
                } w-full bg-base-100 shadow-lg rounded-md absolute top-full selectDropdown`}
              >
                <div className="p-4 pb-0">
                  <input
                    type="search"
                    placeholder="Search Your Country"
                    className="border border-neutral/80 outline-none px-3 py-1.5 w-full bg-transparent rounded-md"
                    onChange={(e) => handelSearch(e)}
                  />
                </div>
                <ul className="p-4 pt-2 h-52 overflow-y-scroll">
                  {countries.map((country, i) => (
                    <li
                      key={i}
                      onClick={(e) => handelOutputCountry(e)}
                      className="py-1 hover:bg-gray-100 duration-200 cursor-pointer px-2 rounded"
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="mt-4 mb-6">
            <div className="flex gap-2 justify-start items-start cursor-pointer">
              <input
                id="privacy"
                type="checkbox"
                className="mt-1"
                checked={privacyToggle && "checked"}
                onChange={() => setPrivacyToggle(!privacyToggle)}
              />
              <label
                htmlFor="privacy"
                className="text-sm text-neutral-content font-normal cursor-pointer"
              >
                Yes, I understand and agree to the WorkStation Terms of Service
                , including the User Agreement and
                <Link
                  to="/privacy-policy"
                  target="_blank"
                  className="text-primary underline"
                >
                  {" "}
                  Privacy Policy{" "}
                </Link>
                .
              </label>
            </div>
          </div>

          {/* Button */}
          <div>
            <div className="flex flex-col w-full border-opacity-50">
              <button
                type="submit"
                onClick={handelCreateAccount}
                disabled={!privacyToggle && "disabled"}
                className="w-full py-2 font-semibold primary_bg_gradient"
              >
                Create my account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
