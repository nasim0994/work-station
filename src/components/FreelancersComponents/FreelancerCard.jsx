import { AiOutlineHeart } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

export default function FreelancerCard({ freelancer }) {
  return (
    <div className="border rounded-md py-4 px-6 mb-6 bg-base-100">
      <div className="sm:flex justify-between items-center">
        <div className="flex gap-4">
          {/* img */}
          <div>
            <Link to={`/freelancers/${freelancer?._id}`}>
              <img
                src=""
                alt=""
                className="w-24 h-[95px] rounded hover:shadow-lg"
              />
            </Link>
          </div>

          <div>
            <Link to={`/freelancers/${freelancer?._id}`}>
              <h6 className="font-semibold hover:text-primary duration-300">
                {freelancer?.name}
              </h6>
            </Link>
            <p className="text-neutral/70 font-medium text-[15px]">
              {freelancer?.tagline}
            </p>

            <div className="flex gap-4 items-center text-neutral/80 mt-2">
              <div className="flex items-center gap-1 border-r pr-4">
                <GoLocation />
                <p>{freelancer?.location?.country}</p>
              </div>

              <button className="flex items-center gap-1 hover:text-primary">
                <AiOutlineHeart className="text-lg" />
                <p>Save</p>
              </button>
            </div>
          </div>
        </div>

        {/* Review/star */}
        <div className="hidden sm:block my-4 sm:mt-0">
          <div className="flex gap-px items-center">
            {Array.from({ length: 5 }, (element, index) => {
              return (
                <span key={index}>
                  {freelancer?.rating?.average >= index + 1 ? (
                    <FaStar className="text-secondary text-sm" />
                  ) : freelancer?.rating?.average >= index + 0.5 ? (
                    <FaStarHalfAlt className="text-secondary text-sm" />
                  ) : (
                    <FaStar className="text-gray-300" />
                  )}
                </span>
              );
            })}
          </div>
          <p className="text-xl sm:text-center py-1">
            <span>{freelancer?.rating.average}</span>
            <span className="text-sm text-neutral/70">/5</span>
          </p>
          <p className="text-sm text-primary">
            ({freelancer?.rating?.total} feedback)
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="py-2">
        <h6 className="text-sm sm:text-[15px]">
          {freelancer?.description?.length > 150
            ? freelancer?.description?.slice(0, 150) + "..."
            : freelancer?.description}
        </h6>
      </div>

      {/* Skill */}
      <div className="mt-2 sm:mt-4 text-sm font-medium text-neutral/80">
        {freelancer?.skills?.map((skill, i) => (
          <button
            key={i}
            className="bg-secondary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200"
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
}
