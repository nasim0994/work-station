import { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsSliders2 } from "react-icons/bs";

export default function MessageLists({ setMessageBoxClose }) {
  const [messageFilter, setMessageFilter] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        !e.target.closest(".messageFilterBtn") &&
        !e.target.closest(".messageFilter")
      ) {
        setMessageFilter(false);
      }
    });
  }, [setMessageFilter]);

  return (
    <>
      {/* Search & Filter */}
      <div className="p-2 flex gap-4 items-center justify-between">
        <div className="relative w-full">
          <input
            type="search"
            placeholder="search"
            className="w-full pl-8 pr-2 py-1.5 outline-none border rounded"
          />
          <div className="absolute left-2 top-2.5 opacity-50">
            <BiSearchAlt2 className="text-xl" />
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setMessageFilter(!messageFilter)}
            className="text-2xl mt-1.5 messageFilterBtn"
          >
            <BsSliders2 />
          </button>

          {messageFilter && (
            <div className="messageFilter absolute right-0 py-2 w-32 bg-base-100 shadow-lg rounded-md">
              <ul>
                <li className="py-1 px-3 cursor-pointer hover:bg-gray-100 duration-200">
                  Unread
                </li>
                <li className="py-1 px-3 cursor-pointer hover:bg-gray-100 duration-200">
                  Support
                </li>
                <li className="py-1 px-3 cursor-pointer hover:bg-gray-100 duration-200">
                  Archived
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Lists */}
      <div>
        <div
          onClick={() => setMessageBoxClose(true)}
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-3 rounded duration-300"
        >
          <div className="relative">
            <div className="w-10 h-10">
              <img
                src="https://i.ibb.co/znwrX5c/na.jpg"
                alt=""
                className="w-full h-full border rounded-full"
              />
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 absolute bottom-1 right-px shadow-lg"></div>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h6 className="text-[15px]">
                <span className="font-medium">crone6</span>
              </h6>
              <p className="text-xs">Nov 8, 2019</p>
            </div>
            <p className="text-[13px] text-neutral-content">
              You: How do you want to see the file?
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-3 rounded duration-300">
          <div className="relative">
            <div className="w-10 h-10">
              <img
                src="https://i.ibb.co/znwrX5c/na.jpg"
                alt=""
                className="w-full h-full border rounded-full"
              />
            </div>
            <div className="w-2 h-2 rounded-full bg-gray-300 absolute bottom-1 right-px shadow-lg"></div>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h6 className="text-[15px]">
                <span className="font-medium">crone6</span>
              </h6>
              <p className="text-xs">Nov 8, 2019</p>
            </div>
            <p className="text-[13px] text-neutral-content">
              You: How do you want to see the file?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
