export default function EmailNotification() {
  return (
    <div>
      <h6 className="bg-gray-50 p-2 border-l-2 border-primary font-medium">
        Email Notification
      </h6>

      <div className="p-4">
        <p className="text-[15px] text-neutral/80">
          All the emails will be sent to the below email address
        </p>

        <form className="mt-4 xl:w-1/2">
          <input
            type="text"
            className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4 text-neutral/70"
            placeholder="Change Email"
            defaultValue="nasimuddin0994@gmail.com"
          />

          <button className="primary_bg_gradient px-4 py-2">
            Change Email
          </button>
        </form>
      </div>
    </div>
  );
}
