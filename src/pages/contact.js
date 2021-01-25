import React from 'react'
import Navbar from '../components/navbar.js'
import Background3 from '../assets/Background3.png'
export default function Contact() {
  return (
    <div style={{ background: `transparent url(${Background3}) no-repeat scroll center`, backgroundSize: "" }} className='h-screen'>
      <Navbar />
      <div class="grid grid-cols-2 gap-4 max-w-2xl m-auto mt-12">
        <div class="col-span-2 md:col-span-1">
          <input type="text" class="border-solid border-2 p-3 bg-opacity-50 md:text-xl w-full outline-none" placeholder="Name" />
        </div>
        <div class="col-span-2 md:col-span-1">
          <input type="email" class="border-2 p-3 md:text-xl w-full outline-none" placeholder="Email Address" />
        </div>
        <div class="col-span-2">
          <textarea cols="30" rows="6" class="border-2 p-3 md:text-xl w-full outline-none" placeholder="Message"></textarea>
        </div>
        <div>
          <button className='text-blue-400 bg-white rounded-full outline-none h-12 w-32'>Send Message</button>
        </div>
        <div className='flex flex-col md:flex-row justify-around items-end'>
          <h1 className='text-white'>For more check out:</h1>
          <text className='underline text-white'>Dribble</text>
          <text className='underline text-white'>Behance</text>
        </div>
      </div>
      {/* <div className='flex flex-col'>
        <div className='flex items-center justify-center'>
          <h1 className='text-white border-b w-1/2'>Name</h1>
        </div>
        <div className='flex items-center justify-center mt-6'>
          <h1 className='text-white border-b w-1/2'>Mail Address</h1>
        </div>
        <div className='flex items-center justify-center mt-6'>
          <h1 className='text-white border-b bottom-32 w-1/2'>Type text here...</h1>
        </div>
      </div> */}
    </div>
  )
}
