import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import Select from "react-dropdown-select";
import { useGetCategoriesQuery } from "../../Redux/category/categoryApi";
import { useDispatch } from "react-redux";
import { setClearFilters, setJobFilters } from "../../Redux/jobs/jobSlice";

const locations = [
  { id: 1, name: "Dhaka" },
  { id: 2, name: "Rajshahi" },
  { id: 3, name: "Sylhet" },
  { id: 4, name: "Chattogram" },
  { id: 5, name: "Rangpur" },
  { id: 6, name: "Barishal" },
  { id: 7, name: "Khulna" },
  { id: 8, name: "Natore" },
  { id: 9, name: "Bogura" },
];

const jobTypes = [
  { id: 1, name: "Fixed" },
  { id: 2, name: "Hourly Based" },
  { id: 3, name: "Internship" },
];

export default function JobsFilter({ setCurrentPage }) {
  const [filterToggle, setFilterToggle] = useState(false);
  const { data: categories } = useGetCategoriesQuery();

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  const dispatch = useDispatch();

  const handleApplyFilter = () => {
    setCurrentPage(1);

    let categories = [];
    let jobTypes = [];
    let locations = [];
    selectedCategory?.filter((category) => categories.push(category.slug));
    selectedJobTypes?.filter((jobType) => jobTypes.push(jobType.name));
    selectedLocation?.filter((location) => locations.push(location.name));

    dispatch(
      setJobFilters({
        categories,
        jobTypes,
        locations,
      })
    );
  };

  const handleClearFilter = () => {
    setCurrentPage(1);

    setSelectedCategory([]);
    setSelectedLocation([]);
    setSelectedJobTypes([]);

    dispatch(setClearFilters());
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
