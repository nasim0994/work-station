import { useState } from "react";
import Select from "react-dropdown-select";

const locations = [
  { id: 1, name: "Dhaka" },
  { id: 2, name: "Rajshahi" },
  { id: 3, name: "Sylhet" },
  { id: 4, name: "Chattogram" },
  { id: 5, name: "Rangpur" },
  { id: 6, name: "Barishal" },
  { id: 7, name: "Khulna" },
  { id: 8, name: "Mymensingh" },
];

export default function BillingAddress() {
  const [selectedLocation, setSelectedLocation] = useState([]);

  return (
    <div>
      <h6 className="bg-gray-50 p-2 border-l-2 border-primary font-medium">
        Billing Address
      </h6>

      <form className="mt-4 xl:w-2/3">
        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
            placeholder="First Name"
          />
          <input
            type="text"
            className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
            placeholder="Last Name"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
            placeholder="Company Name"
          />
          <input
            type="text"
            className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
            placeholder="Address"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
            placeholder="Select a country"
          />
          <input
            type="text"
            className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
            placeholder="City"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          {/* Country */}
          <div className="mb-2">
            <Select
              options={locations}
              onChange={(e) => setSelectedLocation(e)}
              values={selectedLocation}
              labelField="name"
              valueField="id"
              searchBy="name"
              closeOnSelect={true}
            />
          </div>
        </div>

        <button className="primary_bg_gradient px-4 py-2 mt-4">
          Update Billing Details
        </button>
      </form>
    </div>
  );
}
