import React, { useEffect } from "react";
import { MdMarkEmailUnread } from "react-icons/md";

const NotificationDropdown = ({ setNotificationDropdown }) => {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        !e.target.closest(".notificationDropdownBtn") &&
        !e.target.closest(".notificationDropdown")
      ) {
        setNotificationDropdown(false);
      }
    });
  }, [setNotificationDropdown]);

  return (
    <div className="notificationDropdown z-50 bg-base-100 shadow-lg absolute w-80 rounded-md -right-5 top-[120%]">
      <div className="p-4 flex items-center justify-between border-b pb-2 mb-2">
        <h6>Notification</h6>
        <button className="text-sm text-neutral/80 font-normal hover:text-neutral">
          View all
        </button>
      </div>

      {/* <div className="text-center py-4 font-normal text-neutral/80">
                              No recent notification found
                            </div> */}

      <ul className="font-normal text-neutral/90">
        <li>
          <button className="text-start flex gap-4 hover:bg-gray-100 duration-200 p-2 border-b">
            <div className="text-2xl mt-2">
              <MdMarkEmailUnread />
            </div>
            <div>
              <h6 className="text-sm">
                You have submitted the proposal against...
              </h6>
              <p className="text-end text-xs text-neutral/80">4 minutes ago</p>
            </div>
          </button>
        </li>

        <li>
          <button className="text-start flex gap-4 hover:bg-gray-100 duration-200 p-2 border-b">
            <div className="text-2xl mt-2">
              <MdMarkEmailUnread />
            </div>
            <div>
              <h6 className="text-sm">
                You have submitted the proposal against...
              </h6>
              <p className="text-end text-xs text-neutral/80">4 minutes ago</p>
            </div>
          </button>
        </li>

        <li>
          <button className="text-start flex gap-4 hover:bg-gray-100 duration-200 p-2">
            <div className="text-2xl mt-2">
              <MdMarkEmailUnread />
            </div>
            <div>
              <h6 className="text-sm">
                You have submitted the proposal against...
              </h6>
              <p className="text-end text-xs text-neutral/80">4 minutes ago</p>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NotificationDropdown;
