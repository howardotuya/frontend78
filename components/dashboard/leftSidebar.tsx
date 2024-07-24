"use client";
import React, { useState } from "react";
import Logo from "../general/logo";
import hamburgerMenu from "@/public/svg/dashboard/menu.svg";
import closeMenu from "@/public/svg/dashboard/close.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import dashboardActive from "@/public/svg/dashboard-active.svg";
import dashboardInactive from "@/public/svg/dashboard-inactive.svg";
import settingsActive from "@/public/svg/setting-active.svg";
import settingsInactive from "@/public/svg/settings-inactive.svg";
import logout from "@/public/svg/logout.svg";
import Image from "next/image";
import { routes } from "../routes";
import { useLogoutMutation } from "@/redux/slices/userApiSlice";
import { useDispatch } from "react-redux";
import { clearCredentials } from "@/redux/slices/authSlice";
import { toast } from "react-toastify";

const LeftSidebar = () => {
  const pathname = usePathname();
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);
  const pathIsActive = (path: string): boolean => {
    return pathname === path ? true : false;
  };

  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutHandler = async () => {
    try {
      const response = await logoutApiCall("logging out").unwrap();
      console.log(response);
      toast.success(response.message);

      dispatch(clearCredentials());
      router.replace("/auth/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message || error?.message);
    }
  };

  const sidebarHandler = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <>
      <div className="h-[74px] px-4 flex md:hidden justify-between items-center">
        <Logo />
        <button
          type="button"
          onClick={sidebarHandler}
          className="w-10 h-10 flex justify-center items-center"
        >
          <Image src={hamburgerMenu} alt="Open sidebar" />
        </button>
      </div>

      {sidebarActive && (
        <div className="md:hidden absolute px-4 top-0 left-0 right-0 bg-[#6E4F1E]">
          <div className="h-[74px] flex justify-between items-center">
            <Logo onModal />
            <button
              type="button"
              onClick={sidebarHandler}
              className="w-10 h-10 flex justify-center items-center"
            >
              <Image src={closeMenu} alt="Close sidebar" />
            </button>
          </div>
          <nav className="pt-6 pb-20 border-t border-[#FFFFFF33]">
            <ul className="flex flex-col gap-11 list-disc list-inside font-medium tracking-[-1.28px] text-white">
              <li onClick={sidebarHandler}>
                <Link href={routes.dashboard}>Profile</Link>
              </li>
              <li onClick={sidebarHandler}>
                <Link href={routes.settings}>Settings</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <div className="sticky top-0 hidden md:flex flex-col justify-between">
        <div>
          <div className="pl-6 pt-8">
            <Logo />
          </div>
          <nav className="px-6 mt-10 flex gap-1 flex-col *:h-9 *:flex *:items-center *:gap-2 *:px-2 text-[14px] leading-5 font-medium">
            <Link
              className={` ${
                pathIsActive("/dashboard")
                  ? "bg-[#F0F2F5] rounded-[6px] text-[#101928]"
                  : "text-[#475367]"
              }`}
              href={"/dashboard"}
            >
              {pathIsActive("/dashboard") ? (
                <Image src={dashboardActive} alt="" />
              ) : (
                <Image src={dashboardInactive} alt="" />
              )}
              Dashboard
            </Link>
            <Link
              className={` ${
                pathIsActive("/dashboard/settings")
                  ? "bg-[#F0F2F5] rounded-[6px] text-[#101928]"
                  : "text-[#475367]"
              }`}
              href={"/dashboard/settings"}
            >
              {pathIsActive("/dashboard/settings") ? (
                <Image src={settingsActive} alt="" />
              ) : (
                <Image src={settingsInactive} alt="" />
              )}
              Settings
            </Link>
          </nav>
        </div>
        <button
          type="button"
          onClick={logoutHandler}
          className="hover:underline px-6 pb-8 text-[#D80027] flex gap-2 items-center text-[14px] font-medium"
        >
          <Image src={logout} alt="" />
          Logout
        </button>
      </div>
    </>
  );
};

export default LeftSidebar;
