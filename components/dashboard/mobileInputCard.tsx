import React from "react";
import Edit from "./edit";
import { routes } from "../routes";
import Link from "next/link";

type mobileInputCardProps = {
  title: string;
  subtitle: string;
  name: string;
};

const MobileInputCard = ({ title, subtitle, name }: mobileInputCardProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 bg-white md:bg-transparent border border-[#F0F2F5] md:border-0 rounded-[12px] p-4 md:p-0">
      <div>
        <h6 className="text-[14px] font-medium leading-5">{title}</h6>
        <p className="mt-1 text-[12px] leading-4 text-[#525866]">{subtitle}</p>
      </div>

      <div className="flex flex-col gap-2 bg-[#F9FAFB] border border-[#F0F2F5] md:bg-transparent md:border-0 p-4 md:p-0 rounded-[8px]">
        <h6 className="text-[14px] leading-5 font-medium">{name}</h6>
        <span className="hidden md:block">
          <Edit href={routes.settings} />
        </span>
        <Link
          className="md:hidden text-[#1D2739] text-[14px] font-medium leading-[148%] underline"
          href={routes.settings}
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default MobileInputCard;
