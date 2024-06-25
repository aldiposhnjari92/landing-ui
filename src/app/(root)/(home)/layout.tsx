import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="flex flex-col min-w-full h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="container">{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default RootLayout;
