import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineProject,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiEdit, BiSupport } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GoCommentDiscussion } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

export default function DashboardSidebar() {
  const location = useLocation();
  const [dashboardSidebar, setDashboardSidebar] = useState(false);
  const [portfolioToggle, setPortfolioToggle] = useState(false);
  const [projectsToggle, setProjectsToggle] = useState(false);
  const [jobsToggle, setJobsToggle] = useState(false);

  const user = "freelancer";

  useEffect(() => {
    if (
      location.pathname === "/dashboard/addPortfolio" ||
      location.pathname === "/dashboard/portfolioList"
    ) {
      setPortfolioToggle(true);
    } else {
      setPortfolioToggle(false);
    }
  }, [location]);

  useEffect(() => {
    if (
      location.pathname === "/dashboard/proposals" ||
      location.pathname === "/dashboard/ongoingProjects" ||
      location.pathname === "/dashboard/completedProjects" ||
      location.pathname === "/dashboard/cancelledProjects"
    ) {
      setProjectsToggle(true);
    } else {
      setProjectsToggle(false);
    }
  }, [location]);

  useEffect(() => {
    if (
      location.pathname === "/dashboard/postJob" ||
      location.pathname === "/dashboard/postedJobs" ||
      location.pathname === "/dashboard/ongoingJobs" ||
      location.pathname === "/dashboard/completedJobs" ||
      location.pathname === "/dashboard/cancelledJobs"
    ) {
      setJobsToggle(true);
    } else {
      setJobsToggle(false);
    }
  }, [location]);

  return (
    <div className="relative">
      <div
        className={`dashboardSidebar z-50 lg:z-0 ${
          dashboardSidebar ? "translate-x-0" : "hide"
        } `}
      >
        <div className="relative">
          <div className="relative ">
            <div className="absolute bg-slate-500 w-full left-0 top-0 h-full bg-opacity-50"></div>
            <img
              src="https://image.shutterstock.com/image-photo/banner-coffee-laptop-office-supplies-260nw-1901776522.jpg"
              alt=""
              className="h-32 w-full"
            />

            <div className="absolute top-1/2 left-20 z-50">
              <img
                src="https://i.ibb.co/znwrX5c/na.jpg"
                alt=""
                className="w-32 h-32 rounded-full mx-auto shadow-lg"
              />

              <h6 className="text-xl font-medium mt-2 text-neutral">
                Md Nasim Uddin
              </h6>
              <h6>Front-End Developer</h6>
            </div>
          </div>
        </div>

        <nav className="p-5 mt-32 text-neutral/90 text-[15px]">
          <ul>
            <li onClick={() => setDashboardSidebar(false)}>
              <Link
                to="/dashboard"
                className={`${
                  location.pathname === "/dashboard" && "text-primary"
                } flex items-center gap-2 pl-2 p-1.5 hover:text-primary duration-300`}
              >
                <RxDashboard className="text-sm" />
                <h6 className="mt-1">Dashboard</h6>
              </Link>
            </li>
            <li onClick={() => setDashboardSidebar(false)}>
              <NavLink
                to="profile"
                className="flex items-center gap-2 pl-2 p-1.5 hover:text-primary duration-300"
              >
                <BsPersonWorkspace className="text-sm" />
                <h6 className="mt-1">View profile</h6>
              </NavLink>
            </li>

            {/* Freelancer Option */}
            {user === "freelancer" && (
              <>
                <li>
                  <div>
                    <button
                      onClick={() => setPortfolioToggle(!portfolioToggle)}
                      className="w-full flex items-center justify-between p-1.5 hover:text-primary duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <BiEdit />
                        <h6>Manage Portfolios</h6>
                      </div>
                      <div className="text-lg">
                        {portfolioToggle ? (
                          <MdKeyboardArrowDown />
                        ) : (
                          <MdOutlineKeyboardArrowRight />
                        )}
                      </div>
                    </button>

                    <nav
                      className={`${
                        portfolioToggle ? "max-h-40" : "max-h-0 overflow-hidden"
                      } duration-300`}
                    >
                      <ul className="border-l border-dashed border-neutral/60 ml-7">
                        <li onClick={() => setDashboardSidebar(false)}>
                          <NavLink
                            to="addPortfolio"
                            className="py-1.5 hover:text-primary duration-300 flex items-center gap-2"
                          >
                            <p className="border-b border-dashed border-neutral/60 w-5"></p>
                            <h6>Add Portfolio</h6>
                          </NavLink>
                        </li>

                        <li onClick={() => setDashboardSidebar(false)}>
                          <NavLink
                            to="portfolioList"
                            className="py-1.5 hover:text-primary duration-300 flex items-center gap-2"
                          >
                            <p className="border-b border-dashed border-neutral/60 w-5"></p>
                            <h6>Portfolio List</h6>
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </li>
                <li>
                  <div>
                    <button
                      onClick={() => setProjectsToggle(!projectsToggle)}
                      className="w-full flex items-center justify-between p-1.5 hover:text-primary duration-300"
                    >
                      <div className="flex items-center gap-2">
                        <AiOutlineProject />
                        <h6>Manage Projects</h6>
                      </div>
                      <div className="text-lg">
                        {projectsToggle ? (
                          <MdKeyboardArrowDown />
                        ) : (
                          <MdOutlineKeyboardArrowRight />
                        )}
                      </div>
                    </button>

                    <nav
                      className={`${
                        projectsToggle ? "max-h-40" : "max-h-0 overflow-hidden"
                      } duration-300`}
                    >
                      <ul className="border-l border-dashed border-neutral/60 ml-7">
                        <li onClick={() => setDashboardSidebar(false)}>
                          <NavLink
                            to="proposals"
                            className="py-1.5 hover:text-primary duration-300 flex items-center gap-2"
                          >
                            <p className="border-b border-dashed border-neutral/60 w-5"></p>
                            <h6>Proposals</h6>
                          </NavLink>
                        </li>

                        <li onClick={() => setDashboardSidebar(false)}>
                          <NavLink
                            to="ongoingProjects"
                            className="py-1.5 hover:text-primary duration-300 flex items-center gap-2"
                          >
                            <p className="border-b border-dashed border-neutral/60 w-5"></p>
                            <h6>Ongoing projects</h6>
                          </NavLink>
                        </li>

                        <li onClick={() => setDashboardSidebar(false)}>
                          <NavLink
                            to="completedProjects"
                            className="py-1.5 hover:text-primary duration-300 flex items-center gap-2"
                          >
                            <p className="border-b border-dashed border-neutral/60 w-5"></p>
                            <h6>Completed projects</h6>
                          </NavLink>
                        </li>

                        <li onClick={() => setDashboardSidebar(false)}>
                          <NavLink
                            to="cancelledProjects"
                            className="py-1.5 hover:text-primary duration-300 flex items-center gap-2"
                          >
                            <p className="border-b border-dashed border-neutral/60 w-5"></p>
                            <h6>Cancelled projects</h6>
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </li>
              </>
            )}

            {/* Client Option */}
            {user === "client" && (
              <li>
                <div>
                  <button
                    onClick={() => setJobsToggle(!jobsToggle)}
                    className="w-full flex items-center justify-between p-1.5 hover:text-primary duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <AiOutlineProject />
                      <h6>Manage Jobs</h6>
                    </div>
                    <div className="text-lg">
                      {jobsToggle ? (
                        <MdKeyboardArrowDown />
                      ) : (
                        <MdOutlineKeyboardArrowRight />
                      )}
                    </div>
                  </button>

                  <nav
                    className={`${
                      jobsToggle ? "max-h-40 mb-5" : "max-h-0 overflow-hidden"
                    } duration-300 `}
                  >
                    <ul className="border-l border-dashed border-neutral/60 ml-7">
                      <li onClick={() => setDashboardSidebar(false)}>
                        <NavLink
                          to="postJob"
                          className="py-1.5 hover:text-primary duration-300 flex items-center gap-2"
                        >
                          <p className="border-b border-dashed border-neutral/60 w-5"></p>
                          <h6>Post a Job</h6>
                        </NavLink>
                      </li>

                      <li onClick={() => setDashboardSidebar(false)}>
                        <NavLink
                          to="postedJobs"
                          className="py-1.5 hover:text-primary duration-300 flex items-center gap-2"
                        >
                          <p className="border-b border-dashed border-neutral/60 w-5"></p>
                          <h6>Posted Jobs</h6>
                        </NavLink>
                      </li>

                      <li onClick={() => setDashboardSidebar(false)}>
                        <NavLink
                          to="ongoingJobs"
                          className="py-1.5 hover:text-primary duration-300 flex items-center gap-2"
                        >
                          <p className="border-b border-dashed border-neutral/60 w-5"></p>
                          <h6>Ongoing Jobs</h6>
                        </NavLink>
                      </li>

                      <li onClick={() => setDashboardSidebar(false)}>
                        <NavLink
                          to="completedJobs"
                          className="py-1.5 hover:text-primary duration-300 flex items-center gap-2"
                        >
                          <p className="border-b border-dashed border-neutral/60 w-5"></p>
                          <h6>Completed Jobs</h6>
                        </NavLink>
                      </li>

                      <li onClick={() => setDashboardSidebar(false)}>
                        <NavLink
                          to="cancelledJobs"
                          className="py-1.5 hover:text-primary duration-300 flex items-center gap-2"
                        >
                          <p className="border-b border-dashed border-neutral/60 w-5"></p>
                          <h6>Cancelled Jobs</h6>
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </li>
            )}

            <li onClick={() => setDashboardSidebar(false)}>
              <NavLink
                to="message"
                className="flex items-center gap-2 p-1.5 hover:text-primary duration-300"
              >
                <HiOutlineMail />
                <h6>Message</h6>
              </NavLink>
            </li>
            <li onClick={() => setDashboardSidebar(false)}>
              <NavLink
                to="saveJobs"
                className="flex items-center gap-2 p-1.5 hover:text-primary duration-300"
              >
                <AiOutlineHeart />
                <h6>Save Items</h6>
              </NavLink>
            </li>
            <li onClick={() => setDashboardSidebar(false)}>
              <NavLink
                to="disputes"
                className="flex items-center gap-2 p-1.5 hover:text-primary duration-300"
              >
                <GoCommentDiscussion />
                <h6>Disputes</h6>
              </NavLink>
            </li>
            <li onClick={() => setDashboardSidebar(false)}>
              <NavLink
                to="/dashboard/account/editProfile"
                className="flex items-center gap-2 p-1.5 hover:text-primary duration-300"
              >
                <AiOutlineSetting />
                <h6>Setting</h6>
              </NavLink>
            </li>
            <li onClick={() => setDashboardSidebar(false)}>
              <NavLink
                to="support"
                className="flex items-center gap-2 p-1.5 hover:text-primary duration-300"
              >
                <BiSupport />
                <h6>Help & Support</h6>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={`lg:hidden absolute top-0 z-40 ${
          dashboardSidebar ? "left-[299px]" : "left-0"
        } duration-200`}
      >
        <button
          onClick={() => setDashboardSidebar(!dashboardSidebar)}
          className="p-2 text-xl bg-primary text-base-100 rounded-full shadow-lg"
        >
          {dashboardSidebar ? <SlArrowLeft /> : <SlArrowRight />}
        </button>
      </div>
    </div>
  );
}