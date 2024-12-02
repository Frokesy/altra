import Footer from "../../components/defaults/Footer";

const CreatePassword = () => {
  return (
    <div className="w-[90vw] mx-auto pt-10">
      <img src="/assets/logo.png" alt="logo" className="w-[63px] h-[63px]" />
      <div className="w-[100%] min-h-[80vh] flex flex-col items-center relative justify-center">
        <div className="w-[35%] mt-10">
          <div className="space-y-3">
            <h2 className="text-[48px] font-semibold">Create password</h2>
            <p className="text-[18px]">Input your new password</p>

            <div className="form space-y-6">
              <div className="text-[14px] space-y-2 mt-10">
                <label
                  htmlFor="newpassword"
                  className="text-[#808080] font-semibold"
                >
                  New Password
                </label>
                <input
                  type="text"
                  placeholder="Enter new password"
                  className="border border-[#ccc] p-3 outline-none w-[100%] rounded-lg"
                />
              </div>
              <div className="text-[14px] space-y-2 mt-10">
                <label
                  htmlFor="cpassword"
                  className="text-[#808080] font-semibold"
                >
                  Confirm Password
                </label>
                <input
                  type="text"
                  placeholder="Confirm new password"
                  className="border border-[#ccc] p-3 outline-none w-[100%] rounded-lg"
                />
              </div>
              <button className="bg-[#039855] w-[100%] font-semibold py-3 text-[#fff]">
                Create new password
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CreatePassword;
