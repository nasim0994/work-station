import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import { GoLocation } from "react-icons/go";
import { UseContext } from "../../../ContextAPI/ContextAPI";
import SaveJobs from "../../../components/DashboardComponents/JobComponents/SaveJobs/SaveJobs";

export default function SaveItems() {
  window.scroll(0, 0);
  const { freelancer, loggedUser } = UseContext();

  return (
    <div className="py-2">
      <div className="md:flex gap-10 min-h-[80vh]">
        <div className="md:w-3/4 ">
          <div className="bg-base-100 shadow-lg p-4 rounded-md h-full">
            <Tabs
              activeTab="1"
              onClick={(event, tab) => console.log(event, tab)}
            >
              <Tab title="Saved jobs" className="mr-3">
                <SaveJobs saveJobs={freelancer?.saveItems?.saveJobs} />
              </Tab>

              <Tab title="Liked Freelancers" className="mr-3">
                <div className="mt-4">
                  <div className="bg-gray-50 p-2 flex justify-between items-center">
                    <h6 className="border-l-2 pl-3 border-primary">
                      Liked freelancers listing
                    </h6>
                  </div>

                  <div className="mt-6 md:px-5 grid 2xl:grid-cols-2 gap-4">
                    <div className="border rounded-md py-4 px-2 sm:px-6 bg-base-100">
                      {/* Personal Info */}
                      <div className="sm:flex justify-between items-center">
                        <div className="flex gap-4">
                          {/* img */}
                          <div className="w-20 sm:w-24">
                            <Link to="freelancerDetails">
                              <img
                                src="https://WorkStation.com/wp-content/uploads/2021/06/bandarban-100x100.jpg"
                                alt=""
                                className="w-full rounded hover:shadow-lg"
                              />
                            </Link>
                          </div>

                          <div>
                            <Link to="freelancerDetails">
                              <h6 className="font-semibold sm:text-lg hover:text-primary duration-300">
                                Mohammed Mikdad
                              </h6>
                            </Link>
                            <p className="text-neutral/70 font-medium">
                              MERN Stack Developer
                            </p>

                            <div className="flex gap-4 items-center text-neutral/80 mt-2 text-sm">
                              <div className="flex items-center gap-1 border-r pr-4">
                                <GoLocation />
                                <p>Dhaka</p>
                              </div>

                              <button className="flex items-center gap-1 text-red-400">
                                <AiOutlineClose />
                                <p>Remove</p>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Review/star */}
                        <div className="my-4 sm:mt-0">
                          <div className="flex gap-px items-center text-yellow-500">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                          </div>
                          <p className="text-xl sm:text-center py-1">
                            <span>5</span>
                            <span className="text-sm text-neutral/70">/5</span>
                          </p>
                          <p className="text-sm text-primary">(15 feedback)</p>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-md py-4 px-2 sm:px-6 bg-base-100">
                      {/* Personal Info */}
                      <div className="sm:flex justify-between items-center">
                        <div className="flex gap-4">
                          {/* img */}
                          <div className="w-20 sm:w-24">
                            <Link to="freelancerDetails">
                              <img
                                src="https://WorkStation.com/wp-content/uploads/2021/06/bandarban-100x100.jpg"
                                alt=""
                                className="w-full rounded hover:shadow-lg"
                              />
                            </Link>
                          </div>

                          <div>
                            <Link to="freelancerDetails">
                              <h6 className="font-semibold sm:text-lg hover:text-primary duration-300">
                                Mohammed Mikdad
                              </h6>
                            </Link>
                            <p className="text-neutral/70 font-medium">
                              MERN Stack Developer
                            </p>

                            <div className="flex gap-4 items-center text-neutral/80 mt-2 text-sm">
                              <div className="flex items-center gap-1 border-r pr-4">
                                <GoLocation />
                                <p>Dhaka</p>
                              </div>

                              <button className="flex items-center gap-1 text-red-400">
                                <AiOutlineClose />
                                <p>Remove</p>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Review/star */}
                        <div className="my-4 sm:mt-0">
                          <div className="flex gap-px items-center text-yellow-500">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                          </div>
                          <p className="text-xl sm:text-center py-1">
                            <span>5</span>
                            <span className="text-sm text-neutral/70">/5</span>
                          </p>
                          <p className="text-sm text-primary">(15 feedback)</p>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-md py-4 px-2 sm:px-6 bg-base-100">
                      {/* Personal Info */}
                      <div className="sm:flex justify-between items-center">
                        <div className="flex gap-4">
                          {/* img */}
                          <div className="w-20 sm:w-24">
                            <Link to="freelancerDetails">
                              <img
                                src="https://WorkStation.com/wp-content/uploads/2021/06/bandarban-100x100.jpg"
                                alt=""
                                className="w-full rounded hover:shadow-lg"
                              />
                            </Link>
                          </div>

                          <div>
                            <Link to="freelancerDetails">
                              <h6 className="font-semibold sm:text-lg hover:text-primary duration-300">
                                Mohammed Mikdad
                              </h6>
                            </Link>
                            <p className="text-neutral/70 font-medium">
                              MERN Stack Developer
                            </p>

                            <div className="flex gap-4 items-center text-neutral/80 mt-2 text-sm">
                              <div className="flex items-center gap-1 border-r pr-4">
                                <GoLocation />
                                <p>Dhaka</p>
                              </div>

                              <button className="flex items-center gap-1 text-red-400">
                                <AiOutlineClose />
                                <p>Remove</p>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Review/star */}
                        <div className="my-4 sm:mt-0">
                          <div className="flex gap-px items-center text-yellow-500">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                          </div>
                          <p className="text-xl sm:text-center py-1">
                            <span>5</span>
                            <span className="text-sm text-neutral/70">/5</span>
                          </p>
                          <p className="text-sm text-primary">(15 feedback)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>

        <div className="md:w-1/4 mt-6 md:mt-0">
          <div className="border rounded-md px-4 py-8 flex gap-4 items-center mb-6">
            <FaGraduationCap className="text-5xl opacity-70" />

            <div className="border-l pl-4">
              <p className="text-primary text-xl font-semibold">
                {loggedUser?.data?.role === "freelancer"
                  ? freelancer?.saveItems?.saveJobs?.length
                  : 0}
              </p>
              <h6>Saved jobs</h6>
            </div>
          </div>

          <div className="border rounded-md px-4 py-8 flex gap-4 items-center mb-6">
            <SiFreelancer className="text-5xl opacity-70" />

            <div className="border-l pl-4">
              <p className="text-primary text-xl font-semibold">
                {loggedUser?.data?.role === "freelancer"
                  ? freelancer?.saveItems?.likeFreelancers?.length
                  : 0}
              </p>
              <h6>Liked freelancers</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
