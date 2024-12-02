import { useState } from "react";
import Setup from "../../components/sections/setup";
import Terms from "../../components/sections/setup/Terms";

const SetupScreens = () => {
  const [activeScreen, setActiveScreen] = useState<string>("index");
  return (
    <div>
      {activeScreen === "index" && <Setup setActiveScreen={setActiveScreen} />}
      {activeScreen === "terms" && <Terms />}
    </div>
  );
};

export default SetupScreens;
