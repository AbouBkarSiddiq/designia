import React from 'react'
import '../App.css';
import { useHistory } from 'react-router-dom'
import background1 from '../assets/background1.png'
import placeholders from '../assets/placeholders.png'
import arrow from '../assets/arrow.svg'
export default function Home() {
  let history = useHistory()
  return (
    <div style={{ background: `transparent url(${background1}) no-repeat scroll center`, backgroundSize: "" }} className='flex flex-1 items-center justify-center min-h-screen'>
      <div className='flex flex-col flex-1 md:flex-row justify-between items-center px-4 w-full md:py-12 md:px-24'>
        <div className='flex flex-col justify-end md:w-2/3 mt-4'>
          <h1 className='text-white font-sans font-normal md:text-4xl lg:text-6xl'>We make thing done!</h1>
          <p className=' text-gray-300 text-opacity-50 font-sans font-normal lg:text-3xl w-4/5'>Get your thing done by us at a very affordable cost. We make sure the quality content. We care</p>
          <div className='mt-6'>
            <button className='bg-white rounded-full px-2 text-blue-500 xl:px-8 xl:py-2'>Hire us!</button>
          </div>
        </div>
        <div className='flex flex-col md:justify-start md:w-2/3'>
          <img src={placeholders} alt='' className='flex ' />
          <div className='flex w-full justify-end md:h-1/6 md:items-end md:px-24 md:mt-8 px-10'>
            <h1 className='text-white md:text-2xl cursor-pointer'><span onClick={() => history.push('/portfolio')}>Next page</span></h1>
            <img src={arrow} alt='' className='ml-2 mb w-4 md:w-8' />
          </div>
        </div>
      </div>
    </div>
  )
}
