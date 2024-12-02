import Footer from "../../components/defaults/Footer";

const ForgotPassword = () => {
  return (
    <div className="w-[90vw] mx-auto pt-10">
      <img src="/assets/logo.png" alt="logo" className="w-[63px] h-[63px]" />
      <div className="w-[100%] min-h-[80vh] flex flex-col items-center relative justify-center">
        <div className="w-[35%] mt-10">
          <div className="space-y-3">
            <h2 className="text-[48px] font-semibold">Forgot password</h2>
            <p className="text-[18px]">We have sent a code to your email (johndoe@gmail.com) to reset your password</p>

            <div className="form space-y-6">
              <div className="text-[14px] space-y-2 mt-10">
                <label htmlFor="code" className="text-[#808080] font-semibold">
                  Code
                </label>
                <input
                  type="text"
                  placeholder="Enter code"
                  className="border border-[#ccc] p-3 outline-none w-[100%] rounded-lg"
                />
              </div>
              <button className="bg-[#039855] w-[100%] font-semibold py-3 text-[#fff]">
                Confirm code
              </button>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </div>
  );
};

export default ForgotPassword;
