import { Link } from "react-router-dom";
import { TbMessageCircle2, TbStackPop } from "react-icons/tb";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHeart,
  AiOutlineMoneyCollect,
} from "react-icons/ai";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineRunningWithErrors } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";

export default function Dashboard() {
  const user = "client";

  return (
    <div className="py-5">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="bg-base-100 shadow-lg py-5 rounded-md">
          <div className="text-center">
            <TbMessageCircle2 className="mx-auto text-5xl opacity-30" />
            <h6 className="text-xl mt-2">New Messages</h6>
            <Link to="" className="text-primary text-sm">
              Click to view
            </Link>
          </div>
        </div>

        <div className="bg-base-100 shadow-lg py-5 rounded-md">
          <div className="text-center">
            <TbStackPop className="mx-auto text-5xl opacity-30" />
            <h6 className="text-xl mt-2">Latest Proposals</h6>
            <Link to="" className="text-primary text-sm">
              Click to view
            </Link>
          </div>
        </div>

        <div className="bg-base-100 shadow-lg py-5 rounded-md">
          <div className="text-center">
            <AiOutlineHeart className="mx-auto text-5xl opacity-30" />
            <h6 className="text-xl mt-2">View Saved Items</h6>
            <Link to="" className="text-primary text-sm">
              Click to view
            </Link>
          </div>
        </div>

        {user === "freelancer" && (
          <>
            <div className="bg-base-100 shadow-lg py-5 rounded-md">
              <div className="text-center">
                <GiReceiveMoney className="mx-auto text-5xl opacity-30" />
                <h6 className="text-xl mt-2">0.00 ৳</h6>
                <h6>Pending balance</h6>
              </div>
            </div>
            <div className="bg-base-100 shadow-lg py-5 rounded-md">
              <div className="text-center">
                <GiTakeMyMoney className="mx-auto text-5xl opacity-30" />
                <h6 className="text-xl mt-2">0.00 ৳</h6>
                <h6>Available balance</h6>
              </div>
            </div>

            <div className="bg-base-100 shadow-lg py-5 rounded-md">
              <div className="text-center">
                <MdOutlineRunningWithErrors className="mx-auto text-5xl opacity-30" />
                <h6 className="text-xl mt-2">0</h6>
                <Link to="" className="text-primary text-sm">
                  Total Ongoing projects
                </Link>
              </div>
            </div>

            <div className="bg-base-100 shadow-lg py-5 rounded-md">
              <div className="text-center">
                <AiOutlineCheckCircle className="mx-auto text-5xl opacity-30" />
                <h6 className="text-xl mt-2">0</h6>
                <Link to="" className="text-primary text-sm">
                  Total Completed projects
                </Link>
              </div>
            </div>

            <div className="bg-base-100 shadow-lg py-5 rounded-md">
              <div className="text-center">
                <AiOutlineCloseCircle className="mx-auto text-5xl opacity-30" />
                <h6 className="text-xl mt-2">0</h6>
                <Link to="" className="text-primary text-sm">
                  Total Cancelled projects
                </Link>
              </div>
            </div>
          </>
        )}

        {user === "client" && (
          <>
            <div className="bg-base-100 shadow-lg py-5 rounded-md">
              <div className="text-center">
                <MdOutlineRunningWithErrors className="mx-auto text-5xl opacity-30" />
                <h6 className="text-xl mt-2">0</h6>
                <Link to="" className="text-primary text-sm">
                  Total Ongoing Jobs
                </Link>
              </div>
            </div>

            <div className="bg-base-100 shadow-lg py-5 rounded-md">
              <div className="text-center">
                <AiOutlineCheckCircle className="mx-auto text-5xl opacity-30" />
                <h6 className="text-xl mt-2">0</h6>
                <Link to="" className="text-primary text-sm">
                  Total Completed Jobs
                </Link>
              </div>
            </div>

            <div className="bg-base-100 shadow-lg py-5 rounded-md">
              <div className="text-center">
                <AiOutlineCloseCircle className="mx-auto text-5xl opacity-30" />
                <h6 className="text-xl mt-2">0</h6>
                <Link to="" className="text-primary text-sm">
                  Total Cancelled Jobs
                </Link>
              </div>
            </div>

            <div className="bg-base-100 shadow-lg py-5 rounded-md">
              <div className="text-center">
                <TfiBag className="mx-auto text-5xl opacity-30" />
                <h6 className="text-xl mt-2">0</h6>
                <Link to="" className="text-primary text-sm">
                  Total Posted Jobs
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      {user === "freelancer" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
          <div className="bg-base-100 shadow-lg rounded-md">
            <div className="border-b py-6">
              <h6 className="px-4 text-lg">Ongoing projects</h6>
            </div>

            <div className="p-4 mt-4 ">
              <div className="p-4 border border-dashed flex justify-center items-center min-h-[400px]">
                <div>
                  <MdOutlineRunningWithErrors className="mx-auto text-8xl opacity-30" />
                  <p className="font-semibold text-lg mt-5 text-neutral/80">
                    No ongoing projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-base-100 shadow-lg rounded-md">
            <div className="border-b py-6">
              <h6 className="px-4 text-lg">Past Earnings</h6>
            </div>

            <div className="p-4 mt-4 ">
              <div className="p-4 border border-dashed flex justify-center items-center min-h-[400px]">
                <div>
                  <AiOutlineMoneyCollect className="mx-auto text-8xl opacity-30" />
                  <p className="font-semibold text-lg mt-5 text-neutral/80">
                    No Earning has been made yet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {user === "client" && (
        <>
          <div className="bg-base-100 shadow-lg rounded-md mt-6">
            <div className="border-b py-6">
              <h6 className="px-4 text-lg">Ongoing Jobs</h6>
            </div>

            <div className="p-4 mt-4 ">
              <div className="p-4 border border-dashed flex justify-center items-center min-h-[400px]">
                <div>
                  <MdOutlineRunningWithErrors className="mx-auto text-8xl opacity-30" />
                  <p className="font-semibold text-lg mt-5 text-neutral/80">
                    No ongoing Jobs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
