import { BsQuote } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Testimonial() {
  return (
    <div className="py-16">
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            850: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          style={{
            "--swiper-pagination-color": "#E85717",
          }}
        >
          <SwiperSlide>
            <div className="bg-accent p-4 rounded-md">
              <BsQuote className="text-4xl text-primary" />
              <h6 className="text-neutral font-semibold pl-2">
                We have built a network of trusted freelancers we can depend on
                when we need something done.
              </h6>

              <div className="flex gap-2 items-start mt-4 pl-2">
                <img
                  src="https://i.ibb.co/FJyMmR7/asusceo.jpg"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h6 className="text-neutral font-semibold">Ana Rodriguez</h6>
                  <p className="text-neutral/70 text-[15px]">
                    Santamaria Shirtmakers
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-accent p-4 rounded-md">
              <BsQuote className="text-4xl text-primary" />
              <h6 className="text-neutral font-semibold pl-2">
                We have built a network of trusted freelancers we can depend on
                when we need something done.
              </h6>

              <div className="flex gap-2 items-start mt-4 pl-2">
                <img
                  src="https://i.ibb.co/FJyMmR7/asusceo.jpg"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h6 className="text-neutral font-semibold">Ana Rodriguez</h6>
                  <p className="text-neutral/70 text-[15px]">
                    Santamaria Shirtmakers
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-accent p-4 rounded-md">
              <BsQuote className="text-4xl text-primary" />
              <h6 className="text-neutral font-semibold pl-2">
                We have built a network of trusted freelancers we can depend on
                when we need something done.
              </h6>

              <div className="flex gap-2 items-start mt-4 pl-2">
                <img
                  src="https://i.ibb.co/FJyMmR7/asusceo.jpg"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h6 className="text-neutral font-semibold">Ana Rodriguez</h6>
                  <p className="text-neutral/70 text-[15px]">
                    Santamaria Shirtmakers
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
