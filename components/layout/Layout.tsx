import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer/>
    </>
  );
};
export default Layout;
