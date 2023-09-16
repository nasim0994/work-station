import { AiOutlineSend } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineUpload } from "react-icons/hi";

export default function ChatBox() {
  return (
    <>
      {/* ---Message Body--- */}
      <div className="message h-[80%] overflow-y-auto p-4 text-sm font-medium">
        <div className="bubble_left relative">
          <img src="https://i.ibb.co/FJyMmR7/asusceo.jpg" alt="" />
          <p className="bubble">Welcome WorkStation</p>
        </div>

        <div className="bubble_right relative">
          <img src="https://i.ibb.co/znwrX5c/na.jpg" alt="" />
          <p className="bubble">Hello</p>
        </div>
      </div>

      {/* ---Message Footer--- */}
      <form className="flex gap-1 border-t items-center p-1">
        <div className="relative w-10">
          <input
            type="file"
            name="file"
            id="file"
            className="appearance-none w-full opacity-0"
          />
          <label
            htmlFor="file"
            className="absolute top-1.5 left-3 text-xl cursor-pointer opacity-80"
          >
            <HiOutlineUpload />
          </label>
        </div>

        <textarea
          className="w-full outline-none resize-none p-2 text-sm"
          rows="1"
          placeholder="Type a message"
        ></textarea>

        <div className="flex gap-3 items-center text-lg opacity-80">
          <button>
            <BsEmojiSmile />
          </button>
          <button type="submit">
            <AiOutlineSend className="text-xl" />
          </button>
        </div>
      </form>
    </>
  );
}
