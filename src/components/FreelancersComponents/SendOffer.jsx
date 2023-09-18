import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function SendOffer() {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalToggle(true)}
        className="w-full bg-primary rounded-md text-base-100 py-1.5 hover:bg-opacity-90 duration-300"
      >
        <h6>Send Offer</h6>
      </button>

      {/* Modal */}
      {modalToggle && (
        <>
          <div
            onClick={() => setModalToggle(false)}
            className="modal_overlay"
          ></div>
          <div className="modal w-[450px] h-auto">
            <form>
              <div className="flex justify-between items-center border-b px-6 py-4">
                <h3 className="text-lg">Send Offer</h3>
                <div
                  onClick={() => setModalToggle(false)}
                  className="close_btn"
                >
                  <AiOutlineClose />
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <select className="select">
                    <option selected>Select Project</option>
                    <option>Normal Apple</option>
                    <option>Normal Orange</option>
                  </select>
                </div>

                <div className="mb-2">
                  <textarea
                    rows="4"
                    className="w-full border rounded px-3 py-2 outline-none"
                    placeholder="Type Message here..."
                  ></textarea>
                </div>

                <p className="mb-4 text-[15px] text-neutral-content">
                  Click the button to send the message to this freelancer
                </p>

                <button className="px-4 py-2 rounded bg-primary text-base-100 hover:bg-opacity-90 duration-200">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
