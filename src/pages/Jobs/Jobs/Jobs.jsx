import { useSelector } from "react-redux";
import { useGetAllJobsQuery } from "../../../Redux/jobs/jobApi";
import JobsFilter from "../../../components/JobsComponents/JobsFilter";
import JobsList from "../../../components/JobsComponents/JobsList";
import JobCardSkeleton from "../../../components/Skeleton/JobCardSkeleton";
// import Pagination from "../../../components/ReactPaginate/ReactPaginate";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export default function Jobs() {
  window.scroll(0, 0);
  const [pageNumber, setPageNumber] = useState();

  const { isLoading, isSuccess, isError, error } =
    useGetAllJobsQuery(pageNumber);
  const { jobs } = useSelector((state) => state.jobs);
  console.log(pageNumber);

  const totalItems = jobs?.data?.total;
  const perPageItems = 2;
  const totalPages = Math.ceil(parseInt(totalItems) / parseInt(perPageItems));
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
    content = <JobsList jobs={jobs} />;
  }

  return (
    <div className="py-5 min-h-[85vh] bg-gray-50/50">
      <div className="container">
        <div className="md:mx-16 lg:flex items-start gap-6 text-neutral">
          <JobsFilter />

          {content}
        </div>

        <div className="mt-10">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={(e) => setPageNumber(e.selected + 1)}
            pageRangeDisplayed={perPageItems}
            pageCount={totalPages}
            previousLabel="< previous"
            containerClassName={"flex gap-2 justify-center"}
            pageLinkClassName={
              "border border-neutral/70 px-4 py-1.5 rounded-md hover:bg-primary hover:text-base-100 hover:border-primary duration-200"
            }
            activeLinkClassName={"bg-primary text-base-100 border-primary"}
            previousLinkClassName={
              "border border-neutral/70 px-4 py-1.5 rounded-md hover:bg-primary hover:text-base-100 hover:border-primary duration-200"
            }
            nextLinkClassName={
              "border border-neutral/70 px-4 py-1.5 rounded-md hover:bg-primary hover:text-base-100 hover:border-primary duration-200"
            }
            breakLinkClassName={"px-1 py-1 hover:text-primary duration-200"}
          />
        </div>
      </div>
    </div>
  );
}
