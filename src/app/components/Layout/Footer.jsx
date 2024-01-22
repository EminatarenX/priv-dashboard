import Messages from "./header/icons/Messages"
import Account from "./header/icons/Account"
import Heart from "./header/icons/Heart"
import Home from "./header/icons/Home"

export default function Footer() {
  return (
    <footer className="lg:hidden flex justify-between px-10 footer">
         <Home size={25}/>
          <Messages size={25}/>
          <Heart size={25}/>
          <Account size={25}/>
    </footer>
  )
}
