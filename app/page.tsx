import Image from "next/image";
import { Metadata } from "next";
import { routes } from "@/components/routes";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing page - wasl",
};

export default function Home() {
  return (
    <div className="bg-[#F1EDE1] w-full h-screen flex justify-center items-center">
      <div className="">
        <Link
          href={"/auth/login"}
          className="mt-3 hover:scale-[1.03] flex justify-center items-center w-full bg-[#3E301C] px-4 text-white font-medium rounded-[10px] h-11"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
