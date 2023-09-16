import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import HomeLayout from "./../Layout/HomeLayout/HomeLayout";
import Freelancers from "../pages/Freelancers/Freelancers";
import Jobs from "../pages/Jobs/Jobs";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/freelancers",
        element: <Freelancers />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
    ],
  },
]);
