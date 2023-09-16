import { useRef, useState } from "react";

import JoditEditor from "jodit-react";
import Select from "react-dropdown-select";
import ImageUploading from "react-images-uploading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AiFillDelete } from "react-icons/ai";

const skills = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "ReactJs" },
  { id: 5, name: "NodeJs" },
  { id: 6, name: "Python" },
  { id: 7, name: "DJango" },
  { id: 8, name: "PHP" },
];

const categories = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "ReactJs" },
  { id: 5, name: "NodeJs" },
  { id: 6, name: "Python" },
  { id: 7, name: "DJango" },
  { id: 8, name: "PHP" },
];

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

export default function PostAJob() {
  const editor = useRef(null);
  const [details, setDetails] = useState("");

  const [expiryDate, setExpiryDate] = useState();
  const [deadlineDate, setDeadlineDate] = useState();

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [images, setImages] = useState([]);

  const onChange = (imageList) => {
    setImages(imageList);
  };

  return (
    <div className="my-2 bg-base-100 shadow-lg rounded">
      <div className="border-b px-5 py-4 text-lg">
        <h6>Post a job</h6>
      </div>

      <form className="p-4">
        {/* Job description */}
        <div>
          <h6 className="bg-gray-50 p-2 border-l-2 border-primary font-medium">
            Job description
          </h6>

          <div className="p-4">
            {/* Title */}
            <div className="mb-4">
              <input
                type="text"
                className="w-full border rounded px-3 py-2 outline-none focus:border-primary"
                placeholder="Job Title"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Project Level */}
              <select
                name=""
                className="w-full border rounded px-3 py-2 outline-none focus:border-primary cursor-pointer text-neutral/70 font-medium"
              >
                <option value="">Select Project Level</option>
                <option value="">Basic</option>
                <option value="">Medium</option>
                <option value="">Expensive</option>
              </select>

              {/* Job Duration */}
              <select
                name=""
                className="w-full border rounded px-3 py-2 outline-none focus:border-primary cursor-pointer text-neutral/70 font-medium"
              >
                <option value="">Select Job Duration</option>
                <option value="">01 to 03 months</option>
                <option value="">01 to 06 months</option>
                <option value="">Less then a month</option>
                <option value="">Less then a week</option>
                <option value="">More then a 6 months</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Freelancer type */}
              <select
                name=""
                className="w-full border rounded px-3 py-2 outline-none focus:border-primary cursor-pointer text-neutral/70 font-medium"
              >
                <option value="">Select Freelancer Type</option>
                <option value="">Entry</option>
                <option value="">Intermediate</option>
                <option value="">Expert</option>
              </select>

              {/* English Level */}
              <select
                name=""
                className="w-full border rounded px-3 py-2 outline-none focus:border-primary cursor-pointer text-neutral/70 font-medium"
              >
                <option value="">Select English Level</option>
                <option value="">Basic</option>
                <option value="">Conversational</option>
                <option value="">Fluent</option>
                <option value="">Professional</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Freelancer type */}
              <select
                name=""
                className="w-full border rounded px-3 py-2 outline-none focus:border-primary cursor-pointer text-neutral/70 font-medium"
              >
                <option value="">Select Freelancer Type</option>
                <option value="">Entry</option>
                <option value="">Intermediate</option>
                <option value="">Expert</option>
              </select>

              {/* Job Expiry Date */}
              <DatePicker
                selected={expiryDate}
                onChange={(date) => setExpiryDate(date)}
                className="w-full border rounded px-3 py-2 outline-none focus:border-primary cursor-pointer text-neutral/70 font-medium"
                placeholderText="Job Expiry Date"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Job Deadline Date */}
              <DatePicker
                selected={deadlineDate}
                onChange={(date) => setDeadlineDate(date)}
                className="w-full border rounded px-3 py-2 outline-none focus:border-primary cursor-pointer text-neutral/70 font-medium"
                placeholderText="Job Deadline Date"
              />
            </div>
          </div>
        </div>

        {/* Prices */}
        <div className="mb-4">
          <h6 className="pl-4 border-l-2 border-primary bg-gray-50 p-2 w-full">
            Prices
          </h6>

          <div className="p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Job Type */}
              <select
                name=""
                className="w-full border rounded px-3 py-2 outline-none focus:border-primary cursor-pointer text-neutral/70 font-medium"
              >
                <option value="">Select Job Type</option>
                <option value="">Fixed</option>
                <option value="">Hourly Based Job</option>
              </select>

              {/* min price */}
              <input
                type="text"
                className="w-full border rounded px-3 py-2 outline-none focus:border-primary"
                placeholder="min price"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* max price */}
              <input
                type="text"
                className="w-full border rounded px-3 py-2 outline-none focus:border-primary"
                placeholder="max price"
              />

              {/* Hourly price */}
              <input
                type="text"
                className="w-full border rounded px-3 py-2 outline-none focus:border-primary"
                placeholder="Hourly Rate"
              />
            </div>
          </div>
        </div>

        {/* Job Categories */}
        <div className="mb-4">
          <h6 className="pl-4 border-l-2 border-primary bg-gray-50 p-2 w-full">
            Job Categories
          </h6>
          <div className="mx-4 mt-4">
            <Select
              options={categories}
              onChange={(e) => setSelectedCategories(e)}
              values={selectedCategories}
              labelField="name"
              valueField="id"
              multi={true}
              searchBy="name"
              closeOnSelect={true}
            />
          </div>
        </div>

        {/* Job Details */}
        <div>
          <h6 className="bg-gray-50 p-2 border-l-2 border-primary font-medium">
            Job Details
          </h6>

          <div className="p-4">
            <JoditEditor
              ref={editor}
              value={details}
              tabIndex={1}
              onBlur={(newContent) => setDetails(newContent)}
            />
          </div>
        </div>

        {/* Skills Required */}
        <div className="mb-4">
          <h6 className="pl-4 border-l-2 border-primary bg-gray-50 p-2 w-full">
            Skills Required
          </h6>
          <div className="mx-4 mt-4">
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
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <h6 className="pl-4 border-l-2 border-primary bg-gray-50 p-2 w-full">
            Thumbnail Image
          </h6>
          <div className="mx-4 mt-4 portfolio">
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              dataURLKey="data_url"
            >
              {({ onImageUpload, onImageRemove, dragProps }) => (
                <div
                  className="border rounded border-dashed p-4"
                  {...dragProps}
                >
                  <div className="flex gap-3 items-center">
                    <span
                      onClick={onImageUpload}
                      className="px-4 py-1.5 rounded-2xl text-base-100 bg-primary cursor-pointer text-sm"
                    >
                      Choose Image
                    </span>
                    <span>or Drop here</span>
                  </div>

                  <div
                    className={`${
                      images.length > 0 && "mt-4"
                    } grid grid-cols-5 gap-4`}
                  >
                    {images.map((image, index) => (
                      <div key={index} className="image-item relative">
                        <img
                          src={image["data_url"]}
                          alt=""
                          className="h-24 border rounded"
                        />
                        <div
                          onClick={() => onImageRemove(index)}
                          className="w-7 h-7 bg-primary rounded-full flex justify-center items-center text-base-100 absolute top-0 right-0 cursor-pointer"
                        >
                          <AiFillDelete />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
          </div>
        </div>

        {/* Select Country */}
        <div className="mb-2 relative">
          <h6 className="pl-4 border-l-2 border-primary bg-gray-50 p-2 w-full">
            Your Location
          </h6>

          <div className="mx-4 mt-4">
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

        <div className="mt-6 bg-base-100 shadow-lg rounded-md p-4">
          <h6 className="mb-2 px-8">
            Update all the latest changes made by you, by just clicking on “Save
            & Update button.
          </h6>

          <div className="flex justify-end mt-4">
            <button type="submit" className="primary_bg_gradient px-4 py-2">
              Save & Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
