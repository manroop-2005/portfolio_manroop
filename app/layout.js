import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import Cursor from "./components/Cursor";
import SideNavbar from "./components/SideNavbar";
import { personalData } from "@/utils/data/personal-data";

export const metadata = {
  title: "MANROOP SINGH",
  description:
    "This is the portfolio of MANROOP SINGH. A full stack developer and a self taught developer, love to learn new things and  always open to collaborating with others.  A quick learner and  always looking for new challenges.",
  image:`${personalData.profile}`
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <SideNavbar />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white cursor-none">
          <Cursor />
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
