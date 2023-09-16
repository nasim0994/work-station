import { useRef, useState } from "react";
import Select from "react-dropdown-select";
import ImageUploading from "react-images-uploading";
import JoditEditor from "jodit-react";
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

const AddPortfolio = () => {
  const editor = useRef(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [details, setDetails] = useState("");

  const [images, setImages] = useState([]);
  const onChange = (imageList) => {
    setImages(imageList);
  };

  return (
    <div className="py-5">
      <div className="bg-base-100 shadow-lg rounded-md">
        <div className="border-b mb-4 p-5 text-lg">
          <h6>Add Portfolio</h6>
        </div>
        <div className="p-5">
          <form>
            <div className="mb-6">
              <h6 className="pl-4 border-l-2 border-primary bg-gray-50 p-2 w-full">
                Portfolio Title
              </h6>
              <div className="mx-4 mt-4">
                <input
                  type="text"
                  name="title"
                  className="w-full border rounded outline-none px-3 py-2 focus:border-primary"
                  placeholder="Project Title"
                />
              </div>
            </div>

            <div className="mb-6">
              <h6 className="pl-4 border-l-2 border-primary bg-gray-50 p-2 w-full">
                Portfolio Skill
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

            <div className="mb-6">
              <h6 className="pl-4 border-l-2 border-primary bg-gray-50 p-2 w-full">
                Portfolio Video
              </h6>
              <div className="mx-4 mt-4">
                <input
                  type="text"
                  name="title"
                  className="w-full border rounded outline-none px-3 py-2 focus:border-primary"
                  placeholder="Video URL"
                />
              </div>
            </div>

            <div className="mb-6">
              <h6 className="pl-4 border-l-2 border-primary bg-gray-50 p-2 w-full">
                Live Link
              </h6>
              <div className="mx-4 mt-4">
                <input
                  type="text"
                  name="title"
                  className="w-full border rounded outline-none px-3 py-2 focus:border-primary"
                  placeholder="Live Link URL"
                />
              </div>
            </div>

            <div className="mb-6">
              <h6 className="pl-4 border-l-2 border-primary bg-gray-50 p-2 w-full">
                Portfolio Description
              </h6>
              <div className="mx-4 mt-4">
                <JoditEditor
                  ref={editor}
                  value={details}
                  tabIndex={1}
                  onBlur={(newContent) => setDetails(newContent)}
                />
              </div>
            </div>

            <div className="mb-6">
              <h6 className="pl-4 border-l-2 border-primary bg-gray-50 p-2 w-full">
                Portfolio Image
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

            <div className="mt-10 flex justify-between items-center ">
              <h6 className="pl-6 border-l-2 border-primary">
                Update all the latest changes made by you, by just clicking on
                “Save & Update button.
              </h6>
              <button className="text-sm font-semibold bg-primary text-base-100 px-4 py-3 rounded">
                Save & Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPortfolio;
