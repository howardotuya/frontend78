import LeftSidebar from "@/components/dashboard/leftSidebar";
import RightSidebar from "@/components/dashboard/rightSidebar";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - wasl",
};

function ChildLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative grid md:grid-cols-[256px_auto] h-screen">
        <LeftSidebar />
        <RightSidebar>{children}</RightSidebar>
      </div>
    </>
  );
}

export default ChildLayout;
