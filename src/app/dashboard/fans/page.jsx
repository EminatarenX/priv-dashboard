"use client";
import Image from "next/image";
import Layout from "../../components/Dashboard/DashboardLayout";
import BarChar from "@/app/components/Dashboard/barchar/BarChar";
import Fan from "@/app/components/Dashboard/Fan/Fan";
import SearchBar from "@/app/components/Layout/header/SearchBar";
export default function page() {
  return (
    <Layout>
      <section className="flex flex-col lg:flex-row lg:justify-between appear">
        <h1 className="text-4xl text-white w-full">Fans</h1>
        {/* <h2>
                <span className="text-white opacity-50">Welcome back,</span> <span className="text-white">Wefere</span>
            </h2> */}
      </section>
      <section className="flex flex-col lg:flex-row lg:justify-between items-center gap-5 appear  bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl mt-5">
        <div className="flex flex-col justify-center items-center gap-2 rounded-xl p-5 lg:p-10 ">
          <h2 className="text-neutral-100 opacity-50 text-sm capitalize">
            Total fans
          </h2>
          <h1 className="text-4xl text-white">1,250</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 rounded-xl p-5 lg:p-10 ">
          <h2 className="text-neutral-100 opacity-50 text-sm capitalize">
            Avg. Fans per month
          </h2>
          <h1 className="text-4xl text-white">
            24<span className="text-[15px]"></span>
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 rounded-xl p-5 lg:p-10 ">
          <h2 className="text-neutral-100 opacity-50 text-sm capitalize">
            Avg. Earnings per fan
          </h2>
          <h1 className="text-4xl text-white">
            $140<span className="text-[15px]">.00</span>{" "}
          </h1>
        </div>
      </section>
      <section className="flex gap-5 flex-col lg:flex-row">
            <article className="flex p-5 flex-col gap-5 appear bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl mt-5 lg:w-2/3">
                <h2 className="text-white text-center">Subscriptions timeline</h2>
                <BarChar hour={true} />
            </article>
      <article className="flex flex-col lg:flex-row gap-5 appear bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl mt-5 lg:w-1/3">
        <Image
          src="/wefere.jpg"
          width={800}
            height={800}

          alt="wefere"
          className="w-full lg:w-1/2 object-cover rounded-l-xl object-center"
        />
        <div className="flex gap-5 flex-col justify-center items-center lg:w-1/2">
          
            <h2 className="text-neutral-100 opacity-70 text-sm capitalize">
              Best Fan
            </h2>
            <h1 className="text-4xl text-white">Wefere</h1>
            <p className="text-white text-sm">Total Purchases <span className="text-sm text-white">$1,250</span></p>
            <p className="text-white  text-sm">Suscribed since <span className="text-sm text-white">March 2019</span></p>
            <button className="bg-[#662e4e88] text-white rounded-xl px-5 py-2 mb-5">View More</button>
     
        </div>
      </article>
      </section>

        <section className="flex flex-col max-h-[600px] gap-5 px-5 pt-5 appear bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl mt-5 w-full relative">
            <div className="flex justify-between items-center flex-col md:flex-row">
            <h2 className="text-white text-center">Fans List</h2>
            <SearchBar />
            </div>
            <div className="flex flex-col gap-5 degradado overflow-y-auto scrollbar-hide ">
                <Fan />
                <Fan />
                <Fan />
                <Fan />
                <Fan />
                <Fan />
                <Fan />
                <Fan />
                <Fan />
                <Fan />
                <Fan />
                <Fan />
                <Fan />
                <Fan />
            </div>
        </section>
    </Layout>
  );
}
