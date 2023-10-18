import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function SaveJobs({ saveJobs }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (saveJobs?.length > 0) {
      let ids = [];
      saveJobs?.map((job) => ids.push(job.jobId));

      const url = `https://work-station-server.vercel.app/api/v1/job/bulk-jobs?ids=${JSON.stringify(
        ids
      )}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data?.status === "success") {
            setJobs(data.data);
          }
        });
    }
  }, [saveJobs]);

  return (
    <div className="mt-4">
      {jobs?.length > 0 ? (
        <>
          <div className="bg-gray-50 p-2 flex justify-between items-center">
            <h6 className="border-l-2 pl-3 border-primary">
              Saved jobs listing
            </h6>

            <button className="flex items-center text-sm text-primary">
              <AiOutlineClose /> Remove All Jobs
            </button>
          </div>

          <div className="mt-4 md:px-5">
            {jobs?.map((job) => (
              <div
                key={job._id}
                className="border rounded-md py-4 px-6 mb-6 bg-base-100"
              >
                {/* Title */}
                <div className="flex justify-between ">
                  <div>
                    <Link to="" className="hover:text-primary duration-300">
                      <h6 className="font-semibold text-lg">{job?.title}</h6>
                    </Link>
                    <p className="text-neutral/70 font-medium">
                      {job?.companyName}
                    </p>
                  </div>
                  <div>
                    <img
                      src={job?.companyLogo}
                      alt=""
                      className="w-12 rounded-full"
                    />
                  </div>
                </div>

                {/*  */}
                <div className="my-4 grid md:grid-cols-2 xl:grid-cols-4 gap-4 items-center text-[15px]">
                  <div>
                    <h6 className="font-medium">
                      ${job?.maximumPrice} – {job?.minimumPrice} per hour
                    </h6>
                    <h6 className="text-neutral/70">CTC({job?.jobType})</h6>
                  </div>

                  <div>
                    <h6 className="font-medium">{job?.duration}</h6>
                    <h6 className="text-neutral/70">Duration</h6>
                  </div>

                  <div>
                    <h6 className="font-medium">{job?.experienceLevel}</h6>
                    <h6 className="text-neutral/70">Experience Level</h6>
                  </div>

                  <button className="flex items-center text-sm text-red-400">
                    <AiOutlineClose /> Remove
                  </button>
                </div>

                {/* Skills Required / tags  */}
                <div className="mt-4 text-sm font-medium text-neutral/80">
                  {job?.skills?.map((job, i) => (
                    <button
                      key={i}
                      className="bg-gray-100 mr-2 mb-1 px-4 py-1 rounded-full hover:bg-primary/10 duration-200"
                    >
                      {job}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>No Save Job</p>
      )}
    </div>
  );
}
