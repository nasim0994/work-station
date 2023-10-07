import JobCard from "./JobCard";

export default function JobsList({ jobs }) {
  return (
    <div className="lists">
      {jobs?.data?.length > 0 &&
        jobs?.data?.map((job) => <JobCard key={job._id} job={job} />)}
    </div>
  );
}
