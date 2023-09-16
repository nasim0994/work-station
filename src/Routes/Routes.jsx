import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Freelancers from "../pages/Freelancers/Freelancers";
import Jobs from "../pages/Jobs/Jobs";
import Blogs from "../pages/Blogs/Blogs";
import Dashboard from "../pages/dashboard/Dashboard/Dashboard";
import MainLayout from "../Layout/MainLayout/MainLayout";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
