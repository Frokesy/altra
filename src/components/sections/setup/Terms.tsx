import { NavLink } from "react-router-dom";
import Footer from "../../defaults/Footer";

const Terms = () => {
  return (
    <div className="w-[90vw] mx-auto pt-10">
      <img src="/assets/logo.png" alt="logo" className="w-[63px] h-[63px]" />

      <div className="mt-6">
        <h2 className="text-[48px] font-semibold">Terms and condition</h2>
        <p className="text-[18px]">
          Before you proceed, you must agree to our terms of use and conditions.
        </p>
      </div>
      <div className="border border-[#ccc] w-[100%] mt-6 rounded-lg h-[70vh]"></div>
      <div className="flex justify-end space-x-10 mt-6">
        <button className="border border-[#ccc] py-2 px-4">Cancel</button>
        <NavLink to="/auth">
          <button className="bg-[#039855] py-2 px-4 text-[#fff]">
            Agree and continue
          </button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
