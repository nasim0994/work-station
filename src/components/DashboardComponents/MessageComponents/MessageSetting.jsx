import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MessageSetting({ setMessageSetting }) {
  return (
    <>
      <div className="w-full bg-neutral p-3 flex justify-between items-center text-base-100">
        <button
          onClick={() => setMessageSetting(false)}
          className="flex items-center hover:text-primary duration-200"
        >
          <MdKeyboardArrowLeft className="text-2xl" />
          <p>See Chat</p>
        </button>
      </div>

      <div className="message h-[450px] overflow-y-scroll p-4 text-sm font-medium">
        <div className="pb-4 mb-4 border-b border-neutral/50">
          <div className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/znwrX5c/na.jpg"
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div>
              <p>crone6</p>
              <Link
                to=""
                className="hover:text-primary hover:underline duration-300"
              >
                @username
              </Link>
            </div>
          </div>

          <button className="px-8 py-2 bg-primary text-base-100 rounded mt-2 hover:bg-opacity-90 duration-200">
            Create Quote
          </button>
        </div>

        <div className="pb-4 mb-4 border-b border-neutral/50">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h6 className="font-semibold">Archive</h6>
              <p className="text-neutral/70">
                Hide chat from your active list.
              </p>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <h6 className="font-semibold">Mute</h6>
              <p className="text-neutral/70">
                Turn off this chat`$apos`s notifications.
              </p>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h6 className="font-semibold text-red-600">Block</h6>
              <p className="text-neutral/70">
                Restrict messages for this chat.
              </p>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>

        <button className="text-start p-2 hover:bg-gray-100 duration-200 w-full rounded">
          <h6 className="font-semibold">Report</h6>
          <p className="text-neutral/70">
            Theres something wrong with this chat.
          </p>
        </button>
      </div>
    </>
  );
}
