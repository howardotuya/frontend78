import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth - wasl",
};

function ChildLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default ChildLayout;
