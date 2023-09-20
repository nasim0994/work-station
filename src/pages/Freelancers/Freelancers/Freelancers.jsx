import { UseContext } from "../../../ContextAPI/ContextAPI";
import FreelancerFilter from "../../../components/FreelancersComponents/FreelancerFilter";
import FreelancerList from "../../../components/FreelancersComponents/FreelancerList";

export default function Freelancers() {
  window.scroll(0, 0);

  const { freelancers, loading } = UseContext();

  return (
    <div className="py-5 min-h-[85vh] bg-gray-50/50">
      <div className="container">
        <div className="md:mx-16 lg:flex items-start gap-6 text-neutral">
          <FreelancerFilter />

          {loading ? (
            <p>Loading</p>
          ) : (
            <FreelancerList freelancers={freelancers} />
          )}
        </div>
      </div>
    </div>
  );
}
