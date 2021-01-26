import React from 'react'
import '../App.css';
import { useHistory } from 'react-router-dom'
import Background2 from '../assets/Background2.png'
import Ellipse from '../assets/Ellipse.png'
import Navbar from '../components/navbar'
import arrow from '../assets/arrow.svg'
export default function Skills() {
  let history = useHistory()
  return (
    <div style={{ background: `transparent url(${Background2}) no-repeat scroll center`, backgroundSize: "" }} className='h-screen'>
      <Navbar />
      <div className='flex flex-col md:flex-row w-full'>
        <div className='flex justify-between md:justify-evenly flex-wrap'>
          <div>
            <div className='absolute'>
              <img src={Ellipse} alt='' className='md:w-full md:h-full w-2/3 h-2/3' />
            </div>
            <div className='my-4 ml-4'>
              <h1 className='text-gray-300 md:font-bold md:text-5xl text-lg font-normal'>67 %</h1>
              <h1 className='text-white md:font-bold md:text-3xl text-lg'>User Experience</h1>
            </div>
          </div>
          <div>
            <div className='absolute'>
              <img src={Ellipse} alt='' className='md:w-full md:h-full w-2/3 h-2/3' />
            </div>
            <div className='my-4 ml-4'>
              <h1 className='text-gray-300 md:font-bold md:text-5xl text-lg font-normal'>67 %</h1>
              <h1 className='text-white md:font-bold md:text-3xl text-lg'>User Experience</h1>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
        <div className=''>
          <div className='absolute'>
            <img src={Ellipse} alt='' className='md:w-full md:h-full w-2/3 h-2/3'/>
          </div>
          <div className='my-4 ml-4'>
            <h1 className='text-gray-300 md:font-bold md:text-5xl text-lg font-normal'>67 %</h1>
            <h1 className='text-white md:font-bold md:text-3xl text-lg'>User Experience</h1>
          </div>
        </div>
        </div>
      </div>
      {/* <div className='grid grid-cols-2 gap-0 px-2 md:grid-cols-3 lg:mt-12 lg:px-52 lg:mr-24'>
        <div className=''>
          <div className='absolute'>
            <img src={Ellipse} alt='' className='md:w-4/5 md:h-4/5 w-2/3 h-2/3'/>
          </div>
          <div className='my-4 ml-4'>
            <h1 className='text-gray-300 md:font-bold md:text-5xl text-lg font-normal'>67 %</h1>
            <h1 className='text-white md:font-bold md:text-3xl text-lg'>User Experience</h1>
          </div>
        </div>
        <div className=''>
          <div className='absolute'>
            <img src={Ellipse} alt='' className='md:w-4/5 md:h-4/5 w-2/3 h-2/3' />
          </div>
          <div className='my-4 ml-4'>
            <h1 className='text-gray-300 md:font-bold md:text-5xl text-lg font-normal'>89 %</h1>
            <h1 className='text-white md:font-bold md:text-3xl text-lg'>User Interface</h1>
          </div>
        </div>
        <div className='mt-16 md:mt-0'>
          <div className='absolute'>
            <img src={Ellipse} alt='' className='md:w-4/5 md:h-4/5 w-1/2 h-1/2' />
          </div>
          <div className='my-4 ml-12'>
            <h1 className='text-gray-300 md:font-bold md:text-5xl text-lg font-normal'>56 %</h1>
            <h1 className='text-white md:font-bold md:text-3xl text-lg'>UI Interaction</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center md:mt-32 lg:mr-96'>
        <h1 className='text-white text-xl'>Get your thing done by us at a very affordable cost. We make sure the quality</h1>
      </div>
      <div className='flex justify-end mt-4 mr-20'>
      <h1 className='text-white cursor-pointer'><span onClick={()=>history.push('/portfolio')}>Next page</span></h1>
        <img src={arrow} alt='' className='ml-2' />
      </div>  */}
    </div>
  )
}
