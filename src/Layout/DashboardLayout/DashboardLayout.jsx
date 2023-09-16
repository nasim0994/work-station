import "./DashboardLayout.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Header from "./../../components/Header/Header";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar/DashboardSidebar";

export default function DashboardLayout() {
  const [dashboardSidebar, setDashboardSidebar] = useState(false);
  return (
    <div>
      <Header />
      <div className="flex ">
        <div
          className={`dashboardSidebar ${
            dashboardSidebar ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <DashboardSidebar setDashboardSidebar={setDashboardSidebar} />
          <div className="lg:hidden absolute top-0 -right-8 z-40">
            <button
              onClick={() => setDashboardSidebar(!dashboardSidebar)}
              className="p-2 text-xl bg-primary text-base-100 rounded-full shadow-lg"
            >
              {dashboardSidebar ? <SlArrowLeft /> : <SlArrowRight />}
            </button>
          </div>
        </div>
        <div className="dashboardContent">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
