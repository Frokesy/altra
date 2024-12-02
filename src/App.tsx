import SetupScreens from "./pages/setup";
import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/auth";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <SetupScreens /> },
    { path: "/auth", element: <Auth /> },
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
