import Account from "./icons/Account"
import Heart from "./icons/Heart"
import Home from "./icons/Home"
import Messages from "./icons/Messages"
import PrivIcon from "./icons/PrivIcon"
import SearchBar from "./SearchBar"

export default function Header() {

  return (
    <header className="header flex px-5 justify-between items-center border-b border-b-slate-600">
       <div className="flex gap-4 items-center w-full " >
        <PrivIcon/>
          <SearchBar/>
       </div>
        <nav className="hidden md:flex gap-10">
          <Home/>
          <Messages/>
          <Heart/>
          <Account/>
        </nav>
    </header>
  )
}
