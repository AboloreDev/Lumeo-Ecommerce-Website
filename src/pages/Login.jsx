import { useContext } from "react";
import { StoreContext } from "../context/ShopContext";
import SignUp from "../components/SignUp";
import UserLogIn from "../components/UserLogIn";

const Login = () => {
  const { currentState } = useContext(StoreContext);

  function onSubmitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="mt-20" onSubmit={onSubmitHandler}>
      <div className="uppercase text-center font-bold text-3xl ">
        {currentState}
      </div>

      <form className="mx-auto flex justify-center items-center flex-col mt-10 w-[90%] gap-4 px-6 py-8 ">
        {currentState === "login" ? <UserLogIn /> : <SignUp />}
      </form>
      <button className="border-2 text-xl bg-black hover:bg-gray-500 text-white px-4 py-2 flex justify-center items-center mx-auto text-center max-w-60 w-full">
        {currentState === "login" ? "Sign In" : "Sign Up"}
      </button>
    </div>
  );
};

export default Login;
