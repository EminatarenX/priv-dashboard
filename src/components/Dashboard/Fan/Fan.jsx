import Image from 'next/image'
import React from 'react'

export default function Fan() {
  return (
    <div className="bg-slate-900 p-2 rounded-xl grid grid-cols-5 items-center">
        
        <div className="flex col-span-3 gap-2 items-center">
            
        <Image 
        src="/user.png" 
            width={50} 
            height={50}
            className="rounded-full"
            alt='fan'
        />
        <div>
            <h2 className="text-white ">Fan name</h2>
            <h2 className="text-white text-[10px]">Fan email</h2>
        </div>


        </div>
        <p className="text-white text-center text-sm">23</p>
        <p className="text-green-500 text-center text-sm">$1,230.00</p>
    </div>
  )
}
