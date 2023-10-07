import { useGetFreelancersQuery } from "../../../Redux/freelancer/freelancerApi";
import FreelancerFilter from "../../../components/FreelancersComponents/FreelancerFilter";
import FreelancerList from "../../../components/FreelancersComponents/FreelancerList";
import FreelancerCardSkeleton from "../../../components/Skeleton/FreelancerCardSkeleton";

export default function Freelancers() {
  window.scroll(0, 0);

  const {
    data: freelancers,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetFreelancersQuery();

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
          <FreelancerFilter />

          {content}
        </div>
      </div>
    </div>
  );
}
