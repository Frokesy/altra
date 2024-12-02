import Footer from "../../components/defaults/Footer";
import Signup from "../../components/sections/auth/Signup";

const Auth = () => {
  return (
    <div className="w-[90vw] mx-auto pt-10">
      <img src="/assets/logo.png" alt="logo" className="w-[63px] h-[63px]" />
      <div className="w-[100%] h-[80vh] overflow-y-auto flex flex-col items-center relative justify-center">
        <div className="flex justify-between min-w-[35%]">
            <button className="border-b-2 border-[#333] w-[50%] pb-3">Sign up</button>
            <button className="w-[50%] pb-3">Login</button>
        </div>
        <Signup />
        <Footer />
      </div>
    </div>
  );
};

export default Auth;
