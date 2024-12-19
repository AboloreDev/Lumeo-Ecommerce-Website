import { useContext } from "react";
import { StoreContext } from "../context/ShopContext";

const UserLogIn = () => {
  const { setCurrentState } = useContext(StoreContext);
  return (
    <form className="flex-col flex px-4 space-y-4 font-bold">
      <div className="flex justify-between gap-6 items-center border-2 border-black">
        <input
          className="px-4 py-2 border border-gray-500 w-full"
          type="text"
          placeholder="username"
          required
        />
      </div>
      <div className="flex justify-between gap-6 items-center border-2 border-black">
        <input
          className="px-4 py-2 border border-gray-500 w-full"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="flex justify-between  gap-10 text-sm">
        <button className="cursor-pointer">Forgot your password?</button>
        <button onClick={() => setCurrentState("sign-up")}>
          Create an Account
        </button>
      </div>
    </form>
  );
};

export default UserLogIn;