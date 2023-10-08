import { useSelector } from "react-redux";
import { useGetAllJobsQuery } from "../../../Redux/jobs/jobApi";
import JobsFilter from "../../../components/JobsComponents/JobsFilter";
import JobsList from "../../../components/JobsComponents/JobsList";
import JobCardSkeleton from "../../../components/Skeleton/JobCardSkeleton";

export default function Jobs() {
  window.scroll(0, 0);

  const { isLoading, isSuccess, isError, error } = useGetAllJobsQuery();
  const { jobs } = useSelector((state) => state.jobs);

  let content = null;

  if (isLoading) {
    content = (
      <>
        <JobCardSkeleton />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }

  if (isSuccess && !isError && !isLoading) {
    content = <JobsList jobs={jobs} />;
  }

  return (
    <div className="py-5 min-h-[85vh] bg-gray-50/50">
      <div className="container">
        <div className="md:mx-16 lg:flex items-start gap-6 text-neutral">
          <JobsFilter />

          {content}
        </div>
      </div>
    </div>
  );
}
