import { useSelector } from "react-redux";
import { useGetFreelancersQuery } from "../../../Redux/freelancer/freelancerApi";
import FreelancerFilter from "../../../components/FreelancersComponents/FreelancerFilter";
import FreelancerList from "../../../components/FreelancersComponents/FreelancerList";
import FreelancerCardSkeleton from "../../../components/Skeleton/FreelancerCardSkeleton";
import Pagination from "../../../components/Pagination/Pagination";
import { useState } from "react";

export default function Freelancers() {
  window.scroll(0, 0);
  const { freelancers, loading } = useSelector((state) => state.freelancers);

  const [currentPage, setCurrentPage] = useState(1);
  let total = freelancers?.total;
  const pages = Math.ceil(parseInt(total) / 2);

  const { isSuccess, isError, error } = useGetFreelancersQuery(currentPage, {
    refetchOnMountOrArgChange: true,
  });

  let content = null;

  if (loading) {
    content = (
      <>
        <FreelancerCardSkeleton />
      </>
    );
  }

  if (!loading && isError) {
    content = <p>{error}</p>;
  }

  if (isSuccess && !isError && !loading) {
    content = <FreelancerList freelancers={freelancers} />;
  }

  return (
    <div className="py-5 min-h-[85vh] bg-gray-50/50">
      <div className="container">
        <div className="md:mx-16 lg:flex items-start gap-6 text-neutral">
          <FreelancerFilter />

          {content}
        </div>

        {!loading && freelancers?.data?.length > 0 && (
          <Pagination setCurrentPage={setCurrentPage} pages={pages} />
        )}
      </div>
    </div>
  );
}
