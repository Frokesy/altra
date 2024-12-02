import { GoogleIcon } from "../../svgs/Icons";

const Signup = () => {
  return (
    <div className="w-[35%] mt-[20vh]">
      <div className="space-y-3">
        <h2 className="text-[48px] font-semibold">Sign Up</h2>
        <p className="text-[18px]">
          Create an account with to start using our product
        </p>

        <div className="form space-y-6">
          <div className="text-[14px] space-y-2 mt-10">
            <label htmlFor="name" className="text-[#808080] font-semibold">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter business name"
              className="border border-[#ccc] p-3 outline-none w-[100%] rounded-lg"
            />
          </div>
          <div className="text-[14px] space-y-2 mt-10">
            <label htmlFor="email" className="text-[#808080] font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="border border-[#ccc] p-3 outline-none w-[100%] rounded-lg"
            />
          </div>
          <div className="text-[14px] space-y-2 mt-10">
            <label htmlFor="password" className="text-[#808080] font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="border border-[#ccc] p-3 outline-none w-[100%] rounded-lg"
            />
          </div>
          <div className="text-[14px] space-y-2 mt-10">
            <label htmlFor="cpassword" className="text-[#808080] font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="border border-[#ccc] p-3 outline-none w-[100%] rounded-lg"
            />
          </div>
          <button className="bg-[#039855] w-[100%] font-semibold py-3 text-[#fff]">
            Signup
          </button>
          <button className="border border-[#ccc] w-[100%] flex items-center justify-center text-[#808080] space-x-3 font-semibold py-3">
            <GoogleIcon />
            <p>Sign Up wth Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
