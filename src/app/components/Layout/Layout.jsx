import Footer from "./Footer"
import Header from "./header/Header"
import './layout.css'

export default function Layout({children}) {
  return (
    <div className="layout">
        <Header/>
        <main className="main appear">
            {children}
        </main>
        <Footer/>

    </div>
  )
}
