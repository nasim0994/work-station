import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Freelancers from "../pages/Freelancers/Freelancers";
import Jobs from "../pages/Jobs/Jobs";
import Blogs from "../pages/Blogs/Blogs";
import Dashboard from "../pages/dashboard/Dashboard/Dashboard";
import MainLayout from "../Layout/MainLayout/MainLayout";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Profile from "../pages/dashboard/Profile/Profile";
import Support from "../pages/dashboard/Support/Support";
import Disputes from "../pages/dashboard/Disputes/Disputes";
import SaveItems from "../pages/dashboard/SaveItems/SaveItems";
import AddPortfolio from "./../pages/dashboard/ManagePortfolios/AddPortfolio/AddPortfolio";
import PortfolioList from "../pages/dashboard/ManagePortfolios/PortfolioList/PortfolioList";
import Proposals from "../pages/dashboard/ManageProjects/Proposals";
import OngoingProjects from "../pages/dashboard/ManageProjects/OngoingProjects";
import CompletedProjects from "../pages/dashboard/ManageProjects/CompletedProjects";
import CancelledProjects from "../pages/dashboard/ManageProjects/CancelledProjects";
import SettingLayout from "./../Layout/SettingLayout/SettingLayout";
import EditProfile from "./../pages/dashboard/Setting/EditProfile";
import BillingAddress from "../pages/dashboard/Setting/BillingAddress";
import EmailNotification from "./../pages/dashboard/Setting/EmailNotification";
import ResetPassword from "../pages/dashboard/Setting/ResetPassword";
import PayoutSetting from "./../pages/dashboard/Setting/PayoutSetting";
import ManageAccount from "./../pages/dashboard/Setting/ManageAccount";

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
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "add-portfolio",
        element: <AddPortfolio />,
      },
      {
        path: "portfolio-list",
        element: <PortfolioList />,
      },
      {
        path: "proposals",
        element: <Proposals />,
      },
      {
        path: "ongoing-projects",
        element: <OngoingProjects />,
      },
      {
        path: "completed-projects",
        element: <CompletedProjects />,
      },
      {
        path: "cancelled-projects",
        element: <CancelledProjects />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "disputes",
        element: <Disputes />,
      },
      {
        path: "save-items",
        element: <SaveItems />,
      },
      {
        path: "/dashboard/setting",
        element: <SettingLayout />,
        children: [
          {
            path: "edit-profile",
            element: <EditProfile />,
          },
          {
            path: "billing-address",
            element: <BillingAddress />,
          },
          {
            path: "email-notification",
            element: <EmailNotification />,
          },
          {
            path: "reset-password",
            element: <ResetPassword />,
          },
          {
            path: "payout",
            element: <PayoutSetting />,
          },
          {
            path: "manage-account",
            element: <ManageAccount />,
          },
        ],
      },
    ],
  },
]);
