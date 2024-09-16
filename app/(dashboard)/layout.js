import { Sidebar } from "@/components/Sidebar";
import { FaBars } from "react-icons/fa6";

export const metadata = {
  title: "Traverse App Dashboard",
  description: "The main dashboard with all of the functionality of the app",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden fixed top-6 right-6">
          <FaBars className="w-8 h-8 text-primary" />
        </label>
        <div className="bg-base-200 px-8 py-12 min-h-screen">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  );
}
