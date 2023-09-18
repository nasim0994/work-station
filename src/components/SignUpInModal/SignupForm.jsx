import { useState } from "react";
import { Link } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { HiUser } from "react-icons/hi";
import { MdEmail, MdKeyboardArrowDown } from "react-icons/md";
import { AiFillUnlock, AiTwotonePhone } from "react-icons/ai";
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

const SignupForm = () => {
  const [signupPage, setSignupPage] = useState(1);
  const [accountType, setAccountType] = useState(null);

  const [countries, setCountries] = useState(countriesData);
  const [countryToggle, setCountryToggle] = useState(false);
  const [selectCounty, setSelectCountry] = useState("");

  const handelSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    const countryName = countriesData.filter((country) =>
      country.toLowerCase().includes(searchText)
    );
    setCountries(countryName);
  };

  const handelOutputCountry = (e) => {
    setSelectCountry(e.target.innerText);
    setCountryToggle(false);
  };

  const handelNextPage = () => {
    if (accountType === null) {
      alert("select Account Type");
    } else {
      setSignupPage(2);
    }
  };

  return (
    <div>
      {/* Form 1 */}
      <div className={`${signupPage !== 1 && "hidden"}`}>
        <img src="/images/logo.png" alt="" className="w-48 mx-auto" />

        <h6 className="text-xl font-medium text-center mt-3">
          Join as a client or freelancer
        </h6>

        <form className="mt-10">
          <div className="grid grid-cols-2 justify-center gap-5">
            <label
              className="cursor-pointer"
              onClick={() => setAccountType("client")}
            >
              <input type="radio" className="peer sr-only" name="signup" />
              <div
                className={`${
                  accountType === "client" &&
                  "bg-secondary text-primary ring-primary ring-offset-2 ring-2"
                } rounded-md py-4 text-neutral/80 ring-1 transition-all hover:shadow-lg  ring-neutral/70`}
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
                  "bg-secondary text-primary ring-primary ring-offset-2 ring-2"
                } rounded-md py-4 text-neutral/80 ring-1 transition-all hover:shadow-lg ring-neutral/70 `}
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
        </form>

        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className="bg-primary text-base-100 py-2 px-10 font-medium rounded-md hover:bg-opacity-80 duration-300"
            onClick={handelNextPage}
          >
            Next
          </button>
        </div>
      </div>

      {/* Form 2 */}
      <div className={`${signupPage !== 2 && "hidden"}`}>
        <button onClick={() => setSignupPage(1)}>
          <BiLeftArrowAlt className="text-2xl opacity-80" />
        </button>
        <img src="/images/logo.png" alt="" className="w-48 mx-auto mb-2" />
        <h6 className="font-medium text-center">UserName & Password</h6>

        <form action="" className="mt-10 text-neutral">
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
                type="password"
                placeholder="Password"
                className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                required
              />
            </div>

            {/*Re Password */}
            <div className="mb-6 relative">
              <span className="absolute bottom-2 text-neutral/80">
                <AiFillUnlock className="text-lg" />
              </span>
              <input
                type="password"
                placeholder="Re Password"
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
                onClick={() => setSignupPage(3)}
                className="w-full py-2 font-semibold text-base-100 bg-primary rounded hover:bg-opacity-90 duration-300 "
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Form 3 */}
      <div className={`${signupPage !== 3 && "hidden"}`}>
        <button onClick={() => setSignupPage(2)}>
          <BiLeftArrowAlt className="text-2xl opacity-80" />
        </button>
        <img src="/images/logo.png" alt="" className="w-48 mx-auto mb-2" />
        <h6 className="font-medium text-center">Personal info</h6>

        <form action="" className="mt-10 text-neutral">
          {/* input */}
          <div>
            {/* name */}
            <div className="grid grid-cols-2 gap-6">
              <div className="mb-6 relative">
                <span className="absolute bottom-2 text-neutral/80">
                  <HiUser />
                </span>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                  required
                />
              </div>
              <div className="mb-6 relative">
                <span className="absolute bottom-2 text-neutral/80">
                  <HiUser />
                </span>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6 relative">
              <span className="absolute bottom-2 text-neutral/80">
                <MdEmail />
              </span>
              <input
                type="email"
                placeholder="Email"
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
                  defaultValue={selectCounty}
                />
                <span className="absolute right-0">
                  <MdKeyboardArrowDown />
                </span>
              </div>
              <div
                className={`${
                  countryToggle && "countryDropdownShow"
                } w-full bg-base-100 shadow-lg rounded-md absolute top-full countryDropdown`}
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
                  {countries.map((county, i) => (
                    <li
                      key={i}
                      onClick={(e) => handelOutputCountry(e)}
                      className="py-1 hover:bg-gray-100 duration-200 cursor-pointer px-2 rounded"
                    >
                      {county}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="mt-4 mb-6">
            <div className="flex gap-2 justify-start items-center cursor-pointer">
              <input id="one" type="checkbox" />
              <label
                htmlFor="one"
                className="text-sm text-neutral-content font-normal cursor-pointer"
              >
                Send me emails with tips on how to find talent that fits my
                needs.
              </label>
            </div>

            <div className="flex gap-2 justify-start items-center cursor-pointer">
              <input id="two" type="checkbox" />
              <label
                htmlFor="two"
                className="text-sm text-neutral-content font-normal cursor-pointer"
              >
                Yes, I understand and agree to the Upwork Terms of Service ,
                including the User Agreement and
                <Link href="" className="text-primary underline">
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
                className="w-full py-2 font-semibold text-base-100 bg-primary rounded hover:bg-opacity-90 duration-300 "
              >
                Create my account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
