import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { BsTelephoneOutboundFill } from "react-icons/bs";



const page = () => {
  return (
    <div className='bg-teal-300'>



      <div id="contact" className='   py-32 container' >
        <div className='grid  md:grid-cols-2 gap-10'></div>
        <div className='space-y-8'>

          <h2 className='text-5xl'>Get In Touch</h2>
          <p className='text-gray-600 text- [18px pt-2 '  > Drop a line to contact me</p>
          <div className='flex gap-3 items-center'> </div>

          <FaMailBulk size={30} /> abc123@mail.com


          <div className='flex gap-3 items-center'></div>

          <BsTelephoneOutboundFill /> (021) 000-33679



          <div className='space-y-8' ></div>
          <div className='flex flex-col gap-1'></div>
          <label htmlFor="name">Name</label>
          <input type="text" name="text" id="name"
            className='h-[40px] bg-transparent border border-accent ' />


        </div>

        <div>


        </div>




      </div>
    </div>
  )
}

export default page
