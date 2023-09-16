import "./Support.css";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    question: "Ways to work online and earn money?",
    ans: `By signing up in WorkStation.com, you can easily search for jobs in search job and earn by working from home.`,
  },
  {
    question: "Why WorkStation.com?",
    ans: `WorkStation.com is the Best Freelancing platform in Bangladesh which acts like a bridge between freelancer and employee. Here Freelancers of Bangladesh can easily get their payouts through mobile banking. Employers can also make it Instantly! This is really efficient.`,
  },
];

export default function Support() {
  window.scroll(0, 0);
  const [toggleFAQ, setToggleFAQ] = useState(null);
  const handelToggleFAQ = (i) => {
    if (toggleFAQ === i) {
      return setToggleFAQ(null);
    }
    setToggleFAQ(i);
  };
  return (
    <div className="py-2 text-neutral">
      <div className="grid xl:grid-cols-2 gap-6 items-start">
        <div className="bg-base-100 rounded-md shadow-lg">
          <div className="border-b mb-4 p-5 text-lg">
            <h6>Help & Support</h6>
          </div>

          <div className="p-5">
            <div className="bg-gray-50 border-l-2 border-primary pl-4 py-2">
              <h6>Account Security & Settings</h6>
            </div>

            <div className="pl-4 mt-6">
              <h2 className="font-semibold text-neutral/80">
                Here we will answer some of the questions that have been raised.
              </h2>

              {/* FAQ */}
              <div className="mt-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="mb-2">
                    <button
                      onClick={() => handelToggleFAQ(i)}
                      className="bg-gray-100 w-full flex justify-between items-center p-4 font-medium text-neutral rounded"
                    >
                      <h6>{faq.question}</h6>
                      <span>
                        {toggleFAQ === i && "activeFAQ" ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </span>
                    </button>

                    {/* Content/Ans */}
                    <div
                      className={`text-justify text-neutral/90 duration-500 faq-content ${
                        toggleFAQ === i && "activeFAQ"
                      }`}
                    >
                      <p className="pb-5 p-3">{faq.ans}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-md shadow-lg">
          <div className="border-b mb-4 p-5 text-lg">
            <h6>Didnt find your solution?</h6>
          </div>

          <div className="p-5">
            <div className="bg-gray-50 border-l-2 border-primary pl-4 py-2">
              <h6>Ask your query</h6>
            </div>

            <div className="mt-6">
              {/* Message */}
              <form className="mt-4">
                <div>
                  <select
                    name=""
                    className="w-full outline-none border rounded px-3 py-2 font-semibold text-neutral/80 cursor-pointer"
                  >
                    <option value="">Select query type</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>

                <div className="mt-4">
                  <textarea
                    name=""
                    placeholder="Type your query..."
                    rows="8"
                    className="resize-none border rounded w-full outline-none px-4 py-2"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button className="px-6 py-2 bg-primary text-base-100 rounded text-sm font-semibold">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
