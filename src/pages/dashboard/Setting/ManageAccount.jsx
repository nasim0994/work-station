export default function ManageAccount() {
  return (
    <div>
      <div className="mb-5">
        <h6 className="bg-gray-50 p-2 border-l-2 border-primary font-medium">
          Deactivate Account
        </h6>

        <div className="p-4">
          <p>
            Deactivating your account will cause your profile and listings to
            disappear, and you will not receive any notifications from us. This
            can be undone later.
          </p>

          <div className="py-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-[35px] h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
              <span className="ml-3 text-sm font-medium text-neutral/90">
                Disable my account temporarily
              </span>
            </label>
          </div>

          <button type="submit" className="primary-btn">
            <h6>Deactivate Account</h6>
          </button>
        </div>
      </div>

      <div>
        <h6 className="bg-gray-50 p-2 border-l-2 border-primary font-medium">
          Delete Account
        </h6>

        <form action="" className="p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="password"
              className="border rounded px-3 py-2 outline-none focus:border-primary"
              placeholder="Password"
            />
            <input
              type="password"
              className="border rounded px-3 py-2 outline-none focus:border-primary"
              placeholder="Retype Password"
            />
          </div>

          <div className="mb-4">
            <select
              name=""
              className="w-full border rounded px-3 py-2 outline-none focus:border-primary cursor-pointer text-neutral/70 font-medium"
            >
              <option value="">Select query type</option>
              <option value="">Not Satisfied</option>
              <option value="">Support is not good</option>
              <option value="">Others</option>
            </select>
          </div>

          <div className="mb-4">
            <textarea
              name=""
              className="w-full border rounded px-3 py-2 outline-none focus:border-primary resize-none"
              rows="5"
              placeholder="Type Note..."
            ></textarea>
          </div>

          <button type="submit" className="primary_bg_gradient px-4 py-2">
            <h6>Delete Account</h6>
          </button>
        </form>
      </div>
    </div>
  );
}
