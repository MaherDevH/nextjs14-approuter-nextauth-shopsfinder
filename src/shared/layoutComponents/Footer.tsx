import React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export const Footer = (): React.ReactNode => {
  return (
    <div className="flex grow-0 justify-around items-center h-[50px] shadow-with-border bg-[#1976d2]">
      <div>
        <Link href={"/"}>
          <span className="text-black">Shops Finder</span>
        </Link>
      </div>
      <div className="flex place-items-center gap-1">
        <MdEmail className="[&>path]:text-slate-800"/>

        <a href="mailto:alaa85a@gmail.com">
          <span className="text-black">alaa85a@gmail.com</span>
        </a>
      </div>
    </div>
  );
};
