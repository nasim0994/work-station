import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { SiFreelancer } from "react-icons/si";
import { TbHeartOff } from "react-icons/tb";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import { GoLocation } from "react-icons/go";

export default function SaveItems() {
  window.scroll(0, 0);
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
                <div className="mt-4">
                  <div className="bg-gray-50 p-2 flex justify-between items-center">
                    <h6 className="border-l-2 pl-3 border-primary">
                      Saved jobs listing
                    </h6>

                    <button className="flex items-center text-sm text-primary">
                      <AiOutlineClose /> Remove All Jobs
                    </button>
                  </div>

                  <div className="mt-6 md:px-10">
                    <div className="border rounded-md py-4 px-6 mb-6 bg-base-100">
                      {/* Title */}
                      <div className="flex justify-between ">
                        <div>
                          <Link
                            to=""
                            className="hover:text-primary duration-300"
                          >
                            <h6 className="font-semibold text-lg">
                              Python Full Stack Developer
                            </h6>
                          </Link>
                          <p className="text-neutral/70 font-medium">
                            Khelbei Bangladesh
                          </p>
                        </div>
                        <div>
                          <img
                            src="https://WorkStation.com/wp-content/uploads/2021/06/khelbei-150x150.png"
                            alt=""
                            className="w-12 rounded-full"
                          />
                        </div>
                      </div>

                      {/*  */}
                      <div className="my-4 grid md:grid-cols-2 xl:grid-cols-4 gap-4 items-center text-[15px]">
                        <div>
                          <h6 className="font-medium">
                            $2.00 – 6.00 EUR per hour
                          </h6>
                          <h6 className="text-neutral/70">CTC(Hourly)</h6>
                        </div>

                        <div>
                          <h6 className="font-medium">3 to 6 months</h6>
                          <h6 className="text-neutral/70">Duration</h6>
                        </div>

                        <div>
                          <h6 className="font-medium">Expert</h6>
                          <h6 className="text-neutral/70">Experience Level</h6>
                        </div>

                        <button className="flex items-center text-sm text-red-400">
                          <AiOutlineClose /> Remove
                        </button>
                      </div>

                      {/* Skills Required / tags  */}
                      <div className="mt-4 text-sm font-medium text-neutral/80">
                        <button className="bg-gray-100 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
                          Amazon Web Server (AWS)
                        </button>
                        <button className="bg-gray-100 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
                          Web Development
                        </button>
                        <button className="bg-gray-100 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
                          Python
                        </button>
                        <button className="bg-gray-100 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
                          Django
                        </button>
                      </div>
                    </div>

                    <div className="border rounded-md py-4 px-6 mb-6 bg-base-100">
                      {/* Title */}
                      <div className="flex justify-between ">
                        <div>
                          <Link
                            to=""
                            className="hover:text-primary duration-300"
                          >
                            <h6 className="font-semibold text-lg">
                              Python Full Stack Developer
                            </h6>
                          </Link>
                          <p className="text-neutral/70 font-medium">
                            Khelbei Bangladesh
                          </p>
                        </div>
                        <div>
                          <img
                            src="https://WorkStation.com/wp-content/uploads/2021/06/khelbei-150x150.png"
                            alt=""
                            className="w-12 rounded-full"
                          />
                        </div>
                      </div>

                      {/*  */}
                      <div className="my-4 grid md:grid-cols-2 xl:grid-cols-4 gap-4 items-center text-[15px]">
                        <div>
                          <h6 className="font-medium">
                            $2.00 – 6.00 EUR per hour
                          </h6>
                          <h6 className="text-neutral/70">CTC(Hourly)</h6>
                        </div>

                        <div>
                          <h6 className="font-medium">3 to 6 months</h6>
                          <h6 className="text-neutral/70">Duration</h6>
                        </div>

                        <div>
                          <h6 className="font-medium">Expert</h6>
                          <h6 className="text-neutral/70">Experience Level</h6>
                        </div>

                        <button className="flex items-center text-sm text-red-400">
                          <AiOutlineClose /> Remove
                        </button>
                      </div>

                      {/* Skills Required / tags  */}
                      <div className="mt-4 text-sm font-medium text-neutral/80">
                        <button className="bg-gray-100 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
                          Amazon Web Server (AWS)
                        </button>
                        <button className="bg-gray-100 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
                          Web Development
                        </button>
                        <button className="bg-gray-100 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
                          Python
                        </button>
                        <button className="bg-gray-100 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
                          Django
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab title="Followed Companies" className="mr-3">
                <div className="mt-4">
                  <div className="bg-gray-50 p-2 flex justify-between items-center">
                    <h6 className="border-l-2 pl-3 border-primary">
                      Followed companies listing
                    </h6>
                  </div>

                  <div className="mt-6 px-5 py-40 text-center">
                    <TbHeartOff className="text-8xl opacity-30 mx-auto" />
                    <h6 className="mt-4 text-lg text-neutral/80">
                      You have not any companies in your favorite list.
                    </h6>
                  </div>
                </div>
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
              <p className="text-primary text-xl font-semibold">1</p>
              <h6>Saved jobs</h6>
            </div>
          </div>

          <div className="border rounded-md px-4 py-8 flex gap-4 items-center mb-6">
            <BsBuildings className="text-5xl opacity-70" />

            <div className="border-l pl-4">
              <p className="text-primary text-xl font-semibold">0</p>
              <h6>followed companies</h6>
            </div>
          </div>

          <div className="border rounded-md px-4 py-8 flex gap-4 items-center mb-6">
            <SiFreelancer className="text-5xl opacity-70" />

            <div className="border-l pl-4">
              <p className="text-primary text-xl font-semibold">0</p>
              <h6>Liked freelancers</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
