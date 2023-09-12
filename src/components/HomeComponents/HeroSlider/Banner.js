import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";
import banner1 from "../../Images/banner/hero-instance-1--desktop.png";
import banner2 from "../../Images/banner/hero-instance-2--desktop.png";
import banner3 from "../../Images/banner/hero-instance-4--desktop.png";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";

const Banner = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = useCallback(
    () => setActiveIndex(swiperRef.current.swiper.realIndex),
    []
  );
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex]);

  return (
    <div className="bg-accent pt-10">
      <div className="w-[90%] 2xl:w-[1400px] mx-auto pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
          {/* Left */}
          <div>
            <div className="lg:w-2/3">
              <h1
                className={`text-4xl lg:text-6xl font-bold ${
                  activeIndex === 0 && "text-primary"
                } ${activeIndex === 1 && "text-[#B92528]"}
                ${activeIndex === 2 && "text-[#1B1233]"}`}
              >
                How work <br /> should work
              </h1>
              <h6 className="my-4 lg:my-5 text-lg">
                Access global talent on the freelancer website trusted by over 1
                million businesses worldwide.
              </h6>
            </div>

            <div>
              {/* Search */}
              <div className="sm:w-4/5">
                <SearchBox />
              </div>

              {/* Popular search */}
              <div className="hidden sm:flex items-center gap-3 mt-6">
                <h6>Popular:</h6>
                <ul className="flex items-center gap-3 text-sm text-neutral">
                  <li>
                    <Link
                      to=""
                      className="border rounded-full px-3 py-1 border-neutral/40 hover:bg-primary hover:text-base-100  hover:border-primary duration-200"
                    >
                      Website Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="border rounded-full px-3 py-1 border-neutral/40 hover:bg-primary hover:text-base-100  hover:border-primary duration-200"
                    >
                      Logo Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="border rounded-full px-3 py-1 border-neutral/40 hover:bg-primary hover:text-base-100  hover:border-primary duration-200"
                    >
                      WordPress
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="border rounded-full px-3 py-1 border-neutral/40 hover:bg-primary hover:text-base-100  hover:border-primary duration-200"
                    >
                      UI/UX Design
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative mt-6 lgLmt-0">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
              className="w-full"
              ref={swiperRef}
            >
              <SwiperSlide>
                <div className="bg-accent">
                  <img src={banner3} alt="" />

                  {/* Freelancer  card*/}
                  <div className="absolute right-0 sm:right-10 bottom-0 bg-accent/95 shadow-lg rounded-lg sm:p-4 p-2">
                    <img
                      src="https://dw3i9sxi97owk.cloudfront.net/homepageRevampA3/HeroImage/instance-4/profile-pic/profile-pic.webp"
                      alt=""
                      className="w-14 h-14 sm:w-24 sm:h-24 rounded-full mx-auto"
                    />
                    <div className="text-center text-neutral mt-2">
                      <h6 className="text-sm sm:text-lg font-medium">
                        Graphic Designer{" "}
                      </h6>
                      <h6 className="text-sm text-neutral/90">
                        Frankie Albion
                      </h6>
                      <div className="flex justify-center gap-1 items-center text-sm">
                        <AiFillStar className="text-yellow-500" />
                        <p>
                          <span className="font-semibold">5.0</span> (100)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-accent">
                  <img src={banner2} alt="" />

                  {/* Freelancer  card*/}
                  <div className="absolute right-0 sm:right-10 bottom-0 bg-accent/95 shadow-lg rounded-lg sm:p-4 p-2">
                    <img
                      src="https://dw3i9sxi97owk.cloudfront.net/homepageRevampA3/HeroImage/instance-1/profile-pic/profile-pic.webp"
                      alt=""
                      className="w-14 h-14 sm:w-24 sm:h-24 rounded-full mx-auto"
                    />
                    <div className="text-center text-neutral mt-2">
                      <h6 className="text-sm sm:text-lg font-medium">
                        Graphic Designer{" "}
                      </h6>
                      <h6 className="text-sm text-neutral/90">
                        Frankie Albion
                      </h6>
                      <div className="flex justify-center gap-1 items-center text-sm">
                        <AiFillStar className="text-yellow-500" />
                        <p>
                          <span className="font-semibold">5.0</span> (100)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-accent">
                  <img src={banner1} alt="" />

                  {/* Freelancer  card*/}
                  <div className="absolute right-0 sm:right-10 bottom-0 bg-accent/95 shadow-lg rounded-lg sm:p-4 p-2">
                    <img
                      src="https://dw3i9sxi97owk.cloudfront.net/homepageRevampA3/HeroImage/instance-3/profile-pic/profile-pic.webp"
                      alt=""
                      className="w-14 h-14 sm:w-24 sm:h-24 rounded-full mx-auto"
                    />
                    <div className="text-center text-neutral mt-2">
                      <h6 className="text-sm sm:text-lg font-medium">
                        Graphic Designer{" "}
                      </h6>
                      <h6 className="text-sm text-neutral/90">
                        Frankie Albion
                      </h6>
                      <div className="flex justify-center gap-1 items-center text-sm">
                        <AiFillStar className="text-yellow-500" />
                        <p>
                          <span className="font-semibold">5.0</span> (100)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Trusted brand Logo */}
      <div className="bg-gray-50 flex justify-center items-center ">
        <div className="flex gap-10 items-center">
          <h6 className="hidden md:block text-lg font-medium text-gray-400">
            Trusted by:
          </h6>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-x-10 lg:gap-14 items-center">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/meta.8a23b13.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
