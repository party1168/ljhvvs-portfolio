import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import { LangProvider } from "./components/lang-provider";
import { ToastContainer } from "react-toastify";
import "./css/card.scss"
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jeremy (Chun-Hung) Lu 呂駿宏 | Software Engineer",
  description: "Software engineer in Taipei. Built healthcare systems with .NET, Angular and PostgreSQL, and on-chain apps at two ETHGlobal hackathons.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LangProvider>
        <ToastContainer />
        <main className=" min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
