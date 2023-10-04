import { Outlet } from "react-router-dom";
import DashHeader from "../components/DashHeader";

function DashboardLayout() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 h-full bg-gray-200 w-1/4 flex-shrink-0">
        <DashHeader />
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-1/4 bg-white p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
