import JobCard from "./JobCard";

export default function JobsList({ jobs }) {
  return (
    <div className="lists">
      {jobs?.data?.jobs?.length > 0 &&
        jobs?.data?.jobs?.map((job) => <JobCard key={job._id} job={job} />)}
    </div>
  );
}
