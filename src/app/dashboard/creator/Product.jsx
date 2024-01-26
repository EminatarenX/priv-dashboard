import Plus from "@/components/Layout/header/icons/Plus"
import Image from "next/image"
export default function Product({product}) {

  return (
    <div className='flex flex-col justify-between p-5 rounded-xl border border-slate-600 border-opacity-45 h-[500px] w-full gap-3'>
     <div className="flex flex-col gap-2">
      <div className="flex justify-center">
      <Image src={product.imagen} width={400} height={400} alt={product.title} 
      className="h-[300px] w-full object-cover" />

      </div>
      <h2 className='text-white uppercase text-lg'>{product.title}</h2>
      <p className='text-slate-400 font-medium'>{product.price}</p>
     </div>
      <div className='flex gap-2'>  
        <button className='flex text-slate-400 hover:text-white gap-2 items-center justify-center border border-slate-600 border-opacity-40 p-2 rounded hover:bg-slate-700 hover:bg-opacity-25 w-full transition-colors'>
          Edit
        </button>
        <button className='flex gap-2 text-slate-400 items-center justify-center hover:bg-rose-600 bg-opacity-10 border border-slate-600 border-opacity-40 p-2 rounded w-full hover:text-white transition-colors '>
          
         Delete
        </button>
      </div>
    </div>
  )
}
