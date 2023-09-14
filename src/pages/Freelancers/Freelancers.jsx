import FreelancerFilter from "../../components/FreelancersComponents/FreelancerFilter";
import FreelancerList from "../../components/FreelancersComponents/FreelancerList";

export default function Freelancers() {
  return (
    <div className="py-10 bg-accent min-h-[85vh]">
      <div className="w-[95%] xl:w-[1100px] mx-auto">
        <div className="lg:flex items-start gap-8 text-neutral">
          <FreelancerFilter />

          <FreelancerList />
        </div>
      </div>
    </div>
  );
}
