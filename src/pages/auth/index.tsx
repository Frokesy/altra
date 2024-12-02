import { useState } from "react";
import Footer from "../../components/defaults/Footer";
import Login from "../../components/sections/auth/Login";
import Signup from "../../components/sections/auth/Signup";

const Auth = () => {
  const [activeScreen, setActiveScreen] = useState<string>("signup");
  return (
    <div className="w-[90vw] mx-auto pt-10">
      <img src="/assets/logo.png" alt="logo" className="w-[63px] h-[63px]" />
      <div className="w-[100%] min-h-[80vh] flex flex-col items-center relative justify-center">
        <div className="flex justify-between min-w-[35%]">
          <button
            onClick={() => setActiveScreen("signup")}
            className={`${
              activeScreen === "signup" && "border-b-2 border-[#333]"
            } w-[50%] pb-3`}
          >
            Sign up
          </button>
          <button
            onClick={() => setActiveScreen("login")}
            className={`${
              activeScreen === "login" && "border-b-2 border-[#333]"
            } w-[50%] pb-3`}
          >
            Login
          </button>
        </div>
        {activeScreen === "signup" && <Signup />}
        {activeScreen === "login" && <Login />}
        <Footer />
      </div>
    </div>
  );
};

export default Auth;
