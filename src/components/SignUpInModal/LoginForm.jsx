import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillUnlock, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setShowPassword(false);
  };

  return (
    <div>
      <img src="/images/logo/logo.png" alt="" className="w-14 mx-auto" />
      <h6 className="text-xl font-medium mt-2 text-center">Welcome Back</h6>

      <form onSubmit={submitForm}>
        <div className="mt-10 text-neutral">
          <div className="mb-6">
            <div className="relative">
              <span className="absolute bottom-2 text-neutral/80">
                <MdEmail />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <span className="absolute bottom-2 text-neutral/80">
                <AiFillUnlock className="text-lg" />
              </span>

              <input
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                required
              />

              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 bottom-2 cursor-pointer"
              >
                <span className={`${showPassword ? "block" : "hidden"}`}>
                  <AiFillEye />
                </span>
                <span className={`${showPassword ? "hidden" : "block"}`}>
                  <AiFillEyeInvisible />
                </span>
              </div>
            </div>
          </div>

          <div className="mb-5 flex justify-end">
            <Link
              href="/forgot-password"
              className="text-[13px] text-neutral/70 underline hover:text-primary duration-300"
            >
              Forgot Password?
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 font-semibold primary_bg_gradient"
              disabled={loading && true}
            >
              {loading ? "Loading..." : "Log In"}
            </button>
          </div>
        </div>
      </form>

      <div>
        <div className="text-neutral/50 text-center my-3">OR</div>

        <button className="w-full py-2 font-medium text-base-100 bg-blue-600 rounded hover:bg-opacity-90 duration-300 flex justify-center gap-4 items-center">
          <BsFacebook className="text-xl" /> Continue with Facebook
        </button>

        <button className="mt-4 w-full py-2 font-medium text-neutral border border-neutral/50 rounded hover:bg-opacity-90 duration-300 flex gap-4 justify-center items-center">
          <FcGoogle className="text-xl" /> Continue with Google
        </button>
      </div>
    </div>
  );
}
