import { GoLocation } from "react-icons/go";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function JobCard() {
  return (
    <div className="border rounded-md py-4 px-6 mb-6 bg-base-100">
      {/* Title */}
      <div className="flex justify-between ">
        <div>
          <Link to="/jobs/1" className="hover:text-primary duration-300">
            <h6 className="font-semibold text-lg">jobTitle</h6>
          </Link>
          <p className="text-neutral/70 font-medium">employer</p>
        </div>
        <div>
          <img
            src="https://www.designmantic.com/logo-images/10517.png?company=Company+Name&slogan=&verify=1"
            alt=""
            className="w-16 rounded-full"
          />
        </div>
      </div>

      {/*  */}
      <div className="my-4 flex justify-between items-center text-[15px]">
        <div>
          <h6 className="font-medium">$10 - $20</h6>
          <h6 className="text-neutral/70">CTC(Full Time)</h6>
        </div>

        <div>
          <h6 className="font-medium">jobDuration</h6>
          <h6 className="text-neutral/70">Duration</h6>
        </div>

        <div>
          <h6 className="font-medium">projectLevel</h6>
          <h6 className="text-neutral/70">Experience Level</h6>
        </div>
      </div>

      {/* Short Description */}
      <div>
        <h6 className="text-neutral/80 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          aperiam?
        </h6>
      </div>

      {/* Skills Required / tags  */}
      <div className="mt-4 text-sm font-medium text-neutral/80">
        <button className="bg-primary/10 mr-2 mb-1 px-4 py-1 rounded-full duration-200">
          HTML
        </button>
      </div>

      {/* Buttons */}
      <div className="sm:flex justify-between mt-4 border-t pt-4 text-sm">
        <div className="flex gap-4 text-neutral/80">
          <div className="flex items-center gap-1">
            <GoLocation />
            <p>jobLocation</p>
          </div>

          <div className="flex items-center gap-1">
            <AiOutlineFieldTime className="text-lg" />
            <p>jobPostedAt</p>
          </div>
        </div>

        <div className="flex justify-end items-center gap-4 mt-4 sm:mt-0">
          <Link
            to="/jobs/1"
            className="font-medium text-primary hover:text-primary/80 duration-200"
          >
            View Details
          </Link>
          <Link
            to=""
            className="bg-primary text-base-100 font-medium px-6 py-2 rounded hover:bg-opacity-80 duration-200"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
