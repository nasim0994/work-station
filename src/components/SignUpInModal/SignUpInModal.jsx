import CreateAccount from "./CreateAccount";
import LoginForm from "./LoginForm";

export default function SignUpInModal({ formToggle, setFormToggle }) {
  return (
    <>
      <div onClick={() => setFormToggle("")} className="modal_overlay"></div>
      <div className="modal w-[450px] h-auto">
        <div className="px-6 py-5">
          {formToggle === "login" && <LoginForm />}

          {formToggle === "signup" && <CreateAccount />}

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
}
