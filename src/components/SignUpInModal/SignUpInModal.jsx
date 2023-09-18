import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const SignUpInModal = ({ formToggle, setFormToggle }) => {
  return (
    <>
      <div onClick={() => setFormToggle("")} className="modal_overlay"></div>
      <div className="modal w-[450px] h-auto">
        <div className="px-6 py-5">
          {formToggle === "login" && <LoginForm />}
          {formToggle === "signup" && <SignUpForm />}

          <div className="border-t border-neutral/20 mt-6 pt-4 text-center">
            <p className={`${formToggle === "signup" && "hidden"} text-sm`}>
              Dont have an account?
              <button
                onClick={() => setFormToggle("signup")}
                className="text-primary  pl-2 hover:underline"
              >
                Signup
              </button>
            </p>

            <p className={`${formToggle === "login" && "hidden"} text-sm`}>
              Already have an account?
              <button
                onClick={() => setFormToggle("login")}
                className="text-primary  pl-2 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpInModal;
