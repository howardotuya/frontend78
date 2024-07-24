import Link from "next/link";
import React from "react";
import Edit from "./edit";
import UploadAsset from "./upload";

const RightSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#F1EDE1] overflow-y-scroll px-4 md:px-10 py-8 md:py-20">
      <div className="w-full max-w-[840px]">{children}</div>
    </div>
  );
};

export default RightSidebar;
