import React from 'react'
import Background3 from '../assets/Background3.png'
export default function Contact() {
  return (
    <div style={{ background: `transparent url(${Background3}) no-repeat scroll center`, backgroundSize: "" }} className='flex flex-1 items-center justify-start h-screen w-screen'>
      <div className='w-full md:h-4/6'>
        <div className='flex flex-col w-full px-4 lg:px-24 md:w-3/4 md:h-3/5'>
          <div className='flex flex-col md:flex-row md:justify-between w-full'>
            <div className='md:w-2/5'>
              <input type="text" class="border-0 border-b-2 p-3 md:text-xl lg:text-3xl font-light placeholder-white placeholder-opacity-70 text-white text-opacity-70 w-full bg-transparent outline-none" placeholder="Name" />
            </div>
            <div className='md:w-2/5'>
              <input type="email" class="border-0 border-b-2 p-3 md:text-xl lg:text-3xl placeholder-white placeholder-opacity-70 text-white font-light text-opacity-70 w-full bg-transparent outline-none" placeholder="Email Address" />
            </div>
          </div>
          <div className="mt-6">
            <div>
              <textarea cols="30" rows="5" class="border-0 border-b-2 p-3 bg-transparent md:text-xl lg:text-3xl font-light placeholder-white placeholder-opacity-70 text-white text-opacity-70 w-full outline-none" placeholder="Type your message here..."></textarea>
            </div>
          </div>
          <div>
            <div className='flex items-end md:h-24'>
              <button className='text-blue-500 bg-white hover:shadow-2xl transform hover:-translate-y-1 rounded-full text-xl tracking-wider focus:outline-none px-2 py-1 md:px-2 md:py-1 lg:px-8 lg:py-2'>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
