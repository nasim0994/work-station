import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllJobsQuery } from "../../../Redux/jobs/jobApi";
import JobCardSkeleton from "../../../components/Skeleton/JobCardSkeleton";

import JobsList from "../../../components/JobsComponents/JobsList";
import JobsFilter from "../../../components/JobsComponents/JobsFilter";

import JobPagination from "../../../components/JobsComponents/JobPaginate/JobPagination";

export default function Jobs() {
  window.scroll(0, 0);

  const { isLoading, isSuccess, isError, error } = useGetAllJobsQuery();
  const { jobs } = useSelector((state) => state.jobs);

  const itemsPerPage = 3;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(jobs?.jobs?.length / itemsPerPage);

  const currentJobs = jobs?.jobs?.slice(itemOffset, endOffset);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % jobs?.jobs?.length;
    setItemOffset(newOffset);
  };

  let content = null;

  if (isLoading) {
    content = (
      <>
        <JobCardSkeleton />
      </>
    );
  }

  if (!isLoading || isError) {
    content = <p>{error}</p>;
  }

  if (isSuccess && !isError && !isLoading) {
    content = <JobsList jobs={currentJobs} />;
  }

  return (
    <div className="py-5 min-h-[85vh] bg-gray-50/50">
      <div className="container">
        <div className="md:mx-16 lg:flex items-start gap-6 text-neutral">
          <JobsFilter setItemOffset={setItemOffset} />

          {content}
        </div>

        {isSuccess && (
          <JobPagination
            handlePageClick={handlePageClick}
            pageCount={pageCount}
          />
        )}
      </div>
    </div>
  );
}
