import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import Select from "react-dropdown-select";
import { useGetCategoriesQuery } from "../../Redux/category/categoryApi";
import { useLazyGetJobsByFilterQuery } from "../../Redux/jobs/jobApi";

const locations = [
  { name: "Dhaka", id: 1 },
  { name: "Rajshahi", id: 2 },
  { name: "Sylhet", id: 3 },
  { name: "Chattogram", id: 4 },
  { name: "Rangpur", id: 5 },
  { name: "Barishal", id: 6 },
  { name: "Khulna", id: 7 },
  { name: "Mymensingh ", id: 8 },
];

export default function JobsFilter() {
  const [filterToggle, setFilterToggle] = useState(false);
  const { data: categories } = useGetCategoriesQuery();

  const [selectedCategory, setSelectedCategory] = useState([]);
  // const [selectedSkill, setSelectedSkill] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  let url = ``;
  const [getJobsByFilter, result] = useLazyGetJobsByFilterQuery(url);
  console.log(result);

  const handleApplyFilter = () => {
    let categories = [];
    let locations = [];
    selectedCategory?.filter((category) => categories.push(category.slug));
    selectedLocation?.filter((location) => locations.push(location.name));

    url = `/job/all-jobs?categories=${JSON.stringify(
      categories
    )}&locations=${JSON.stringify(locations)}`;

    getJobsByFilter(url);
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

        <div>
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

          {/* Location */}
          <div className="mt-4">
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

          {/* Specialization */}
          <div className="mt-4">
            <label htmlFor="specialization">
              <h6 className="pl-1 pb-1 text-sm font-medium">Specialization</h6>
            </label>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              onClick={handleApplyFilter}
              className="bg-primary hover:bg-opacity-90 duration-200 text-sm font-medium text-base-100 px-6 py-2 rounded"
            >
              Apply Filter
            </button>
            <button className="bg-gray-700 hover:bg-opacity-90 duration-200 text-sm font-medium text-base-100 px-6 py-2 rounded">
              Clear Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
