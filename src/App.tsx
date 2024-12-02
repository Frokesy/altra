import SetupScreens from "./pages/setup";
import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/auth";
import ForgotPassword from "./pages/forgot-password";
import CreatePassword from "./pages/create-password";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <SetupScreens /> },
    { path: "/auth", element: <Auth /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/create-password", element: <CreatePassword /> },
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
