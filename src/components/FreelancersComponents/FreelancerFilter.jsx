import { CiFilter } from "react-icons/ci";
import Select from "react-dropdown-select";
import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../../Redux/category/categoryApi";
import { useDispatch } from "react-redux";
import { setFilters } from "../../Redux/freelancer/freelancerSlice";

const skills = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "React" },
  { id: 4, name: "NextJs" },
  { id: 5, name: "PHP" },
  { id: 6, name: "SEO" },
  { id: 7, name: "Adobe Photoshop" },
  { id: 8, name: "SEO " },
];

export default function FreelancerFilter({ setCurrentPage }) {
  const [filterToggle, setFilterToggle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest("#filter_wrap")) {
        setFilterToggle(false);
      }
    });
  }, []);

  const { data: categories } = useGetCategoriesQuery();

  const dispatch = useDispatch();

  const handleApplyFilter = () => {
    setCurrentPage(1);
    let categories = [];
    let skills = [];
    selectedCategory?.filter((category) => categories.push(category.slug));
    selectedSkill?.filter((skill) => skills.push(skill.name));

    let filters = {
      categories,
      skills,
    };
    dispatch(setFilters(filters));
  };

  const handleClearFilter = () => {
    setCurrentPage(1);

    setSelectedCategory([]);
    setSelectedSkill([]);

    let categories = [];
    let skills = [];

    let filters = {
      categories,
      skills,
    };
    dispatch(setFilters(filters));
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

          {/* Skill */}
          <div className="mt-4">
            <label htmlFor="Skill">
              <h6 className="pl-1 pb-1 text-sm font-medium">Skills</h6>
            </label>
            <Select
              options={skills}
              onChange={(e) => setSelectedSkill(e)}
              values={selectedSkill}
              labelField="name"
              valueField="id"
              multi={true}
              searchBy="name"
              closeOnSelect={true}
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
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
