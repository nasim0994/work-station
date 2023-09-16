import { AiOutlineProject, AiOutlineSearch } from "react-icons/ai";

const OngoingJobs = () => {
  return (
    <div className="py-2">
      <div className="bg-base-100 rounded-md shadow-lg">
        <div className="border-b px-5 py-3 text-lg">
          <div className="sm:flex justify-between items-center">
            <h6>Ongoing Jobs</h6>
            <div className="relative mt-2 sm:mt-0">
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
          <div className="border border-dashed min-h-[75vh] flex justify-center items-center">
            <div>
              <AiOutlineProject className="text-6xl mx-auto mb-4 opacity-50 text-red-500" />
              <h6 className="font-semibold text-neutral/70">
                No ongoing Jobs.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingJobs;
