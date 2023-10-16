import { useSelector } from "react-redux";
import { useGetFreelancersQuery } from "../../../Redux/freelancer/freelancerApi";
import FreelancerFilter from "../../../components/FreelancersComponents/FreelancerFilter";
import FreelancerList from "../../../components/FreelancersComponents/FreelancerList";
import FreelancerCardSkeleton from "../../../components/Skeleton/FreelancerCardSkeleton";
import Pagination from "../../../components/Pagination/Pagination";
import { useState } from "react";

export default function Freelancers() {
  window.scroll(0, 0);
  const { freelancers, filters } = useSelector((state) => state.freelancers);
  const { categories, skills } = filters;

  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, isSuccess, isError, error } = useGetFreelancersQuery(
    { currentPage, categories, skills },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  let content = null;

  if (isLoading) {
    content = (
      <>
        <FreelancerCardSkeleton />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }

  if (isSuccess && !isError && !isLoading) {
    content = <FreelancerList freelancers={freelancers} />;
  }

  return (
    <div className="py-5 min-h-[85vh] bg-gray-50/50">
      <div className="container">
        <div className="md:mx-16 lg:flex items-start gap-6 text-neutral">
          <FreelancerFilter setCurrentPage={setCurrentPage} />

          {content}
        </div>

        {!isLoading && freelancers?.data?.length > 0 && (
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            pages={freelancers?.pages}
          />
        )}
      </div>
    </div>
  );
}
