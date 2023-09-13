import { AiFillStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function ExpertFreelancers() {
  return (
    <div className="py-10 text-neutral">
      <div className="container relative">
        <h2 className="text-3xl font-medium text-neutral-focus absolute top-0">
          Expert freelancers
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          style={{
            "--swiper-navigation-color": "#21AF79",
            padding: "50px 0px",
          }}
          modules={[Navigation]}
          className="freelancerSlider"
        >
          <SwiperSlide>
            <div className="rounded border">
              <Link href="">
                <div className="bg-accent p-4 pb-0 flex justify-center">
                  <div className="text-center">
                    <img
                      src=""
                      alt=""
                      className="w-32 h-32 rounded-full mx-auto"
                    />
                    <h2 className="text-lg font-medium mt-1 hover:underline duration-300">
                      Nasim Uddin
                    </h2>

                    <p className="text-sm">Front-End Developer</p>
                  </div>
                </div>
              </Link>

              <div className="p-4 bg-accent text-sm">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fuga, quas!
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <img
                    src="https://cdn.britannica.com/67/6267-004-10A21DF0/Flag-Bangladesh.jpg"
                    alt=""
                    className="w-5 h-5 rounded-full"
                  />
                  <h2 className="font-medium">Bangladesh</h2>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1">
                  <AiFillStar className="text-yellow-500 " />
                  <p className="text-sm font-semibold">5 (488)</p>
                </div>

                <div className="flex items-center justify-between gap-1 mt-4 text-neutral/80 ">
                  <div>
                    <p className="text-sm">1200 Projects</p>
                  </div>

                  <div>
                    <p>
                      <span className="font-bold text-neutral">$10</span>/hr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded border">
              <Link href="">
                <div className="bg-accent p-4 pb-0 flex justify-center">
                  <div className="text-center">
                    <img
                      src=""
                      alt=""
                      className="w-32 h-32 rounded-full mx-auto"
                    />
                    <h2 className="text-lg font-medium mt-1 hover:underline duration-300">
                      Nasim Uddin
                    </h2>

                    <p className="text-sm">Front-End Developer</p>
                  </div>
                </div>
              </Link>

              <div className="p-4 bg-accent text-sm">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fuga, quas!
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <img
                    src="https://cdn.britannica.com/67/6267-004-10A21DF0/Flag-Bangladesh.jpg"
                    alt=""
                    className="w-5 h-5 rounded-full"
                  />
                  <h2 className="font-medium">Bangladesh</h2>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1">
                  <AiFillStar className="text-yellow-500 " />
                  <p className="text-sm font-semibold">5 (488)</p>
                </div>

                <div className="flex items-center justify-between gap-1 mt-4 text-neutral/80 ">
                  <div>
                    <p className="text-sm">1200 Projects</p>
                  </div>

                  <div>
                    <p>
                      <span className="font-bold text-neutral">$10</span>/hr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded border">
              <Link href="">
                <div className="bg-accent p-4 pb-0 flex justify-center">
                  <div className="text-center">
                    <img
                      src=""
                      alt=""
                      className="w-32 h-32 rounded-full mx-auto"
                    />
                    <h2 className="text-lg font-medium mt-1 hover:underline duration-300">
                      Nasim Uddin
                    </h2>

                    <p className="text-sm">Front-End Developer</p>
                  </div>
                </div>
              </Link>

              <div className="p-4 bg-accent text-sm">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fuga, quas!
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <img
                    src="https://cdn.britannica.com/67/6267-004-10A21DF0/Flag-Bangladesh.jpg"
                    alt=""
                    className="w-5 h-5 rounded-full"
                  />
                  <h2 className="font-medium">Bangladesh</h2>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1">
                  <AiFillStar className="text-yellow-500 " />
                  <p className="text-sm font-semibold">5 (488)</p>
                </div>

                <div className="flex items-center justify-between gap-1 mt-4 text-neutral/80 ">
                  <div>
                    <p className="text-sm">1200 Projects</p>
                  </div>

                  <div>
                    <p>
                      <span className="font-bold text-neutral">$10</span>/hr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded border">
              <Link href="">
                <div className="bg-accent p-4 pb-0 flex justify-center">
                  <div className="text-center">
                    <img
                      src=""
                      alt=""
                      className="w-32 h-32 rounded-full mx-auto"
                    />
                    <h2 className="text-lg font-medium mt-1 hover:underline duration-300">
                      Nasim Uddin
                    </h2>

                    <p className="text-sm">Front-End Developer</p>
                  </div>
                </div>
              </Link>

              <div className="p-4 bg-accent text-sm">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fuga, quas!
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <img
                    src="https://cdn.britannica.com/67/6267-004-10A21DF0/Flag-Bangladesh.jpg"
                    alt=""
                    className="w-5 h-5 rounded-full"
                  />
                  <h2 className="font-medium">Bangladesh</h2>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1">
                  <AiFillStar className="text-yellow-500 " />
                  <p className="text-sm font-semibold">5 (488)</p>
                </div>

                <div className="flex items-center justify-between gap-1 mt-4 text-neutral/80 ">
                  <div>
                    <p className="text-sm">1200 Projects</p>
                  </div>

                  <div>
                    <p>
                      <span className="font-bold text-neutral">$10</span>/hr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded border">
              <Link href="">
                <div className="bg-accent p-4 pb-0 flex justify-center">
                  <div className="text-center">
                    <img
                      src=""
                      alt=""
                      className="w-32 h-32 rounded-full mx-auto"
                    />
                    <h2 className="text-lg font-medium mt-1 hover:underline duration-300">
                      Nasim Uddin
                    </h2>

                    <p className="text-sm">Front-End Developer</p>
                  </div>
                </div>
              </Link>

              <div className="p-4 bg-accent text-sm">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fuga, quas!
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <img
                    src="https://cdn.britannica.com/67/6267-004-10A21DF0/Flag-Bangladesh.jpg"
                    alt=""
                    className="w-5 h-5 rounded-full"
                  />
                  <h2 className="font-medium">Bangladesh</h2>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1">
                  <AiFillStar className="text-yellow-500 " />
                  <p className="text-sm font-semibold">5 (488)</p>
                </div>

                <div className="flex items-center justify-between gap-1 mt-4 text-neutral/80 ">
                  <div>
                    <p className="text-sm">1200 Projects</p>
                  </div>

                  <div>
                    <p>
                      <span className="font-bold text-neutral">$10</span>/hr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
