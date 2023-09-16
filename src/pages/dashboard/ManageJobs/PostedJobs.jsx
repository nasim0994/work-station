import { AiOutlineSearch } from "react-icons/ai";
import { FaBusinessTime } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdMarkEmailRead, MdOutlinePersonSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const PostedJobs = () => {
  return (
    <div className="py-2">
      <div className="bg-base-100 rounded-md shadow-lg min-h-[80vh]">
        <div className="border-b px-5 py-3 text-lg">
          <div className="sm:flex justify-between items-center">
            <h6>Posted Jobs</h6>
            <div className="relative mt-2 sm:mt-0">
              <input
                type="text"
                placeholder="Search Portfolio"
                className="border px-4 py-2 rounded outline-none text-sm w-full"
              />
              <button className="absolute right-0 w-10 h-full rounded-r bg-primary text-base-100">
                <p className="flex justify-center items-center">
                  <AiOutlineSearch />
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:px-4">
          {/* 1 */}
          <div className="xl:flex justify-between items-center gap-4 bg-gray-100 rounded border mb-5">
            <div className="p-6">
              <div className="mb-4">
                <div className="flex items-center gap-1">
                  <MdMarkEmailRead className="text-primary" />
                  <Link
                    href=""
                    className="hover:text-primary duration-300 mt-1"
                  >
                    Jamiul Bari
                  </Link>
                </div>
                <p className="text-xl font-semibold">Javascript Instructor</p>
              </div>
              <div className="md:flex gap-4 items-center text-sm text-neutral/80">
                <div className="flex items-center gap-1 md:border-r border-neutral/30 pr-3 ">
                  <GoLocation />
                  <h6>Dhaka</h6>
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
            <div className="sm:flex justify-between items-center gap-4 p-4 pt-0">
              <div className="flex justify-center gap-4 items-center">
                <Link href="" className="primary-btn">
                  View proposals
                </Link>
                <Link href="" className="primary-btn">
                  Edit job
                </Link>
              </div>
              <div className="text-center px-10 2xl:px-20 xl:py-12 sm:border-l-4 sm:border-base-100 mt-4 sm:mt-0 border-t sm:border-t-0 border-gray-400">
                <p>0</p>
                <p>Proposals</p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="xl:flex justify-between items-center gap-4 bg-gray-100 rounded border mb-5">
            <div className="p-6">
              <div className="mb-4">
                <div className="flex items-center gap-1">
                  <MdMarkEmailRead className="text-primary" />
                  <Link
                    href=""
                    className="hover:text-primary duration-300 mt-1"
                  >
                    Jamiul Bari
                  </Link>
                </div>
                <p className="text-xl font-semibold">Javascript Instructor</p>
              </div>
              <div className="md:flex gap-4 items-center text-sm text-neutral/80">
                <div className="flex items-center gap-1 md:border-r border-neutral/30 pr-3 ">
                  <GoLocation />
                  <h6>Dhaka</h6>
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
            <div className="sm:flex justify-between items-center gap-4 p-4 pt-0">
              <div className="flex justify-center gap-4 items-center">
                <button className="primary-btn">View proposals</button>
                <button className="primary-btn">Edit job</button>
              </div>
              <div className="text-center px-10 2xl:px-20 xl:py-12 sm:border-l-4 sm:border-base-100 mt-4 sm:mt-0 border-t sm:border-t-0 border-gray-400">
                <p>0</p>
                <p>Proposals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostedJobs;
