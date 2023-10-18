import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillUnlock, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLoginMutation } from "../../Redux/auth/authApi";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { loggedUser } = useSelector((state) => state.auth);
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();

  const submitForm = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const loginInfo = {
      email,
      password,
    };

    login(loginInfo);

    if (isSuccess || loggedUser.status) {
      e.target.reset();
      setShowPassword(false);
    }
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

          {isError && (
            <p className="text-sm text-red-500">{error?.data?.message}</p>
          )}

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
              disabled={isLoading && true}
            >
              {isLoading ? "Loading..." : "Log In"}
            </button>
          </div>
        </div>
      </form>

      <div className="text-sm text-neutral-content mt-4">
        <p>This is a demo website,</p>
        <p>
          so I am providing user email and password so that you can explore the
          dashboard.
        </p>
        <p>
          <strong>Freelancer:</strong> nasim1@gmail.com - 112233
        </p>
        <p>
          <strong>Client:</strong> mark@gmail.com - 112233
        </p>
      </div>
    </div>
  );
}
