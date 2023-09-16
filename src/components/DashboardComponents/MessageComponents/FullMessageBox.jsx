import { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import ChatBox from "./ChatBox";
import MessageSetting from "./MessageSetting";

export default function FullMessageBox() {
  const [messageSetting, setMessageSetting] = useState(false);

  return (
    <div className="hidden md:block w-[65%] xl:w-[75%]">
      {messageSetting ? (
        <MessageSetting setMessageSetting={setMessageSetting} />
      ) : (
        <>
          <div className="w-full p-4 flex justify-between items-center border-b">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10">
                <img
                  src="https://i.ibb.co/znwrX5c/na.jpg"
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="text-start text-sm">
                <p>crone6</p>
                <p className="text-xs">Active 20 minute ago</p>
              </div>
            </div>

            <div className="2xl:hidden">
              <button
                onClick={() => setMessageSetting(true)}
                className="px-1.5 py-1.5 rounded-full hover:bg-gray-200 duration-200"
              >
                <AiFillInfoCircle className="text-xl" />
              </button>
            </div>
          </div>

          <ChatBox />
        </>
      )}
    </div>
  );
}
