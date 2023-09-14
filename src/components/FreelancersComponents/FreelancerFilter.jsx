import { CiFilter } from "react-icons/ci";
import Select from "react-dropdown-select";
import { useState } from "react";

const categories = [
  { name: "Web Design", id: 1 },
  { name: "Front End Development", id: 2 },
  { name: "Web Development", id: 3 },
  { name: "MERN Stack Development", id: 4 },
  { name: "Data Entry", id: 5 },
  { name: "Logo Design", id: 6 },
];
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

export default function FreelancerFilter() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  return (
    <div className="lg:w-[480px] border rounded-md p-4 job-filter bg-base-100 ">
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
            options={categories}
            onChange={(e) => setSelectedCategory(e)}
            values={selectedCategory}
            labelField="name"
            valueField="id"
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

        <div className="mt-4 flex gap-2 items-center">
          <button className="bg-primary hover:bg-opacity-90 duration-200 text-sm font-medium text-base-100 px-6 py-1.5 rounded">
            Apply Filter
          </button>
          <button className="bg-gray-700 hover:bg-opacity-90 duration-200 text-sm font-medium text-base-100 px-6 py-1.5 rounded">
            Clear Filter
          </button>
        </div>
      </div>
    </div>
  );
}
