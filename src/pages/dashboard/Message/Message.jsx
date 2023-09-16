import "./Message.css";
import { useState } from "react";

import FullMessageBox from "../../../components/DashboardComponents/MessageComponents/FullMessageBox";
import MessageLists from "../../../components/DashboardComponents/MessageComponents/MessageLists";

export default function Message() {
  window.scroll(0, 0);
  const [messageBoxClose, setMessageBoxClose] = useState(false);

  return (
    <div className="my-2 bg-base-100 shadow-lg rounded-md">
      <div className="border-b px-5 py-4 text-lg">
        <h6>Message</h6>
      </div>

      <div className="md:flex min-h-[78vh]">
        <div className="md:w-[30%] md:border-r p-4">
          <MessageLists setMessageBoxClose={setMessageBoxClose} />
        </div>

        {messageBoxClose ? (
          <FullMessageBox />
        ) : (
          <div className="hidden md:flex w-[70%] xl:w-[75%] h-[78vh] flex-col gap-4 justify-center items-center">
            <img src="/images/fullMessageIcon.png" className="w-72" alt="" />
            <h2 className="text-2xl text-neutral">WorkStation Message</h2>
            <div className="text-sm text-neutral-content font-light">
              <p>
                Send and receive messages without keeping your phone online.
              </p>
              <p>
                Use WorkStation on up to 4 linked devices and 1 phone at the
                same time.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
