import { useRef, useState } from "react";
import Select from "react-dropdown-select";
import ImageUploading from "react-images-uploading";
import JoditEditor from "jodit-react";

import { AiFillDelete } from "react-icons/ai";

const gender = [
  { id: 1, name: "MR" },
  { id: 2, name: "MISS" },
  { id: 3, name: "MRS" },
];

const englishLabels = [
  { id: 1, name: "Conversational" },
  { id: 2, name: "Fluent" },
  { id: 3, name: "Professional" },
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

export default function EditProfile() {
  const editor = useRef(null);
  const [details, setDetails] = useState("");
  const [selectedGander, setSelectedGander] = useState([]);
  const [selectedEnglishLabels, setSelectedEnglishLabels] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const [images, setImages] = useState([]);
  const onChange = (imageList) => {
    setImages(imageList);
  };

  return (
    <form className="pb-10">
      <div>
        <h6 className="bg-gray-50 p-2 border-l-2 border-primary font-medium">
          Your basics
        </h6>

        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Select
              options={gender}
              onChange={(e) => setSelectedGander(e)}
              values={selectedGander}
              labelField="name"
              valueField="id"
              searchBy="name"
              closeOnSelect={true}
            />

            <input
              type="text"
              className="border rounded px-3 py-2 outline-none focus:border-primary"
              placeholder="First Name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              className="border rounded px-3 py-2 outline-none focus:border-primary"
              placeholder="Last Name"
            />

            <input
              type="text"
              className="border rounded px-3 py-2 outline-none focus:border-primary"
              placeholder="User Name"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="w-full border rounded px-3 py-2 outline-none focus:border-primary"
              placeholder="Number"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="w-full border rounded px-3 py-2 outline-none focus:border-primary"
              placeholder="Title/Tagline"
            />
          </div>
        </div>
      </div>

      <div>
        <h6 className="bg-gray-50 p-2 border-l-2 border-primary font-medium">
          Add brief details
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

      <div className="mb-4">
        <h6 className="bg-gray-50 p-2 border-l-2 border-primary font-medium">
          Your english level
        </h6>

        <div className="p-4">
          <Select
            options={englishLabels}
            onChange={(e) => setSelectedEnglishLabels(e)}
            values={selectedEnglishLabels}
            labelField="name"
            valueField="id"
            searchBy="name"
            closeOnSelect={true}
          />
        </div>
      </div>

      <div className="mb-4">
        <h6 className="pl-4 border-l-2 border-primary bg-gray-50 p-2 w-full">
          Profile Image
        </h6>
        <div className="border border-dashed mt-4 rounded mx-4">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            dataURLKey="data_url"
          >
            {({ onImageUpload, onImageRemove, dragProps }) => (
              <div className="border rounded border-dashed p-4" {...dragProps}>
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
                    images?.length > 0 && "mt-4"
                  } grid grid-cols-4 gap-4`}
                >
                  {images?.map((image, i) => (
                    <div key={i} className="image-item relative">
                      <img
                        src={image["data_url"]}
                        alt=""
                        className="h-24 border rounded"
                      />
                      <div
                        onClick={() => onImageRemove(i)}
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

      <div className="mb-4">
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

      <div className="mb-4">
        <h6 className="pl-4 border-l-2 border-primary bg-gray-50 p-2 w-full">
          Your Skill
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

      <div className="mt-10 bg-base-100 shadow-lg rounded-md p-4">
        <h6 className="mb-2 px-8">
          Update all the latest changes made by you, by just clicking on “Save &
          Update button.
        </h6>

        <div className="flex justify-end mt-4">
          <button type="submit" className="primary_bg_gradient px-4 py-2">
            Save & Update
          </button>
        </div>
      </div>
    </form>
  );
}
