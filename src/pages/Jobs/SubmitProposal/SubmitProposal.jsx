import { useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillInfoCircle, AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlinePersonSearch } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { useGetJobByIdQuery } from "../../../Redux/jobs/jobApi";
import Loading from "../../../components/Loading/Loading";

export default function SubmitProposal() {
  const [amount, setAmount] = useState(0);
  const [coverLetter, setCoverLetter] = useState("");

  let serviceFee = (amount / 100) * 5;
  let receive = amount - serviceFee;

  // const navigate = useNavigate();
  const params = useParams();

  const id = params.id;
  const { data, isLoading, isError, error } = useGetJobByIdQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && isError) {
    return <p>{error}</p>;
  }

  const job = data?.status === "success" && data?.data;
  const { title, city, jobType, experienceLevel } = job;

  const handelApply = (e) => {
    e.preventDefault();
    if (amount === 0 || amount === "") {
      return alert("please write Proposal Amount");
    }
    if (coverLetter === "" || coverLetter.length < 100) {
      return alert("Cover Letter must be 100 Character");
    }

    setCoverLetter("");
    alert("job apply success");
    // navigate(`/jobs`);
  };

  return (
    <div className="py-10 text-neutral">
      <div className="container">
        {/* Title */}
        <div className="bg-accent p-6 rounded-md border">
          <div className="lg:flex justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h6 className="text-2xl font-semibold mb-2">{title}</h6>

              <div className="md:flex gap-4 items-center text-sm text-neutral/80">
                <div className="flex items-center gap-1 md:border-r border-neutral/30 pr-3 ">
                  <GoLocation />
                  <h6>{city}</h6>
                </div>

                <div className="flex items-center gap-1 md:border-r border-neutral/30 pr-3">
                  <AiOutlineFieldTime className="text-lg" />
                  <h6>April 21, 2023</h6>
                </div>

                <div className="flex items-center gap-1 md:border-r border-neutral/30 pr-3">
                  <FaBusinessTime />
                  <h6>{jobType}</h6>
                </div>

                <div className="flex items-center gap-1">
                  <MdOutlinePersonSearch className="text-lg" />
                  <h6>{experienceLevel} Level</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border  rounded-md mt-5">
          <form action="">
            <h6 className="border-b p-4 text-lg font-medium">
              Proposal Amount
            </h6>

            <div className="p-6 bg-gray-50 border-b">
              <div className="relative mb-6">
                <input
                  type="text"
                  className="border rounded outline-none focus:border-primary px-4 py-2.5 w-full"
                  placeholder="00.00"
                  defaultValue={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <span className="absolute right-2 top-2">
                  ( <span className="text-primary">৳</span> )
                </span>
                <small className="font-bold italic text-neutral/70">
                  Total amount the client will see on your proposal
                </small>
              </div>

              <div className="mb-4 px-4 flex justify-between items-center border-b pb-4">
                <div className="font-semibold">
                  <span className="pr-2">
                    ( <span className="text-primary">৳</span> )
                  </span>
                  <span>-{serviceFee}</span>
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-sm">
                    <span className="font-semibold text-primary">
                      workstation
                    </span>
                    <span> Service fee</span>
                  </p>
                  <AiFillInfoCircle className="text-primary" />
                </div>
              </div>

              <div className="mb-4 px-4 flex justify-between items-center">
                <div className="font-semibold">
                  <span className="pr-2">
                    ( <span className="text-primary">৳</span> )
                  </span>
                  <span>{receive}</span>
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-sm">
                    <span>Amount, You’ll receive after</span>
                    <span className="font-semibold text-primary">
                      workstation
                    </span>
                    <span> service fee deduction</span>
                  </p>
                  <AiFillInfoCircle className="text-primary" />
                </div>
              </div>
            </div>

            <div className="p-3 md:p-6">
              <textarea
                name=""
                rows="10"
                className="border rounded outline-none focus:border-primary px-4 py-2.5 w-full resize-none"
                placeholder="Cover Letter"
                onChange={(e) => setCoverLetter(e.target.value)}
              ></textarea>
            </div>

            <div className="px-3 md:px-5 pb-5 font-medium">
              <button
                onClick={handelApply}
                className="bg-primary text-base-100 px-6 py-2 rounded hover:bg-opacity-90 duration-200"
              >
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
