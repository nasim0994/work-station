import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Freelancers from "../pages/Freelancers/Freelancers/Freelancers";
import FreelancerDetails from "../pages/Freelancers/FreelancerDetails/FreelancerDetails";
import Jobs from "../pages/Jobs/Jobs/Jobs";
import JobDetails from "../pages/Jobs/JobDetails/JobDetails";
import SubmitProposal from "../pages/Jobs/SubmitProposal/SubmitProposal";
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
import Message from "../pages/dashboard/Message/Message";
import PostAJob from "../pages/dashboard/ManageJobs/PostAJob";
import PostedJobs from "../pages/dashboard/ManageJobs/PostedJobs";
import OngoingJobs from "../pages/dashboard/ManageJobs/OngoingJobs";
import CompletedJobs from "../pages/dashboard/ManageJobs/CompletedJobs";
import CancelledJobs from "../pages/dashboard/ManageJobs/CancelledJobs";
import AboutUs from "./../pages/AboutUs/AboutUs";
import Career from "../pages/Career/Career";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

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
        path: "/freelancers/:userName",
        element: <FreelancerDetails />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:slug",
        element: <JobDetails />,
      },
      {
        path: "/jobs/:id/submit-proposal",
        element: <SubmitProposal />,
      },

      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/Career",
        element: <Career />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      //-------- For freelancer
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
      //-------- For client
      {
        path: "post-job",
        element: <PostAJob />,
      },
      {
        path: "posted-jobs",
        element: <PostedJobs />,
      },
      {
        path: "ongoing-jobs",
        element: <OngoingJobs />,
      },
      {
        path: "completed-jobs",
        element: <CompletedJobs />,
      },
      {
        path: "cancelled-jobs",
        element: <CancelledJobs />,
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
        path: "message",
        element: <Message />,
      },

      {
        path: "/dashboard/setting",
        element: <SettingLayout />,
        children: [
          {
            path: "/dashboard/setting",
          },
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
