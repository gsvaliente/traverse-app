export const metadata = {
  title: "Traverse App Dashboard",
  description: "The main dashboard with all of the functionality of the app",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex items-center justify-center w-full min-w-screen bg-base-100 min-h-fit pt-16">{children}</div>
  );
}
