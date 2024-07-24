"use client";
import MobileInputCard from "@/components/dashboard/mobileInputCard";
import MultipartUploads from "@/components/dashboard/multipartUploads";
import WithLocalStorage from "@/hook/withLocalStorage";
import React from "react";
import { useSelector } from "react-redux";

function Page() {
  const { userInfo } = useSelector((state: any) => state.auth);

  return (
    <>
      <div>
        <h1 className="text-[20px] text-[#1D2739] font-medium tracking-[-0.8px]">
          Hey {userInfo?.name ? userInfo?.name : "John Doe"} 👋🏾,
        </h1>
        <p className="mt-2 text-[12px] text-[#525866] leading-5">
          View your summary for all your business Information
        </p>
      </div>

      <div className="mt-8 md:mt-14 grid gap-6 md:gap-14">
        <MobileInputCard
          title="Business name"
          subtitle="Unique username is recommended."
          name={userInfo?.name ? userInfo?.name : "John Doe"}
        />
        <MobileInputCard
          title="Email Address"
          subtitle="Business email address recommended."
          name={userInfo?.email ? userInfo?.email : "example@gmail.com"}
        />
        <MobileInputCard
          title="Business License ID"
          subtitle="Unique Licence is recommended."
          name={userInfo?.businessLicense ? userInfo?.businessLicense : "none"}
        />
        <MobileInputCard
          title="Tax ID"
          subtitle="Tax ID recommended."
          name={userInfo?.TaxId ? userInfo?.TaxId : "none"}
        />
        {/* <MultipartUploads /> */}
      </div>
    </>
  );
}

export default WithLocalStorage(Page);
