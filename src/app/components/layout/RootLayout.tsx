import { Outlet, ScrollRestoration } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "../ui/ScrollToTop";
import { CustomCursor } from "../ui/CustomCursor";

export function RootLayout() {
  return (
    <div className="bg-white min-h-screen text-[#0F0F0F] font-[Poppins]">
      <ScrollRestoration />
      <CustomCursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}