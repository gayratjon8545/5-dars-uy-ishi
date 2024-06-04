import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout

import MainLayout from "./layout/MainLayout";

// pages

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/error",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
