import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Proposals() {
  return (
    <div className="py-5 text-neutral">
      <div className="bg-base-100 rounded-md shadow-lg">
        <div className="border-b mb-4 px-4 py-3 text-lg">
          <div className="sm:flex justify-between items-center">
            <h6 className="font-medium">My Proposals</h6>
            <div className="relative">
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

        <div className="p-4">
          {/* Header */}
          <div className="hidden xl:block bg-gray-100 p-4 rounded font-medium">
            <div className="flex gap-4 items-center">
              <div className="w-[40%]">
                <h6>Company/Title</h6>
              </div>
              <div className="w-[15%]">
                <h6> APPLIED Date</h6>
              </div>
              <div className="w-[20%]">
                <h6> Proposal Amount</h6>
              </div>
              <div className="w-[25%]">
                <h6> Action</h6>
              </div>
            </div>
          </div>

          {/* Proposals Lists */}
          <div className="xl:mt-2 xl:px-4">
            <div className="xl:flex gap-4 items-center border-b py-4">
              <div className="xl:w-[40%]">
                <h6 className="text-xl">Pidex Limited</h6>
                <h6 className="text-[17px] ">Front-End Developer</h6>
              </div>

              <div className="xl:w-[30%] sm:flex gap-4 sm:mb-3 xl:mb-0">
                <div className="sm:w-1/2 flex gap-2 items-center">
                  <h6 className="xl:hidden">Applied on</h6>
                  <h6>3 Jan 23</h6>
                </div>
                <div className="sm:w-1/2 flex gap-2 items-center">
                  <h6 className="xl:hidden">Proposal Amount</h6>
                  <h6>10.00৳</h6>
                </div>
              </div>

              <div className="xl:w-[30%] mt-5 xl:mt-0">
                <div className="flex gap-4 items-center text-sm">
                  <div>
                    <Link
                      to=""
                      className="xl:block bg-primary px-4 py-2 text-base-100 rounded"
                    >
                      View Proposal
                    </Link>
                  </div>
                  <div>
                    <Link
                      to=""
                      className="xl:block bg-neutral px-4 py-2 text-base-100 rounded"
                    >
                      Edit Proposal
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:flex gap-4 items-center border-b py-4">
              <div className="xl:w-[40%]">
                <h6 className="text-xl">Pidex Limited</h6>
                <h6 className="text-[17px] ">Front-End Developer</h6>
              </div>

              <div className="xl:w-[30%] sm:flex gap-4 sm:mb-3 xl:mb-0">
                <div className="sm:w-1/2 flex gap-2 items-center">
                  <h6 className="xl:hidden">Applied on</h6>
                  <h6>3 Jan 23</h6>
                </div>
                <div className="sm:w-1/2 flex gap-2 items-center">
                  <h6 className="xl:hidden">Proposal Amount</h6>
                  <h6>10.00৳</h6>
                </div>
              </div>

              <div className="xl:w-[30%] mt-5 xl:mt-0">
                <div className="flex gap-4 items-center text-sm">
                  <div>
                    <Link
                      to=""
                      className="xl:block bg-primary px-4 py-2 text-base-100 rounded"
                    >
                      View Proposal
                    </Link>
                  </div>
                  <div>
                    <Link
                      to=""
                      className="xl:block bg-neutral px-4 py-2 text-base-100 rounded"
                    >
                      Edit Proposal
                    </Link>
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
