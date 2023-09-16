import { AiOutlineProject, AiOutlineSearch } from "react-icons/ai";

export default function CancelledProjects() {
  return (
    <div className="py-5">
      <div className="bg-base-100 rounded-md shadow-lg">
        <div className="border-b mb-4 p-5 text-lg">
          <div className="sm:flex justify-between items-center">
            <h6>Manage cancelled projects</h6>
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
          <div className="border border-dashed min-h-[70vh] flex justify-center items-center">
            <div>
              <AiOutlineProject className="text-6xl mx-auto mb-4 opacity-50 text-red-500" />
              <h6 className="font-semibold text-neutral/70">
                No cancelled project.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
