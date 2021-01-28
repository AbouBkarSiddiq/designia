import React from 'react'
import '../App.css';
import { useHistory } from 'react-router-dom'
import Background2 from '../assets/Background2.png'
import Ellipse from '../assets/Ellipse.png'
import arrow from '../assets/arrow.svg'
export default function Skills() {
  let history = useHistory()
  return (
    <div style={{ background: `transparent url(${Background2}) no-repeat scroll center`, backgroundSize: "" }} className='flex flex-col flex-1 justify-center items-center w-screen h-screen'>
      <div className='flex flex-col md:flex-row md:w-4/5 md:justify-start'>
        <div className='flex md:justify-start md:w-1/3'>
          <div className='absolute'>
            <img src={Ellipse} alt='' className='md:w-3/4 md:h-3/4 lg:w-full lg:h-full w-1/2 h-1/2' />
          </div>
          <div className='my-8 ml-4'>
            <h1 className='text-gray-200 md:font-bold xl:text-9xl lg:text-8xl md:text-4xl text-lg font-normal'>67<span className="text-gray-200 font-bold lg:text-6xl sm:text-2xl">%</span></h1>
            <h1 className='text-white md:font-bold md:text-3xl text-lg'>User Experience</h1>
          </div>
        </div>
        <div className='flex md:justify-start md:w-1/3'>
          <div className='absolute'>
            <img src={Ellipse} alt='' className='md:w-3/4 md:h-3/4 lg:w-full lg:h-full w-1/2 h-1/2' />
          </div>
          <div className='my-8 ml-4'>
            <h1 className='text-gray-200 md:font-bold xl:text-9xl lg:text-8xl md:text-4xl text-lg font-normal'>89<span className="text-gray-200 font-bold lg:text-6xl sm:text-2xl">%</span></h1>
            <h1 className='text-white md:font-bold md:text-3xl text-lg'>User Interface</h1>
          </div>
        </div>
        <div className='flex md:justify-start md:w-1/3'>
          <div className='absolute'>
            <img src={Ellipse} alt='' className='md:w-3/4 md:h-3/4 lg:w-full lg:h-full w-1/2 h-1/2' />
          </div>
          <div className='my-8 ml-4'>
            <h1 className='text-gray-200 md:font-bold xl:text-9xl lg:text-8xl md:text-4xl text-lg font-normal'>56<span className="text-gray-200 font-bold lg:text-6xl sm:text-2xl">%</span></h1>
            <h1 className='text-white md:font-bold md:text-3xl text-lg'>UI Interaction</h1>
          </div>
        </div>
      </div>
      <div className='flex md:w-4/5 md:h-1/5 md:justify-start md:items-end lg:items-end'>
        <div className='flex'>
          <h1 className='text-white font-light text-sm md:text-xl lg:text-2xl xl:text-3xl'>Get your thing done by us at a very affordable cost. We make sure the quality</h1>
        </div>
      </div>
        <div className='flex w-full justify-end md:h-1/6 md:items-end md:px-24 md:mt-12 px-10'>
          <h1 className='text-white md:text-2xl cursor-pointer'><span onClick={() => history.push('/portfolio')}>Next page</span></h1>
          <img src={arrow} alt='' className='ml-2 w-4 md:mb-2 sm:mb-0 md:w-8' />
        </div>
      </div>
  )
}
