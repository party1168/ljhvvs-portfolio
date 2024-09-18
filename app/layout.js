import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import { ToastContainer } from "react-toastify";
import "./css/card.scss"
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal Portfolio Website",
  description: "此為呂駿宏的個人頁面，我畢業於國立台北護理健康大學資訊管理系，我擅長且熱愛程式設計，正在尋找實習的機會，若你對我的作品有興趣，可以從網頁中的資訊聯繫我。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Tw">
      <body className={inter.className}>
        <ToastContainer />
        <main className=" min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
