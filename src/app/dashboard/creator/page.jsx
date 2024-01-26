import DashboardLayout from "@/components/Dashboard/DashboardLayout"
import ContainerGradient from "./ContainerGradient"
import Product from "./Product"
import Stats from "./Stats"
import Plus from "@/components/Layout/header/icons/Plus"
export default function page() {
  return (
    <DashboardLayout>
            <h1 className="text-white text-3xl">Creator</h1>
        <section className="flex gap-5 appear mt-5">
            <ContainerGradient clase="w-full p-2 flex flex-col lg:flex-row">
                <Stats items={[
                    {title: "Total Products", ammount: "49"},
                    {title: "Today", ammount: "5"},
                    ]} />
            </ContainerGradient>
        </section>
        <nav className="appear">
            <ul className="flex justify-between mt-5 gap-5">
                <li className="w-full">
                    <button
                        className="flex gap-2 text-white items-center justify-center hover:bg-slate-400 hover:bg-opacity-10 w-full border border-slate-600 border-opacity-40 lg:w-[250px] px-5 py-3 rounded transition-colors "
                    >
                        Create new
                    </button>
                </li>
                <li className="w-full flex lg:justify-end ">
                   <input type="text" 
                    placeholder="Search"
                    className="bg-[#191827] border border-slate-600 border-opacity-40 w-full rounded text-white lg:w-[450px] px-2 py-3 transition-colors focus:outline-none focus:border-slate-400 "
                   />
                </li>
            </ul>
        </nav>
        <section className="flex gap-5 appear mt-5">
            <article className="w-full p-2 justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    products.map((product, index) => (
                        <Product product={product} key={index} />
                    ))
                }
            </article>
        </section>
        
    </DashboardLayout>
  )
}

const products = [
    {
        title: "Post 1",
        price: "$49.00 USD",
        imagen: "/post-1.png"
    },
    {
        title: "Post 2",
        price: "$63.00 USD",
        imagen: "/post-2.png"
    },
    {
        title: "Post 3",
        price: "$32.00 USD",
        imagen: "/post-3.png"
    },
    {
        title: "Post 1",
        price: "$49.00 USD",
        imagen: "/post-1.png"
    },

]