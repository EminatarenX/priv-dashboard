import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Image from "next/image";


export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-20 px-5 gap-5">
        <Image
          src="/hola-priv.svg"
          alt="Picture of the author"
          width={200}
          height={200}
        />
        <h2 className="text-3xl text-white text-center">You are still not following anyone</h2>
        <p className="text-white">but...</p>
        <p className="text-white">you can start watching our new creator Dashboard</p>
        <Link href="/dashboard">
          <p className="bg-white text-black rounded-full py-2 px-5">Go to Dashboard</p>
        </Link>
      
      </div>
    </Layout>
  );
}
