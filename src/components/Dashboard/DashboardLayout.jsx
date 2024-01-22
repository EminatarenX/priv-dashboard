"use client";
import Account from "../Layout/header/icons/Account";
import Home from "../Layout/header/icons/Home";
import Logout from "../Layout/header/icons/Logout";
import { useEffect, useState } from "react";
import Aside from "./nav/Aside";
import Trending from "../Layout/header/icons/Trending";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Fans from "../Layout/header/icons/Fans";
export default function DashboardLayout({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    setShowMenu(false)
  },[])

  return (
    <>
      <Aside showMenu={showMenu} toggleMenu={toggleMenu} />

      <div className="relative h-screen flex flex-col lg:flex-row bg-[#191827] ">
        <button
          className="text-white lg:hidden sticky p-2 text-2xl z-10"
          onClick={toggleMenu}
        >
          &#9868;
        </button>
        <nav className="hidden lg:w-[150px] lg:flex flex-col justify-center items-center gap-20">
          <Link href={'/'}
            className={`flex flex-col items-center py-2 rounded ${
              pathname === "/" && "bg-neutral-700"
            } hover:bg-neutral-700 bg-opacity-20 hover:bg-opacity-20 w-[100px]`}
          >
            <Home size={25} />
            <p className="text-white mt-2 text-sm">Feed</p>
          </Link>
          <Link
            href={"/dashboard"}
            className={`flex flex-col items-center py-2 rounded ${
              pathname === "/dashboard" && "bg-neutral-700"
            } hover:bg-neutral-700 bg-opacity-20 hover:bg-opacity-20 w-[100px]`}
          >
            <Trending size={10} />
            <p className="text-white text-sm">Dashboard</p>
          </Link>
          <Link href={'/dashboard/fans'}
            className={`flex flex-col items-center py-2 rounded ${
              pathname === "/dashboard/fans" && "bg-neutral-700"
            } hover:bg-neutral-700 bg-opacity-20 hover:bg-opacity-20 w-[100px]`}
          >
            <Fans size={10} />
            <p className="text-white mt-2 text-sm">Fans</p>
          </Link>
          <div
            className={`flex flex-col items-center py-2 rounded hover:bg-neutral-700 hover:bg-opacity-20 w-[100px]`}
          >
            <Logout size={25} />
            <p className="text-white mt-2 text-sm">Logout</p>
          </div>
        </nav>
        <main className="w-full py-5 lg:py-10 px-2 lg:pr-20 overflow-y-auto scrollbar-hide ">
          {children}
        </main>
        <aside className="hidden lg:w-1/3"></aside>
      </div>
    </>
  );
}
