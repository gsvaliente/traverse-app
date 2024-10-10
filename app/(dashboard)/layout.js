import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Traverse App Dashboard",
  description: "The main dashboard with all of the functionality of the app",
};

export default function DashboardLayout({ children }) {
  return (
    // <>
    //   <div className="flex flex-col items-center justify-center w-full min-w-screen bg-base-100 min-h-fit pt-16">
    //     {children}
    //   </div>
    // </>
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col items-center justify-center w-full bg-base-100 pt-16">{children}</div>
        <Footer />
      </div>
    </>
  );
}
