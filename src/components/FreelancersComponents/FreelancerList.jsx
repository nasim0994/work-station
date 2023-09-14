import { AiOutlineHeart } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

export default function FreelancerList() {
  return (
    <div className="w-full mt-6 lg:mt-0">
      <div className="border rounded-md py-4 px-6 mb-6 bg-base-100">
        <div className="sm:flex justify-between items-center">
          <div className="flex gap-4">
            {/* img */}
            <div>
              <Link to="">
                <img
                  src=""
                  alt=""
                  className="w-24 h-[95px] rounded hover:shadow-lg"
                  width="100"
                  height="100"
                />
              </Link>
            </div>

            <div>
              <Link to="">
                <h6 className="font-semibold hover:text-primary duration-300">
                  Nasim
                </h6>
              </Link>
              <p className="text-neutral/70 font-medium text-[15px]">
                Front-End Developer
              </p>

              <div className="flex gap-4 items-center text-neutral/80 mt-2">
                <div className="flex items-center gap-1 border-r pr-4">
                  <GoLocation />
                  <p>Dhaka</p>
                </div>

                <button className="flex items-center gap-1 hover:text-primary">
                  <AiOutlineHeart className="text-lg" />
                  <p>Save</p>
                </button>
              </div>
            </div>
          </div>

          {/* Review/star */}
          <div className="my-4 sm:mt-0">
            <div className="flex gap-px items-center">
              {Array.from({ length: 5 }, (element, index) => {
                return (
                  <span key={index}>
                    {3.5 >= index + 1 ? (
                      <FaStar className="text-yellow-500" />
                    ) : 3.5 >= index + 0.5 ? (
                      <FaStarHalfAlt className="text-yellow-500" />
                    ) : (
                      <FaStar className="text-gray-300" />
                    )}
                  </span>
                );
              })}
            </div>
            <p className="text-xl sm:text-center py-1">
              <span>5</span>
              <span className="text-sm text-neutral/70">/5</span>
            </p>
            <p className="text-sm text-primary">(100 feedback)</p>
          </div>
        </div>

        {/* Description */}
        <div className="py-2">
          <h6 className="text-[15px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </h6>
        </div>

        {/* Skill */}
        <div className="mt-4 text-sm font-medium text-neutral/80">
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            Html
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            css
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            Javascript
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            React
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            NextJs
          </button>
        </div>
      </div>

      <div className="border rounded-md py-4 px-6 mb-6 bg-base-100">
        <div className="sm:flex justify-between items-center">
          <div className="flex gap-4">
            {/* img */}
            <div>
              <Link to="">
                <img
                  src=""
                  alt=""
                  className="w-24 h-[95px] rounded hover:shadow-lg"
                  width="100"
                  height="100"
                />
              </Link>
            </div>

            <div>
              <Link to="">
                <h6 className="font-semibold hover:text-primary duration-300">
                  Nasim
                </h6>
              </Link>
              <p className="text-neutral/70 font-medium text-[15px]">
                Front-End Developer
              </p>

              <div className="flex gap-4 items-center text-neutral/80 mt-2">
                <div className="flex items-center gap-1 border-r pr-4">
                  <GoLocation />
                  <p>Dhaka</p>
                </div>

                <button className="flex items-center gap-1 hover:text-primary">
                  <AiOutlineHeart className="text-lg" />
                  <p>Save</p>
                </button>
              </div>
            </div>
          </div>

          {/* Review/star */}
          <div className="my-4 sm:mt-0">
            <div className="flex gap-px items-center">
              {Array.from({ length: 5 }, (element, index) => {
                return (
                  <span key={index}>
                    {3.5 >= index + 1 ? (
                      <FaStar className="text-yellow-500" />
                    ) : 3.5 >= index + 0.5 ? (
                      <FaStarHalfAlt className="text-yellow-500" />
                    ) : (
                      <FaStar className="text-gray-300" />
                    )}
                  </span>
                );
              })}
            </div>
            <p className="text-xl sm:text-center py-1">
              <span>5</span>
              <span className="text-sm text-neutral/70">/5</span>
            </p>
            <p className="text-sm text-primary">(100 feedback)</p>
          </div>
        </div>

        {/* Description */}
        <div className="py-2">
          <h6 className="text-[15px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </h6>
        </div>

        {/* Skill */}
        <div className="mt-4 text-sm font-medium text-neutral/80">
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            Html
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            css
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            Javascript
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            React
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            NextJs
          </button>
        </div>
      </div>

      <div className="border rounded-md py-4 px-6 mb-6 bg-base-100">
        <div className="sm:flex justify-between items-center">
          <div className="flex gap-4">
            {/* img */}
            <div>
              <Link to="">
                <img
                  src=""
                  alt=""
                  className="w-24 h-[95px] rounded hover:shadow-lg"
                  width="100"
                  height="100"
                />
              </Link>
            </div>

            <div>
              <Link to="">
                <h6 className="font-semibold hover:text-primary duration-300">
                  Nasim
                </h6>
              </Link>
              <p className="text-neutral/70 font-medium text-[15px]">
                Front-End Developer
              </p>

              <div className="flex gap-4 items-center text-neutral/80 mt-2">
                <div className="flex items-center gap-1 border-r pr-4">
                  <GoLocation />
                  <p>Dhaka</p>
                </div>

                <button className="flex items-center gap-1 hover:text-primary">
                  <AiOutlineHeart className="text-lg" />
                  <p>Save</p>
                </button>
              </div>
            </div>
          </div>

          {/* Review/star */}
          <div className="my-4 sm:mt-0">
            <div className="flex gap-px items-center">
              {Array.from({ length: 5 }, (element, index) => {
                return (
                  <span key={index}>
                    {3.5 >= index + 1 ? (
                      <FaStar className="text-yellow-500" />
                    ) : 3.5 >= index + 0.5 ? (
                      <FaStarHalfAlt className="text-yellow-500" />
                    ) : (
                      <FaStar className="text-gray-300" />
                    )}
                  </span>
                );
              })}
            </div>
            <p className="text-xl sm:text-center py-1">
              <span>5</span>
              <span className="text-sm text-neutral/70">/5</span>
            </p>
            <p className="text-sm text-primary">(100 feedback)</p>
          </div>
        </div>

        {/* Description */}
        <div className="py-2">
          <h6 className="text-[15px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </h6>
        </div>

        {/* Skill */}
        <div className="mt-4 text-sm font-medium text-neutral/80">
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            Html
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            css
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            Javascript
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            React
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            NextJs
          </button>
        </div>
      </div>

      <div className="border rounded-md py-4 px-6 mb-6 bg-base-100">
        <div className="sm:flex justify-between items-center">
          <div className="flex gap-4">
            {/* img */}
            <div>
              <Link to="">
                <img
                  src=""
                  alt=""
                  className="w-24 h-[95px] rounded hover:shadow-lg"
                  width="100"
                  height="100"
                />
              </Link>
            </div>

            <div>
              <Link to="">
                <h6 className="font-semibold hover:text-primary duration-300">
                  Nasim
                </h6>
              </Link>
              <p className="text-neutral/70 font-medium text-[15px]">
                Front-End Developer
              </p>

              <div className="flex gap-4 items-center text-neutral/80 mt-2">
                <div className="flex items-center gap-1 border-r pr-4">
                  <GoLocation />
                  <p>Dhaka</p>
                </div>

                <button className="flex items-center gap-1 hover:text-primary">
                  <AiOutlineHeart className="text-lg" />
                  <p>Save</p>
                </button>
              </div>
            </div>
          </div>

          {/* Review/star */}
          <div className="my-4 sm:mt-0">
            <div className="flex gap-px items-center">
              {Array.from({ length: 5 }, (element, index) => {
                return (
                  <span key={index}>
                    {3.5 >= index + 1 ? (
                      <FaStar className="text-yellow-500" />
                    ) : 3.5 >= index + 0.5 ? (
                      <FaStarHalfAlt className="text-yellow-500" />
                    ) : (
                      <FaStar className="text-gray-300" />
                    )}
                  </span>
                );
              })}
            </div>
            <p className="text-xl sm:text-center py-1">
              <span>5</span>
              <span className="text-sm text-neutral/70">/5</span>
            </p>
            <p className="text-sm text-primary">(100 feedback)</p>
          </div>
        </div>

        {/* Description */}
        <div className="py-2">
          <h6 className="text-[15px]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </h6>
        </div>

        {/* Skill */}
        <div className="mt-4 text-sm font-medium text-neutral/80">
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            Html
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            css
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            Javascript
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            React
          </button>
          <button className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
            NextJs
          </button>
        </div>
      </div>
    </div>
  );
}
