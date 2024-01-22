import Home from "../../Layout/header/icons/Home"
import Fans from "../../Layout/header/icons/Fans"
import Logout from "../../Layout/header/icons/Logout"
import Trending from "../../Layout/header/icons/Trending"
import Link from "next/link"
export default function Aside({showMenu}) {
  return (
    <nav className={`fixed z-10 top-0 lg:hidden w-full h-screen bg-[#191827] flex flex-col justify-center items-center gap-20 ${showMenu ? "slide-in-left" : "slide-in-right"}`}>
             <Link href={'/'} className="flex flex-col items-center">

            <Home size={25}/>
            <p className="text-white mt-2">Feed</p>
             </Link>
            <Link href={'/dashboard'} className="flex flex-col items-center">
            <Trending size={10}/>
            <p className="text-white">Dashboard</p>
            </Link>
            <Link href={'/dashboard/fans'} className="flex flex-col items-center">
            <Fans size={10}/>
            <p className="text-white mt-2">Fans</p>
            </Link>
            <div className="flex flex-col items-center">
            <Logout size={25}/>
            <p className="text-white mt-2">Logout</p>
            </div>
    </nav>
  )
}
