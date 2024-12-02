import SetupScreens from "./pages/setup";
import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <SetupScreens /> },
  ]);
  return (
    <>
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />;
      </AnimatePresence>
    </>
  );
};

export default App;
