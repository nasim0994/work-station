import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

import { AiFillStar } from "react-icons/ai";
import SearchBox from "./../SearchBox/SearchBox";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

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
    <section className="bg-gray-50 py-10 lg:py-0 min-h-[90vh] flex justify-center">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
          {/* Left */}
          <div>
            <div className="lg:w-3/4">
              <h1
                className={`text-3xl lg:text-6xl font-bold ${
                  activeIndex === 0 && "text-primary"
                } ${activeIndex === 1 && "text-[#B92528]"}
                ${activeIndex === 2 && "text-[#1B1233]"}`}
              >
                How work <br /> should work
              </h1>
              <p className="my-4 lg:my-5 text-neutral text-sm sm:text-base">
                Access global talent on the freelancer website trusted by over 1
                million businesses worldwide.
              </p>
            </div>

            <div>
              {/* Search */}
              <div className="sm:w-[85%]">
                <SearchBox activeIndex={activeIndex} />
              </div>

              {/* Popular search */}
              <div className="hidden sm:flex items-center gap-3 mt-6">
                <h6 className="text-[15px] font-medium">Popular:</h6>
                <ul className="flex items-center gap-3 text-sm text-neutral">
                  <li>
                    <Link
                      to=""
                      className="border rounded-full px-3 py-1 border-neutral/40 hover:bg-primary hover:text-base-100  hover:border-primary duration-300"
                    >
                      Website Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="border rounded-full px-3 py-1 border-neutral/40 hover:bg-primary hover:text-base-100  hover:border-primary duration-300"
                    >
                      WordPress
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="border rounded-full px-3 py-1 border-neutral/40 hover:bg-primary hover:text-base-100  hover:border-primary duration-300"
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
                delay: 10000,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
              className="w-full h-full"
              ref={swiperRef}
            >
              <SwiperSlide>
                <div className="bg-gray-50 ">
                  <img
                    src="/images/banner/hero-instance-4--desktop.png"
                    alt=""
                  />

                  {/* Freelancer  card*/}
                  <div className="absolute right-0 sm:right-10 bottom-0 bg-base-100/95 shadow-lg rounded-lg sm:p-4 p-2">
                    <img
                      src="https://dw3i9sxi97owk.cloudfront.net/homepageRevampA3/HeroImage/instance-4/profile-pic/profile-pic.webp"
                      alt=""
                      className="w-12 h-12 sm:w-20 sm:h-20 rounded-full mx-auto"
                    />
                    <div className="text-center text-neutral mt-2">
                      <h6 className="text-sm sm:text-[17px] font-medium">
                        Graphic Designer
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
                <div className="bg-gray-50 ">
                  <img
                    src="/images/banner/hero-instance-2--desktop.png"
                    alt=""
                  />

                  {/* Freelancer  card*/}
                  <div className="absolute right-0 sm:right-10 bottom-0 bg-base-100/95 shadow-lg rounded-lg sm:p-4 p-2">
                    <img
                      src="https://dw3i9sxi97owk.cloudfront.net/homepageRevampA3/HeroImage/instance-4/profile-pic/profile-pic.webp"
                      alt=""
                      className="w-12 h-12 sm:w-20 sm:h-20 rounded-full mx-auto"
                    />
                    <div className="text-center text-neutral mt-2">
                      <h6 className="text-sm sm:text-[17px] font-medium">
                        Graphic Designer
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
                <div className="bg-gray-50">
                  <img
                    src="/images/banner/hero-instance-1--desktop.png"
                    alt=""
                  />

                  {/* Freelancer  card*/}
                  <div className="absolute right-0 sm:right-10 bottom-0 bg-base-100/95 shadow-lg rounded-lg sm:p-4 p-2">
                    <img
                      src="https://dw3i9sxi97owk.cloudfront.net/homepageRevampA3/HeroImage/instance-4/profile-pic/profile-pic.webp"
                      alt=""
                      className="w-12 h-12 sm:w-20 sm:h-20 rounded-full mx-auto"
                    />
                    <div className="text-center text-neutral mt-2">
                      <h6 className="text-sm sm:text-[17px] font-medium">
                        Graphic Designer
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
    </section>
  );
}
