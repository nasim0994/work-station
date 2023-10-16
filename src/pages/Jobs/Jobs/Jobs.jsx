import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetJobsQuery } from "../../../Redux/jobs/jobApi";

import JobsList from "../../../components/JobsComponents/JobsList";
import JobsFilter from "../../../components/JobsComponents/JobsFilter";
import Pagination from "../../../components/Pagination/Pagination";

export default function Jobs() {
  window.scroll(0, 0);

  const { jobs, filters } = useSelector((state) => state.jobs);
  const { categories, locations, jobTypes } = filters;
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, isSuccess, isError, error } = useGetJobsQuery(
    { currentPage, categories, locations, jobTypes },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  let content = null;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (!isLoading || isError) {
    content = <p>{error}</p>;
  }

  if (isSuccess && !isError && !isLoading) {
    content = <JobsList jobs={jobs} />;
  }

  return (
    <div className="py-5 min-h-[85vh] bg-gray-50/50">
      <div className="container">
        <div className="md:mx-16 lg:flex items-start gap-6 text-neutral">
          <JobsFilter setCurrentPage={setCurrentPage} />

          {content}
        </div>

        {!isLoading && jobs?.jobs?.length > 0 && (
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            pages={jobs?.pages}
          />
        )}
      </div>
    </div>
  );
}
