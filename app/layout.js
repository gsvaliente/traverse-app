import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import "./globals.css";

import { NavbarHeader } from "@/components/NavbarHeader";
import { NavLinks } from "@/components/NavLinks";
import { UserButtons } from "@/components/UserButtons";
import { Provider } from "@/utils/providers";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Traverse App",
  description: "Your AI assisted Travel Planner, discover what to do in your next trip.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en" data-theme="bumblebee">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="flex justify-center items-center">
            <div className="navbar bg-base-200 rounded-3xl absolute top-5 mt-2 lg:max-w-screen-xl">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <NavLinks />
                  </ul>
                </div>
                <Link href={"/"} className="btn btn-ghost text-xl hover:bg-base-200">
                  <NavbarHeader />
                </Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <NavLinks />
                </ul>
              </div>
              <div className="navbar-end gap-2 hidden sm:flex">
                <UserButtons />
              </div>
            </div>
          </div>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
