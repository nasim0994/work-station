import ReactPaginate from "react-paginate";

export default function JobPagination({ handleApplyFilter, totalPages }) {
  return (
    <div className="mt-10">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handleApplyFilter}
        pageRangeDisplayed={2}
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
  );
}
