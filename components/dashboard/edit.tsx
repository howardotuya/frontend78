import Link from "next/link";
import React from "react";

function Edit({ href }: { href: string }) {
  return (
    <Link
      className="flex gap-[2px] hover:underline text-[#6F4F1E] font-medium text-[14px] leading-5"
      href={href}
    >
      Edit
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M10.7958 9.99932L7.08334 6.28682L8.14384 5.22632L12.9168 9.99932L8.14384 14.7723L7.08334 13.7118L10.7958 9.99932Z"
          fill="#6F4F1E"
        />
      </svg>
    </Link>
  );
}

export default Edit;
