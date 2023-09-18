import {
  AiFillInfoCircle,
  AiOutlineFieldTime,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdOutlinePersonSearch } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

export default function SubmitProposal() {
  return (
    <div className="py-10 text-neutral">
      <div className="container">
        {/* Title */}
        <div className="bg-accent p-6 rounded-md">
          <div className="lg:flex justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h6 className="text-2xl font-semibold mb-2">
                Looking for Graphics designer
              </h6>

              <div className="md:flex gap-4 items-center text-sm text-neutral/80">
                <div className="flex items-center gap-1 md:border-r border-neutral/30 pr-3 ">
                  <GoLocation />
                  <h6>Dhaka</h6>
                </div>

                <div className="flex items-center gap-1 md:border-r border-neutral/30 pr-3">
                  <AiOutlineFieldTime className="text-lg" />
                  <h6>April 21, 2023</h6>
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

            <div className="flex items-center gap-4">
              <button className="text-[15px] text-primary hover:text-primary/80 duration-200">
                <h6 className="flex gap-1 items-center">
                  <AiOutlineHeart />
                  Save Job
                </h6>
              </button>
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
                  <span>-0</span>
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-sm">
                    <span className="font-semibold">InstantKaj </span>
                    <span className="text-primary"> Service fee</span>
                  </p>
                  <AiFillInfoCircle className="text-primary" />
                </div>
              </div>

              <div className="mb-4 px-4 flex justify-between items-center">
                <div className="font-semibold">
                  <span className="pr-2">
                    ( <span className="text-primary">৳</span> )
                  </span>
                  <span>-27.20</span>
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-sm">
                    <span className="text-primary">
                      Amount, You’ll receive after
                    </span>
                    <span className="font-semibold">InstantKaj</span>
                    <span className="text-primary"> service fee deduction</span>
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
              ></textarea>
            </div>

            <div className="px-3 md:px-5 pb-5 font-medium">
              <button className="bg-primary text-base-100 px-6 py-2 rounded hover:bg-opacity-90 duration-200">
                Send Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
