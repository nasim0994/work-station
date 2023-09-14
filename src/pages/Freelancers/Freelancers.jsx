import "./Freelancers.css";
import FreelancerFilter from "../../components/FreelancersComponents/FreelancerFilter";
import FreelancerList from "../../components/FreelancersComponents/FreelancerList";

export default function Freelancers() {
  return (
    <div className="py-5 min-h-[85vh] bg-gray-50/50">
      <div className="container">
        <div className="md:mx-16 lg:flex items-start gap-6 text-neutral">
          <FreelancerFilter />

          <FreelancerList />
        </div>
      </div>
    </div>
  );
}
