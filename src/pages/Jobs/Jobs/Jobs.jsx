import JobsFilter from "../../../components/JobsComponents/JobsFilter";
import JobsList from "../../../components/JobsComponents/JobsList";

export default function Jobs() {
  window.scroll(0, 0);

  return (
    <div className="py-5 min-h-[85vh] bg-gray-50/50">
      <div className="container">
        <div className="md:mx-16 lg:flex items-start gap-6 text-neutral">
          <JobsFilter />

          <JobsList />
        </div>
      </div>
    </div>
  );
}
