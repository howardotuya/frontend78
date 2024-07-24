import Link from "next/link";
import React from "react";

function Logo({ onModal = false }: { onModal?: boolean }) {
  return (
    <Link
      className={`${
        onModal ? "text-[#D2C3C3]" : "text-[#444]"
      }  text-[32px] leading-[32px] tracking-[-2.56px] font-medium block`}
      href={"/"}
    >
      wasl
    </Link>
  );
}

export default Logo;
