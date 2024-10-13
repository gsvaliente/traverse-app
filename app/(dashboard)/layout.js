import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Traverse App",
  description: "Here you can ask your AI assisted tour guide to create a new tour for you!",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col items-center justify-center w-full bg-base-100 pt-16">{children}</div>
        <Footer />
      </div>
    </>
  );
}
