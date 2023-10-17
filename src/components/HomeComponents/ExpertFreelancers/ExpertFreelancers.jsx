import { AiFillStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useGetExpertFreelancersQuery } from "../../../Redux/freelancer/freelancerApi";

export default function ExpertFreelancers() {
  const {
    data: expertFreelancers,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetExpertFreelancersQuery();

  let content = null;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }

  if (!isLoading && !isError && isSuccess) {
    content = (
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
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        style={{
          "--swiper-navigation-color": "#21AF79",
          padding: "50px 0px",
        }}
        modules={[Navigation]}
        className="freelancerSlider"
      >
        {expertFreelancers?.data?.map((freelancer) => (
          <SwiperSlide key={freelancer._id}>
            <div className="rounded border">
              <Link to={`/freelancers/${freelancer?.userName}`}>
                <div className="bg-accent p-4 pb-0 flex justify-center">
                  <div className="text-center">
                    <img
                      src={freelancer?.photoUrl}
                      alt=""
                      className="w-32 h-32 rounded-full mx-auto"
                    />
                    <h2 className="text-lg font-medium mt-1 hover:underline duration-300">
                      {freelancer?.name}
                    </h2>

                    <p className="text-sm">{freelancer?.tagline}</p>
                  </div>
                </div>
              </Link>

              <div className="p-4 bg-accent text-sm">
                <p>
                  {freelancer?.description.length > 100
                    ? freelancer?.description.slice(0, 100) + "..."
                    : freelancer?.description}
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <img
                    src="https://cdn.britannica.com/67/6267-004-10A21DF0/Flag-Bangladesh.jpg"
                    alt=""
                    className="w-5 h-5 rounded-full"
                  />
                  <h2 className="font-medium">{freelancer?.location.city}</h2>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1">
                  <AiFillStar className="text-yellow-500 " />
                  <p className="text-sm font-semibold">
                    {freelancer?.rating?.average} ({freelancer?.rating?.total})
                  </p>
                </div>

                <div className="flex items-center justify-between gap-1 mt-4 text-neutral/80 ">
                  <div>
                    <p className="text-sm">
                      {freelancer?.projects?.completedProject?.length} Projects
                    </p>
                  </div>

                  <div>
                    <p>
                      <span className="font-bold text-neutral">
                        ${freelancer?.hourlyRate}
                      </span>
                      /hr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className="py-10 text-neutral">
      <div className="container relative">
        <h2 className="text-3xl font-medium text-neutral-focus absolute top-0">
          Expert freelancers
        </h2>

        {content}
      </div>
    </div>
  );
}
