'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdHome } from "react-icons/io";
import { SiGoogletasks } from "react-icons/si";
import { PiNewspaperClippingDuotone } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";

const links = [
  { id: 1, name: "Home", path: "/", icon: <IoMdHome size={20} /> },
  { id: 2, name: "Tasks", path: "/Tasks", icon: <SiGoogletasks size={20} /> },
  { id: 3, name: "Favorite", path: "/Favorite", icon: <PiNewspaperClippingDuotone size={20} /> },
  { id: 4, name: "Settings", path: "/Edits", icon: <IoIosSettings size={20} /> },
];

export default function Sidebar() {
  const pathName = usePathname();

  return (
    <aside className="w-[250px] max-[992px]:w-[100px] transition-all px-2">
      <h2 className="w-full mb-8 text-[35px] text-center p-2.5 rounded-[15px] text-[#333] border-white border-4 max-[992px]:text-[18px]">
        Tasks<span className="colorMain text-2xl max-[992px]:hidden">.Pro</span>
      </h2>
      <nav>
        <ul>
          {links.map((link) => {
            const isActive = pathName === link.path;
            return (
              <li key={link.id} className="mb-1.5">
                <Link
                  href={link.path}
                  className={`p-2.5 flex items-center max-[992px]:justify-center text-center text-[18px] rounded-[8px] transition-all ${
                    isActive ? "bgMain text-white" : "bg-white text-[#333] bgNavMain"
                  }`}
                >
                  <span>{link.icon}</span>
                  <span className="ml-2.5 max-[992px]:hidden">{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
