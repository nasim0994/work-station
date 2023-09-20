import { GoLocation } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import SendOffer from "../../../components/FreelancersComponents/SendOffer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function FreelancerDetails() {
  const { id } = useParams();
  const [freelancer, setFreelancer] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/freelancer/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setFreelancer(data?.data);
        }
      });
  }, [id]);

  const {
    bannerUrl,
    photoUrl,
    name,
    tagline,
    location,
    rating,
    hourlyRate,
    description,
    skills,
    projects,
    portfolio,
    clientFeedback,
  } = freelancer;

  return (
    <div className="pb-10 bg-accent">
      {/* Banner */}
      <div
        className={`h-60 bg-[url(${bannerUrl})] bg-no-repeat bg-center bg-cover`}
      ></div>

      <div className="container">
        <div className="lg:flex items-start gap-8 text-neutral">
          {/* Personal Info */}
          <div className="lg:w-[500px] border rounded-md p-4 bg-base-100 -mt-16">
            <div className="-mt-16">
              <div className="relative">
                <img
                  src={photoUrl}
                  alt=""
                  className="w-32 h-32 rounded-full mx-auto border-4 shadow-lg border-gray-100"
                />

                <div className="w-3 h-3 rounded-full bg-primary absolute bottom-5 right-[105px]"></div>
              </div>
            </div>

            <div className="mt-2">
              <h6 className="text-xl font-medium">{name}</h6>
              <div className="flex items-center gap-1 text-sm font-medium">
                <GoLocation />
                <p>
                  {location?.city}, {location?.country}
                </p>
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
                  <div className="flex gap-px items-center text-secondary">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p className="text-sm sm:text-center py-1">
                    <span>{rating?.average}</span>
                    <span className="text-neutral/70">/5 </span>
                    <span>({rating?.total})</span>
                  </p>
                </div>

                <div>
                  <p>${hourlyRate}/hr</p>
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
                {skills?.map((skill, i) => (
                  <button
                    key={i}
                    className="bg-gray-100 mr-2 mb-1 px-4 py-1 rounded-full"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="mt-6">
              <h6 className="text-lg font-medium">Projects</h6>

              <div className="text-[15px] grid grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-100 text-center p-4 rounded">
                  <p className="text-lg font-medium">
                    {projects?.ongoingProject?.length}
                  </p>
                  <p>Ongoing projects</p>
                </div>

                <div className="bg-green-50 text-center p-4 rounded">
                  <p className="text-lg font-medium">
                    {projects?.completedProject?.length}
                  </p>
                  <p>Completed projects</p>
                </div>

                <div className="bg-red-50 text-center p-4 rounded">
                  <p className="text-lg font-medium">
                    {projects?.cancelledProject?.length}
                  </p>
                  <p>Cancelled projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            {/* Description */}
            <div className="border rounded-md p-4 bg-base-100 mt-5">
              <h6 className="text-2xl font-medium">{tagline}</h6>

              <div className="mt-2">
                <h6>{description}</h6>
              </div>
            </div>

            {/* Portfolio */}
            <div className="border rounded-md p-4 bg-base-100 mt-5">
              <h6 className="text-xl font-medium border-b">Portfolio Items</h6>

              <div className="mt-4 grid md:grid-cols-3 gap-6">
                {portfolio?.map((p, i) => (
                  <div key={i}>
                    <img src={p?.image} alt="" className="w-full" />
                    <h2>{p?.title}</h2>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Feedback */}
            <div className="border rounded-md p-4 bg-base-100 mt-5">
              <h6 className="text-xl font-medium border-b">Client Feedback</h6>

              <div className="mt-2">
                {clientFeedback?.map((feedback, i) => (
                  <div key={i} className="flex gap-4 border-b py-4">
                    <img
                      src="https://WorkStation.com/wp-content/uploads/2021/02/Raiyan-100x100.jpeg"
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="w-full">
                      <div className="flex justify-between ">
                        <div>
                          <h6 className="text-[15px] font-medium">
                            {feedback.name}
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
                          <p>
                            {feedback.jobFrom} - {feedback.jobTo}
                          </p>
                          <p>
                            {feedback.jobType}: ${feedback.price}
                          </p>
                        </div>
                      </div>

                      <p className="italic text-sm">{feedback.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
