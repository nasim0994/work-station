import { UseContext } from "../../ContextAPI/ContextAPI";
import JobCard from "./JobCard";

export default function JobsList() {
  const { jobs } = UseContext();
  console.log(jobs);

  return (
    <div className="lists">
      {jobs?.length > 0 &&
        jobs?.map((job) => <JobCard key={job._id} job={job} />)}
    </div>
  );
}
