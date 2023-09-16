import { MdOutlineReportProblem } from "react-icons/md";

export default function Disputes() {
  return (
    <div className="bg-base-100 rounded-md shadow-lg">
      <div className="border-b mb-4 p-5 text-lg">
        <div className="flex justify-between items-center">
          <h6>Dispute</h6>
          <div>
            <label
              htmlFor="dispute-modal"
              className="text-sm text-primary cursor-pointer"
            >
              + Create Dispute
            </label>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="border border-dashed min-h-[70vh] flex justify-center items-center">
          <div>
            <MdOutlineReportProblem className="text-6xl mx-auto mb-4 opacity-50 text-red-500" />
            <h6 className="font-semibold text-neutral/70">
              No disputes have submitted yet.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
