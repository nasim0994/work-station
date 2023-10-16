import JobCard from "./JobCard";

export default function JobsList({ jobs }) {
  return (
    <div className="lists">
      {jobs?.jobs?.length > 0 &&
        jobs?.jobs?.map((job) => <JobCard key={job._id} job={job} />)}
    </div>
  );
}
