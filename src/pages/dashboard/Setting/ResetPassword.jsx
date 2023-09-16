export default function ResetPassword() {
  return (
    <div>
      <h6 className="bg-gray-50 p-2 border-l-2 border-primary font-medium">
        Reset Password
      </h6>

      <form className="mt-4 xl:w-1/2">
        <input
          type="text"
          className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
          placeholder="Current Password"
        />
        <input
          type="text"
          className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
          placeholder="New Password"
        />
        <input
          type="text"
          className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
          placeholder="Re Password"
        />

        <button className="primary-btn">Change Password</button>
      </form>
    </div>
  );
}
