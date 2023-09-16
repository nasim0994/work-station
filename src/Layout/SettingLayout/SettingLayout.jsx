import { Outlet } from "react-router-dom";
import SettingSidebar from "./../../components/DashboardComponents/DashboardSidebar/SettingSidebar/SettingSidebar";

export default function SettingLayout() {
  return (
    <div className="my-5 md:flex bg-base-100 shadow-lg rounded-md min-h-[80vh]">
      <div className="md:w-[400px] border-r bg-gray-50">
        <SettingSidebar />
      </div>
      <div className="w-full p-4 mt-6 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
}
