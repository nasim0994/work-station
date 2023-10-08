import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import Select from "react-dropdown-select";
import { useGetCategoriesQuery } from "../../Redux/category/categoryApi";
import { useLazyGetFilterJobsQuery } from "../../Redux/jobs/jobApi";

const locations = [
  { id: 1, name: "Dhaka" },
  { id: 2, name: "Rajshahi" },
  { id: 3, name: "Sylhet" },
  { id: 4, name: "Chattogram" },
  { id: 5, name: "Rangpur" },
  { id: 6, name: "Barishal" },
  { id: 7, name: "Khulna" },
  { id: 8, name: "Mymensingh " },
];

const skills = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "Javascript" },
  { id: 4, name: "React Js" },
  { id: 5, name: "Node Js" },
  { id: 6, name: "Express Js" },
  { id: 7, name: "PHP" },
  { id: 8, name: "Laravel" },
];

const jobTypes = [
  { id: 1, name: "Fixed" },
  { id: 2, name: "Hourly Based" },
];

export default function JobsFilter() {
  const [filterToggle, setFilterToggle] = useState(false);
  const { data: categories } = useGetCategoriesQuery();

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  let url = `job/all-jobs`;
  const [getFilterJobs] = useLazyGetFilterJobsQuery();

  const handleApplyFilter = () => {
    let categories = [];
    let skills = [];
    let jobTypes = [];
    let locations = [];
    selectedCategory?.filter((category) => categories.push(category.slug));
    selectedSkills?.filter((skill) => skills.push(skill.name));
    selectedJobTypes?.filter((jobType) => jobTypes.push(jobType.name));
    selectedLocation?.filter((location) => locations.push(location.name));

    url = `job/all-jobs?categories=${JSON.stringify(
      categories
    )}&skills=${JSON.stringify(skills)}&jobType=${JSON.stringify(
      jobTypes
    )}&locations=${JSON.stringify(locations)}`;

    getFilterJobs(url);
    setFilterToggle(false);
  };

  const handleClearFilter = () => {
    setSelectedCategory([]);
    setSelectedLocation([]);
    setSelectedSkills([]);

    getFilterJobs(url);
    setFilterToggle(false);
  };

  return (
    <div id="filter_wrap">
      <div className="lg:hidden flex justify-center">
        <button
          onClick={() => setFilterToggle(!filterToggle)}
          className="flex items-center gap-1 mb-4"
        >
          <CiFilter className="text-xl text-primary" />
          <h6 className="font-medium">Filters</h6>
        </button>
      </div>

      <div className={`filter ${filterToggle && "filter_show"}`}>
        <div className="flex justify-center gap-1 items-center mb-4">
          <CiFilter className="text-xl text-primary" />
          <h6 className="font-medium">Filters</h6>
        </div>

        <div className="flex flex-col gap-3">
          {/* category */}
          <div>
            <label htmlFor="category">
              <h6 className="pl-1 pb-1 text-sm font-medium">Category</h6>
            </label>
            <Select
              options={categories?.data}
              onChange={(e) => setSelectedCategory(e)}
              values={selectedCategory}
              labelField="name"
              valueField="_id"
              multi={true}
              searchBy="name"
              closeOnSelect={true}
            />
          </div>

          {/* Skills */}
          <div>
            <label htmlFor="category">
              <h6 className="pl-1 pb-1 text-sm font-medium">Skills</h6>
            </label>
            <Select
              options={skills}
              onChange={(e) => setSelectedSkills(e)}
              values={selectedSkills}
              labelField="name"
              valueField="id"
              multi={true}
              searchBy="name"
              closeOnSelect={true}
            />
          </div>

          {/* Job Type */}
          <div>
            <label htmlFor="category">
              <h6 className="pl-1 pb-1 text-sm font-medium">Job Type</h6>
            </label>
            <Select
              options={jobTypes}
              onChange={(e) => setSelectedJobTypes(e)}
              values={selectedJobTypes}
              labelField="name"
              valueField="id"
              searchBy="name"
              closeOnSelect={true}
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location">
              <h6 className="pl-1 pb-1 text-sm font-medium">Location</h6>
            </label>
            <Select
              options={locations}
              onChange={(e) => setSelectedLocation(e)}
              values={selectedLocation}
              labelField="name"
              valueField="id"
              multi={true}
              searchBy="name"
              closeOnSelect={true}
            />
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2">
            <button
              onClick={handleApplyFilter}
              className="bg-primary hover:bg-opacity-90 duration-200 text-sm font-medium text-base-100 px-6 py-2 rounded"
            >
              Apply Filter
            </button>
            <button
              onClick={handleClearFilter}
              className="bg-gray-700 hover:bg-opacity-90 duration-200 text-sm font-medium text-base-100 px-6 py-2 rounded"
            >
              Clear Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
