import { Dispatch, FC, SetStateAction } from "react";
import Footer from "../../defaults/Footer";

interface SetupProps {
  setActiveScreen: Dispatch<SetStateAction<string>>;
}
const Setup: FC<SetupProps> = ({ setActiveScreen }) => {
  return (
    <>
      <div className="w-[100%] min-h-[80vh] flex items-center relative justify-center">
        <img
          src="/assets/logo.png"
          alt="logo"
          className="absolute top-10 left-20 w-[63px] h-[63px]"
        />
        <div className="space-y-3">
          <h2 className="text-[48px] font-semibold">Choose a language</h2>
          <p className="text-[18px]">Select your preferred language</p>
          <select
            name="lang"
            id="lang"
            className="border border-[#ccc] outline-none rounded-lg w-[100%] px-3 py-2"
          >
            <option value="eng-Us">English - US</option>
            <option value="eng-Uk">English - Uk</option>
            <option value="yoruba">Yoruba</option>
            <option value="french">French</option>
          </select>
          <div className="pt-4">
            <button
              onClick={() => setActiveScreen("terms")}
              className="bg-[#039855] py-3 font-semibold rounded-lg w-[100%] text-[#fff]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Setup;
