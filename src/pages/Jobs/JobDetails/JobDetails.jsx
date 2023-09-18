import { Link } from "react-router-dom";
import { AiOutlineFieldTime, AiOutlineHeart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaBusinessTime } from "react-icons/fa";
import { MdOutlinePersonSearch } from "react-icons/md";

export default function JobDetails() {
  return (
    <div className="py-10">
      <div className="w-[95%] xl:w-[1100px] mx-auto">
        {/* Title */}
        <div className="bg-accent p-6 rounded-md text-neutral">
          <div className="lg:flex justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h6 className="text-2xl font-semibold mb-2">
                Looking for Graphics designer
              </h6>

              <div className="md:flex gap-4 items-center text-sm text-neutral/80">
                <div className="flex items-center gap-1 md:border-r border-neutral/30 pr-3 ">
                  <GoLocation />
                  <h6>Dhaka</h6>
                </div>

                <div className="flex items-center gap-1 md:border-r border-neutral/30 pr-3">
                  <AiOutlineFieldTime className="text-lg" />
                  <h6>April 21, 2023</h6>
                </div>

                <div className="flex items-center gap-1 md:border-r border-neutral/30 pr-3">
                  <FaBusinessTime />
                  <h6>01 to 03 months</h6>
                </div>

                <div className="flex items-center gap-1">
                  <MdOutlinePersonSearch className="text-lg" />
                  <h6>Medium Level</h6>
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
                to="/jobs/1/submit-proposal"
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
              <p className="mb-2">
                Need to make 5 different posters for a per shop online page with
                simple product pictures and pet pictures. I will provide
                required pictures. Need to make 5 different posters for a per
                shop online page with simple product pictures and pet pictures.
              </p>
              <p>
                1. Generate business for the development of Atraski travels{" "}
                <br />
                2. Make tour itineraries <br /> 3. Research the offbeat
                destinations so that they can be explored <br /> 4. Work on the
                database by pitching about Atraski & regularly following up with
                the companies <br /> 5. Understand the scope for business
                coordination with clients and take up briefing sessions when
                needed <br /> 6. Finalize the deals with the clients and chalk
                out briefly their requirements for the event (physical/digital){" "}
                <br /> 7. Monitor activities of competitors <br /> 8. Work on
                comprehension of market trends and strategies, as well as
                executing the new market initiatives <br /> 9. Coordinate with
                the operational and design teams to deliver the best events for
                our clients <br /> 10. Handle and chalk out strategies to boost
                the organization on social media <br />
                11. Update the team leader about the work daily
              </p>
            </div>
          </div>

          {/* Skills Required / tags  */}
          <div className="mt-6">
            <h6 className="font-medium text-lg mb-1">Skill(s) required</h6>

            <div className="text-sm font-medium text-neutral/80">
              <button className="bg-primary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/20 duration-200">
                Amazon Web Server (AWS)
              </button>
              <button className="bg-primary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/20 duration-200">
                Web Development
              </button>
              <button className="bg-primary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/20 duration-200">
                Python
              </button>
              <button className="bg-primary/10 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/20 duration-200">
                Django
              </button>
            </div>
          </div>

          {/* Salary */}
          <div className="mt-6">
            <h6 className="font-medium text-lg mb-1">Salary</h6>
            <div className="text-neutral/80 text-[15px] font-medium">
              <p className="font-semibold">Probation: </p>
              <p>Duration: 6 months</p>
              <p>Salary during probation: 15,000 - 20,000 /month</p>
            </div>

            <div className="text-neutral/90 text-[15px] font-medium mt-4">
              <p className="font-semibold">After probation:</p>
              <p>Annual CTC: 2 - 2.5 LPA</p>
              <p>1. Fixed component: 80%</p>
              <p>2. Variable component: 15%</p>
              <p>3. Other incentives: 5%</p>
            </div>
          </div>

          {/* Number of openings */}
          <div className="mt-6">
            <h6 className="font-medium text-lg mb-1">Number of openings</h6>
            <div className="text-neutral/80 text-[15px] font-medium">
              <p className="font-semibold">5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
