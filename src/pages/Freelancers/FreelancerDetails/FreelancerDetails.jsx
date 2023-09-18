import { GoLocation } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import SendOffer from "../../../components/FreelancersComponents/SendOffer";

export default function FreelancerDetails() {
  return (
    <div className="pb-10 bg-accent">
      {/* Banner */}
      <div className="h-60 bg-[url('https://i.ibb.co/D8FC67z/w3xfx2.jpg')] bg-no-repeat bg-center bg-cover"></div>

      <div className="container">
        <div className="lg:flex items-start gap-8 text-neutral">
          {/* Personal Info */}
          <div className="lg:w-[500px] border rounded-md p-4 bg-base-100 -mt-16">
            <div className="-mt-16">
              <div className="relative">
                <img
                  src="https://i.ibb.co/znwrX5c/na.jpg"
                  alt=""
                  className="w-32 h-32 rounded-full mx-auto border-4 shadow-lg border-gray-100"
                />

                <div className="w-3 h-3 rounded-full bg-primary absolute bottom-5 right-[105px]"></div>
              </div>
            </div>

            <div className="mt-2">
              <h6 className="text-xl font-medium">Nasim Uddin</h6>
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

              <div className="flex justify-between items-center mt-2">
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
                    <span>(100)</span>
                  </p>
                </div>

                <div>
                  <p>$15/hr</p>
                </div>
              </div>

              <div className="mt-4">
                <SendOffer />
              </div>
            </div>

            {/* Skill */}
            <div className="mt-6">
              <h6 className="text-lg font-medium">Skill</h6>

              <div className="mt-4 text-sm font-medium text-neutral/80">
                <button className="bg-primary/10 mr-2 mb-1 px-4 py-1 rounded-full">
                  Html
                </button>
                <button className="bg-primary/10 mr-2 mb-1 px-4 py-1 rounded-full">
                  css
                </button>
                <button className="bg-primary/10 mr-2 mb-1 px-4 py-1 rounded-full">
                  Javascript
                </button>
                <button className="bg-primary/10 mr-2 mb-1 px-4 py-1 rounded-full">
                  React
                </button>
              </div>
            </div>

            {/* Projects */}
            <div className="mt-6">
              <h6 className="text-lg font-medium">Projects</h6>

              <div className="text-[15px] grid grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-100 text-center p-4 rounded">
                  <p className="text-lg font-medium">2</p>
                  <p>Ongoing projects</p>
                </div>

                <div className="bg-green-50 text-center p-4 rounded">
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
            <div className="border rounded-md p-4 bg-base-100 mt-5">
              <h6 className="text-2xl font-medium">Front-end Developer</h6>

              <div className="mt-2">
                <h6>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.Contrary to popular
                  belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old.
                </h6>
              </div>
            </div>

            {/* Portfolio */}
            <div className="border rounded-md p-4 bg-base-100 mt-5">
              <h6 className="text-xl font-medium border-b">Portfolio Items</h6>

              <div className="mt-4 grid md:grid-cols-3 gap-6">
                <div>
                  <img
                    src="https://i.ibb.co/D8FC67z/w3xfx2.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div>
                  <img
                    src="https://i.ibb.co/D8FC67z/w3xfx2.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div>
                  <img
                    src="https://i.ibb.co/D8FC67z/w3xfx2.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Client Feedback */}
            <div className="border rounded-md p-4 bg-base-100 mt-5">
              <h6 className="text-xl font-medium border-b">Client Feedback</h6>

              <div className="mt-2">
                {/* 1 */}
                <div className="flex gap-4 border-b py-4">
                  <img
                    src="https://i.ibb.co/D8FC67z/w3xfx2.jpg"
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="w-full">
                    <div className="flex justify-between ">
                      <div>
                        <h6>Abdullah Mikdad</h6>
                        <div className="flex gap-px items-center text-yellow-500">
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

                    <p className="italic mt-2">
                      Very professional and well behaved. Thanks for the favor
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex gap-4 border-b py-4">
                  <img
                    src="https://i.ibb.co/FJyMmR7/asusceo.jpg"
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="w-full">
                    <div className="flex justify-between ">
                      <div>
                        <h6>Abdullah Mikdad</h6>
                        <div className="flex gap-px items-center text-yellow-500">
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

                    <p className="italic mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel, optio.
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
