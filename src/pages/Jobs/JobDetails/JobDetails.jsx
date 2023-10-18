import { Link, useLocation } from "react-router-dom";
import { AiOutlineFieldTime, AiOutlineHeart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaBusinessTime } from "react-icons/fa";
import { MdOutlinePersonSearch } from "react-icons/md";
import { useGetJobByIdQuery } from "../../../Redux/jobs/jobApi";
import Loading from "../../../components/Loading/Loading";

export default function JobDetails() {
  const location = useLocation();
  const id = location.search.split("=")[1];
  const { data, isLoading, isError, error } = useGetJobByIdQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && isError) {
    return <p>{error}</p>;
  }

  const job = data?.status === "success" && data?.data;
  const { _id, title, city, jobType, experienceLevel, details, skills } = job;

  return (
    <div className="py-10">
      <div className="w-[95%] xl:w-[1100px] mx-auto">
        {/* Title */}
        <div className="bg-accent p-6 rounded-md border text-neutral">
          <div className="lg:flex justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h6 className="text-2xl font-semibold mb-2">{title}</h6>

              <div className="md:flex gap-4 items-center text-sm text-neutral/80">
                <div className="flex items-center gap-1 md:border-r border-neutral/30 pr-3 ">
                  <GoLocation />
                  <h6>{city}</h6>
                </div>

                <div className="flex items-center gap-1 md:border-r border-neutral/30 pr-3">
                  <AiOutlineFieldTime className="text-lg" />
                  <h6>April 21, 2023</h6>
                </div>

                <div className="flex items-center gap-1 md:border-r border-neutral/30 pr-3">
                  <FaBusinessTime />
                  <h6>{jobType}</h6>
                </div>

                <div className="flex items-center gap-1">
                  <MdOutlinePersonSearch className="text-lg" />
                  <h6>{experienceLevel} Level</h6>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-[15px] text-primary hover:text-primary/80 duration-200">
                <h6 className="flex gap-1 items-center">
                  <AiOutlineHeart />
                  Save Job
                </h6>
              </button>
              <Link
                to={`/jobs/${_id}/submit-proposal`}
                className="bg-primary text-base-100 font-medium px-6 py-2 rounded hover:bg-opacity-80 duration-200"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        {/* About client */}
        <div className="p-4 rounded-md border mt-4">
          <div className="flex justify-between items-center">
            <div>
              <h6 className="font-medium text-lg mb-2">Activity on this job</h6>
              <div className="flex gap-8 items-center text-[15px]">
                <div>
                  <h6 className="font-medium">10</h6>
                  <h6 className="text-neutral/70">Applicants</h6>
                </div>

                <div>
                  <h6 className="font-medium">0</h6>
                  <h6 className="text-neutral/70">Interviewing</h6>
                </div>

                <div>
                  <h6 className="font-medium">4.5</h6>
                  <h6 className="text-neutral/70">Rating Client</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-4 rounded-md border mt-4">
          {/* Description */}
          <div>
            <h6 className="font-medium text-lg mb-1">About the job</h6>
            <div className="text-neutral/80 text-[15px] font-medium">
              {details}
            </div>
          </div>

          {/* Skills Required   */}
          <div className="mt-6">
            <h6 className="font-medium text-lg mb-1">Skill(s) required</h6>

            <div className="text-sm font-medium text-neutral/80">
              {skills?.map((skill, i) => (
                <button
                  key={i}
                  className="bg-primary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/20 duration-200"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
