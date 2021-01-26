import React from 'react'
import Navbar from '../components/navbar.js'
import Background3 from '../assets/Background3.png'
export default function Contact() {
  return (
    <div style={{ background: `transparent url(${Background3}) no-repeat scroll center`, backgroundSize: "" }} className='h-screen'>
      <Navbar />
      <div class="grid grid-cols-2 gap-4 xl:max-w-7xl max-w-3xl md:max-w-lg px-2 md:py-20 m-auto">
        <div class="col-span-2 md:col-span-1">
          <input type="text" class="border-0 border-b-2 p-3 placeholder-gray-200 text-gray-200 md:text-xl w-full bg-transparent outline-none" placeholder="Name" />
        </div>
        <div class="col-span-2 md:col-span-1">
          <input type="email" class="border-0 border-b-2 p-3 placeholder-gray-200 text-gray-200 md:text-xl w-full bg-transparent outline-none" placeholder="Email Address" />
        </div>
        <div class="col-span-2">
          <textarea cols="30" rows="6" class="border-0 border-b-2 p-3 placeholder-gray-200 text-gray-200 bg-transparent md:text-xl w-full outline-none" placeholder="Type your message here..."></textarea>
        </div>
        <div className='outline-none'>
          <button className='text-blue-400 bg-white rounded-full focus:outline-none px-2 py-1 md:px-2 md:py-1'>Send Message</button>
        </div>
        <div className='flex flex-col md:flex-row justify-around items-end'>
          <h1 className='text-white'>For more check out:</h1>
          <text className='underline text-white'>Dribble</text>
          <text className='underline text-white'>Behance</text>
        </div>
      </div>
    </div>
  )
}
