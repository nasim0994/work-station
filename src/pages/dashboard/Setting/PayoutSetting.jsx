import { useState } from "react";

export default function PayoutSetting() {
  const [bankFormToggle, setBankFormToggle] = useState(false);
  return (
    <div>
      <h6 className="bg-gray-50 p-2 border-l-2 border-primary font-medium">
        Payouts Settings
      </h6>

      <div className="p-4">
        <p className="text-neutral/80 text-[15px]">
          All the earning will be sent to below selected payout method
        </p>

        <div className="mt-4">
          <button
            onClick={() => setBankFormToggle(!bankFormToggle)}
            className="border py-6 rounded px-10"
          >
            <img src="" alt="" className="" />
          </button>

          {bankFormToggle && (
            <form className="w-2/3 mt-4">
              <p className="text-neutral/80 text-[15px] mb-4">
                Please add all required settings for the bank transfer.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
                  placeholder="Bank Account Name"
                />
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
                  placeholder="Bank Account Number"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
                  placeholder="Bank Name"
                />
              </div>

              <button className="primary_bg_gradient px-4 py-2" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
