import "./DashboardLayout.css";
import { Outlet } from "react-router-dom";
import Header from "./../../components/Header/Header";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar/DashboardSidebar";

export default function DashboardLayout() {
  return (
    <div>
      <Header />

      <div className="flex">
        <DashboardSidebar />

        <main className="dashboardContent">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
