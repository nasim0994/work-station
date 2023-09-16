import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { MdOutlinePersonSearch } from "react-icons/md";

export default function Profile() {
  const user = "freelancer";

  return (
    <div className="pb-10">
      {/* Banner */}
      <div className="h-60 bg-[url('https://image.shutterstock.com/image-photo/banner-coffee-laptop-office-supplies-260nw-1901776522.jpg')] bg-no-repeat bg-center bg-cover"></div>

      <div className="mx-10">
        <div className="lg:flex items-start gap-8 text-neutral">
          <div className="lg:w-[550px] shadow-lg rounded-md p-4 bg-base-100 -mt-16">
            <div className="-mt-16">
              <div className="relative">
                <img
                  src="https://cdn3.f-cdn.com/ppic/213571528/logo/40081811/jdnht/CROPPED_profile_logo_QRRJV_11b07c74774dd59bfb02a3815ff6204e.png?image-optimizer=force&format=webply&width=336"
                  alt=""
                  className="w-36 rounded-full mx-auto border-4 shadow-lg border-gray-100"
                />
              </div>
            </div>

            <div className="mt-2">
              <div className="flex justify-between">
                <h6 className="text-xl font-medium">Md Nasim Uddin</h6>
                <button className="bg-primary text-base-100 px-2 py-1 rounded text-sm font-medium hover:bg-opacity-90 duration-300">
                  <h6>Edit Profile</h6>
                </button>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium">
                <GoLocation />
                <p>Dhaka, Bangladesh</p>
              </div>

              <p className="text-sm mt-1">Member since November 7, 2020</p>
              <div>
                <p className="text-sm mt-1">Profile health: 80%</p>
                <div className="bg-gray-200 w-full rounded h-1 relative overflow-hidden">
                  <div className="bg-primary w-[60%] absolute top-0 left-0 h-full"></div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-1">
                <div className="flex gap-2">
                  <div className="flex gap-px items-center text-yellow-500">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p className="text-sm sm:text-center py-1">
                    <span>5</span>
                    <span className="text-neutral/70">/5 </span>
                    <span>(200)</span>
                  </p>
                </div>

                <div>
                  <p>$15/hr</p>
                </div>
              </div>
            </div>

            {/* Skill */}
            {user === "freelancer" && (
              <div className="mt-4">
                <h6 className="text-lg font-medium">Skill</h6>

                <div className="mt-2 text-sm font-medium text-neutral/80">
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
                  <button className="bg-gray-100 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200">
                    Django
                  </button>
                </div>
              </div>
            )}

            {/* Projects */}
            <div className="mt-6">
              <h6 className="text-lg font-medium">Projects</h6>

              <div className="text-[15px] grid grid-cols-2 gap-3 mt-2">
                <div className="bg-green-50 text-center p-4 rounded">
                  <p className="text-lg font-medium">2</p>
                  <p>Ongoing projects</p>
                </div>

                <div className="bg-primary/10 text-center p-4 rounded">
                  <p className="text-lg font-medium">13</p>
                  <p>Completed projects</p>
                </div>

                <div className="bg-red-50 text-center p-4 rounded">
                  <p className="text-lg font-medium">1</p>
                  <p>Cancelled projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            {/* Description */}
            <div className="shadow-lg rounded-md p-4 bg-base-100 mt-5">
              <h6 className="text-2xl font-medium">
                MERN Stack Developer || Front End Developer
              </h6>

              <div className="mt-2">
                <h6>
                  Hello, My name is Md Nasim Uddin. I am a Professional MERN
                  stack Developer. I have 3 months intern experience as front
                  end developer. I have completed a web development course from
                  Programming Hero. I am an expert with HTML, CSS, Bootstrap,
                  Tailwind CSS, JavaScript, ReactJs, NodeJs, ExpressJs, and
                  MongoDB. I work efficiently and Meticulously because I know
                  our clients want Effective and Perfect Design in a timely
                  manner. I always make responsive Websites for my clients.
                  Thank you.
                </h6>
              </div>
            </div>

            {/* Portfolio */}
            {user === "freelancer" && (
              <div className="shadow-lg rounded-md p-4 bg-base-100 mt-5">
                <div className="flex justify-between items-center border-b">
                  <h6 className="text-xl font-medium ">Portfolio Items</h6>
                  <Link
                    to="/dashboard/addPortfolio"
                    className="flex items-center gap-1 hover:text-primary duration-300"
                  >
                    <AiOutlinePlus />
                    <p className="text-sm">Add Portfolio</p>
                  </Link>
                </div>

                <div className="mt-4 grid md:grid-cols-3 gap-6">
                  <div>
                    <Link to={`/dashboard/portfolio`} className="portfolioItem">
                      <img
                        src="https://visme.co/blog/wp-content/uploads/2022/03/How-to-Make-a-Portfolio-Online-The-Ultimate-Guide-Thumbnail.jpg"
                        alt=""
                        className="w-full h-40 border rounded"
                      />
                      <h6 className="font-medium">InstantKaj</h6>
                    </Link>
                  </div>
                  <div>
                    <Link to={`/dashboard/portfolio`} className="portfolioItem">
                      <img
                        src="https://visme.co/blog/wp-content/uploads/2022/03/How-to-Make-a-Portfolio-Online-The-Ultimate-Guide-Thumbnail.jpg"
                        alt=""
                        className="w-full h-40 border rounded"
                      />
                      <h6 className="font-medium">InstantKaj</h6>
                    </Link>
                  </div>
                  <div>
                    <Link to={`/dashboard/portfolio`} className="portfolioItem">
                      <img
                        src="https://visme.co/blog/wp-content/uploads/2022/03/How-to-Make-a-Portfolio-Online-The-Ultimate-Guide-Thumbnail.jpg"
                        alt=""
                        className="w-full h-40 border rounded"
                      />
                      <h6 className="font-medium">InstantKaj</h6>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {user === "client" && (
              <div className="shadow-lg rounded-md p-4 bg-base-100 mt-5">
                <div className="flex justify-between items-center border-b">
                  <h6 className="text-xl font-medium">Posted Jobs</h6>
                  <Link
                    to="/dashboard/postJob"
                    className="flex items-center gap-1 hover:text-primary duration-300"
                  >
                    <AiOutlinePlus />
                    <p className="text-sm">Add A Job</p>
                  </Link>
                </div>

                <div className="mt-4">
                  <div className="bg-gray-100 rounded border mb-5">
                    <div className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center gap-1">
                          <MdMarkEmailRead className="text-primary" />
                          <Link
                            to=""
                            className="hover:text-primary duration-300 mt-1"
                          >
                            Jamiul Bari
                          </Link>
                        </div>
                        <p className="text-xl font-semibold">
                          Javascript Instructor
                        </p>
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

                    <div className="sm:flex justify-between items-center gap-4 p-4 pt-0 ">
                      <div className="flex justify-center gap-4 items-center">
                        <Link to="" className="primary-btn">
                          View proposals
                        </Link>
                        <Link to="" className="primary-btn">
                          Edit job
                        </Link>
                      </div>
                      <div className="text-center px-10 mt-4 sm:mt-0">
                        <p>0</p>
                        <p>Proposals</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 rounded border mb-5">
                    <div className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center gap-1">
                          <MdMarkEmailRead className="text-primary" />
                          <Link
                            to=""
                            className="hover:text-primary duration-300 mt-1"
                          >
                            Jamiul Bari
                          </Link>
                        </div>
                        <p className="text-xl font-semibold">
                          Javascript Instructor
                        </p>
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

                    <div className="sm:flex justify-between items-center gap-4 p-4 pt-0 ">
                      <div className="flex justify-center gap-4 items-center">
                        <Link to="" className="primary-btn">
                          View proposals
                        </Link>
                        <Link to="" className="primary-btn">
                          Edit job
                        </Link>
                      </div>
                      <div className="text-center px-10 mt-4 sm:mt-0">
                        <p>0</p>
                        <p>Proposals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Client Feedback */}
            <div className="shadow-lg rounded-md p-4 bg-base-100 mt-5">
              <h6 className="text-xl font-medium border-b">Client Feedback</h6>

              <div className="mt-2">
                {/* 1 */}
                <div className="flex gap-4 border-b py-4">
                  <img
                    src="https://instantkaj.com/wp-content/uploads/2021/02/Raiyan-100x100.jpeg"
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="w-full">
                    <div className="flex justify-between ">
                      <div>
                        <h6 className="text-[15px] font-medium">
                          Abdullah Mikdad
                        </h6>
                        <div className="flex gap-px text-sm items-center text-yellow-500">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>

                      <div className="text-sm text-end">
                        <p>Feb 10,2023 - feb 20,2023</p>
                        <p>Fixed Price: $100</p>
                      </div>
                    </div>

                    <p className="italic text-sm">
                      Very professional and well behaved. Thanks for the favor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
