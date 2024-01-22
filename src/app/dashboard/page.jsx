"use client";
import Layout from "../components/Dashboard/DashboardLayout";
import SearchBar from "../components/Layout/header/SearchBar";
import LineChart from "../components/Dashboard/linechart/LineChart";
import CircularChart from "../components/Dashboard/circularChart/CircularLineChart";
import Fan from "../components/Dashboard/Fan/Fan";
import styles from "./styles.module.css";
import BarChar from "../components/Dashboard/barchar/BarChar";
export default function page() {
  return (
    <Layout>
      <div className="flex flex-col gap-2 lg:flex-row justify-between appear">
        <h1 className="text-4xl text-white w-full">Dashboard</h1>
        <h2>
          <span className="text-white opacity-50">Welcome back,</span>{" "}
          <span className="text-white">Wefere</span>
        </h2>

        {/* <SearchBar /> */}
      </div>

      <article className="flex flex-col xl:flex-row items-center gap-5 justify-between bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl p-5 mt-5 appear">
        <div className="flex gap-5 w-full justify-evenly xl:justify-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-neutral-100 opacity-50 text-sm capitalize">
              Total earnings
            </h2>
            <h1 className="text-4xl text-white">
              $57,250<span className="text-[15px]">.00</span>
            </h1>
          </div>
          {/* <CircularChart value={60} /> */}
        </div>
        <div className="flex gap-5 w-full justify-evenly xl:justify-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-neutral-100 opacity-50 text-sm capitalize">
              Monthly earnings
            </h2>
            <h1 className="text-4xl text-white">
              $4,500<span className="text-[15px]">.00</span>
            </h1>
          </div>
          {/* <CircularChart value={30} /> */}
        </div>
        <div className="flex gap-5 w-full justify-evenly xl:justify-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-neutral-100 opacity-50 text-sm capitalize">
              Avg. Earnings per fan
            </h2>
            <h1 className="text-4xl text-white">
              $140<span className="text-[15px]">.00</span>{" "}
            </h1>
          </div>
          {/* <CircularChart value={80} /> */}
        </div>
      </article>

      <article className="flex justify-between mt-5 flex-col lg:flex-row gap-5 appear">
        <div className=" bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl p-5 w-full lg:w-2/3 ">
          <LineChart />
        </div>
        <div className="bg-gradient-to-r from-[#27273bce] to-[#75376181] bg-opacity-10  rounded-xl px-5 pt-5 pb-0 lg:w-1/3 grid grid-cols-5 relative">
          <h2 className="text-white col-span-3">Top fans</h2>
          <p className="text-white text-center">Purcharses</p>
          <p className="text-white text-center">Total</p>
          <div
            className={`flex flex-col gap-2 overflow-y-auto scrollbar-hide max-h-96 col-span-5 mt-2 ${styles.degradado}`}
          >
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
        </div>
      </article>
      <article className="flex flex-col lg:flex-row justify-between mt-5 gap-5 appear">
        <div className=" bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl p-2 lg:p-5 w-full lg:w-1/2">
          <h2 className="text-white text-center">Best day</h2>
          <BarChar hour={false}/>
        </div>
        <div className=" bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl p-5 w-full lg:w-1/2">
          <h2 className="text-white text-center">Best month</h2>
          <BarChar hour={true} />
        </div>
      </article>

      <section className="mt-5 appear">
        <article className="flex flex-col lg:flex-row gap-5 bg-gradient-to-r from-[#28273f] to-[#662e4e88]  rounded-xl p-2 lg:p-5 w-full">
          <div className="flex gap-5 w-full justify-evenly xl:justify-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-neutral-100 opacity-50 text-sm capitalize">
                Tips
              </h2>
              <h1 className="text-4xl text-white">
                $7,250<span className="text-[15px]">.00</span>
              </h1>
            </div>
          </div>
          <div className="flex gap-5 w-full justify-evenly xl:justify-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-neutral-100 opacity-50 text-sm capitalize">
                Post
              </h2>
              <h1 className="text-4xl text-white">
                $8,530<span className="text-[15px]">.00</span>
              </h1>
            </div>
          </div>
          <div className="flex gap-5 w-full justify-evenly xl:justify-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-neutral-100 opacity-50 text-sm capitalize">
                Chat sales
              </h2>
              <h1 className="text-4xl text-white">
                $6,540<span className="text-[15px]">.00</span>{" "}
              </h1>
            </div>
          </div>
        </article>
      </section>

      <section className="flex flex-col lg:flex-row gap-5 mt-5">
        <article className="bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl p-5 lg:p-10 w-full lg:w-1/2">
          <div>
            <h2 className="text-white text-sm">Cash Closing</h2>
            <span className="text-2xl text-green-600">
              200,304.02 <span className="text-[12px]">mxn</span>
            </span>
          </div>
          <div className="grid grid-cols-3 justify-center">
            <div className="grid">
              <h3 className="text-white opacity-70 text-[12px]">
                Raised this month
              </h3>
              <p className="text-white text-[12px]">
                200,304.02 <span className="text-[12px]">mxn</span>
              </p>
              <br />
              <h2 className="text-white opacity-70 text-[12px]">
                Raised this month - ref/chb
              </h2>
              <p className="text-white text-[12px]">
                200,304.02 <span className="text-[12px]">mxn</span>
              </p>
            </div>
            <div className="grid justify-center">
              <h3 className="text-white opacity-70 text-[12px]">Subs. IVA</h3>
              <p className="text-white text-[12px]">
                200,304.02 <span className="text-[12px]">mxn</span>
              </p>
              <br />
              <h3 className="text-white opacity-70 text-[12px]">IVA</h3>
              <p className="text-white text-[12px]">
                200,304.02 <span className="text-[8px]">mxn</span>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-white opacity-70 text-[12px]">Debt</h3>
              <p className="text-white text-[12px]">
                200,304.02 <span className="text-[12px]">mxn</span>
              </p>
            </div>
          </div>
        </article>
        <article className="bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl p-2 lg:p-10 w-full lg:w-1/2">
          <div>
            <h2 className="text-white text-sm">Monthly income</h2>
            <span className="text-2xl text-green-600">
              200,304.02 <span className="text-[12px]">mxn</span>
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div className="grid gap-2">
              <div className="flex justify-between">
                <h3 className="text-white opacity-70 text-[12px]">ISR</h3>
                <p className="text-white text-[12px]">
                  200,304.02 <span className="text-[12px]">mxn</span>
                </p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-white opacity-70 text-[12px]">Refounded</h2>
                <p className="text-white text-[12px]">
                  200,304.02 <span className="text-[12px]">mxn</span>
                </p>
              </div>
              <div className="flex justify-between">
                <h3 className="text-white opacity-70 text-[12px]">
                  IVA refounded
                </h3>
                <p className="text-white text-[12px]">
                  200,304.02 <span className="text-[12px]">mxn</span>
                </p>
              </div>
            </div>
            <di v className="grid gap-2">
              <div className="flex justify-between">
                <h3 className="text-white opacity-70 text-[12px]">
                  Charged back
                </h3>
                <p className="text-white text-[12px]">
                  200,304.02 <span className="text-[8px]">mxn</span>
                </p>
              </div>
              <div className="flex justify-between">
                <h3 className="text-white opacity-70 text-[12px]">
                  Priv commissions
                </h3>
                <p className="text-white text-[12px]">
                  200,304.02 <span className="text-[8px]">mxn</span>
                </p>
              </div>
              <div className="flex justify-between">
                <h3 className="text-white opacity-70 text-[12px]">
                  Something else
                </h3>
                <p className="text-white text-[12px]">
                  200,304.02 <span className="text-[8px]">mxn</span>
                </p>
              </div>
            </di>
          </div>
        </article>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5">
        <article className="bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl p-2 lg:p-5 ">
          <h3 className="text-white text-xs font-bold">RAISED</h3>
        </article>
        <article className="bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl p-2 lg:p-5 ">
          <h3 className="text-white text-xs font-bold">CHARGEDBACK</h3>
        </article>
        <article className="bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl p-2 lg:p-5 ">
          <h3 className="text-white text-xs font-bold">REFUNDED</h3>
        </article>
        <article className="bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl p-2 lg:p-5 ">
          <h3 className="text-white text-xs font-bold">
            RAISED - CHARGEDBACK / REFUNDS
          </h3>
        </article>
      </section>

      <section className="bg-gradient-to-r from-[#28273f] to-[#662e4e88] rounded-xl p-2 lg:p-5 mt-5">

      </section>
    </Layout>
  );
}
