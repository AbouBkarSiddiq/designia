import React from 'react'
import { useHistory } from 'react-router-dom'
import Group4 from '../assets/Group4.png'
import glasses1 from '../assets/glasses1.png'
import wrist1 from '../assets/wrist1.png'
import watch1 from '../assets/watch1.png'
import clock1 from '../assets/clock1.png'
import chair1 from '../assets/chair1.png'
import paper1 from '../assets/paper1.png'
import arrow from '../assets/arrow.svg'
import Navbar from '../components/navbar'
export default function Portfolio() {
  let history = useHistory()
  return (
    <div style={{ background: `transparent url(${Group4}) no-repeat scroll center`, backgroundSize: "" }} className='h-screen'>
      <Navbar />
      <div className='flex justify-center items-center md:w-11/12 md:h-11/12 md:-mt-8'>
        <div>
          <img src={glasses1} alt='' className='' />
        </div>
        <div>
          <img src={wrist1} alt='' className='' />
        </div>
        <div>
          <img src={watch1} alt='' className='' />
        </div>
      </div>
      <div className='flex justify-center items-center md:w-11/12 md:h-11/12 md:-mt-14'>
        <div>
          <img src={clock1} alt='' className='' />
        </div>
        <div>
          <img src={chair1} alt='' className='' />
        </div>
        <div>
          <img src={paper1} alt='' className='' />
        </div>
      </div>
      <div className='flex justify-between px-4 md:-mt-4'>
        <div className='flex justify-start'>
          <h1 className='text-white'>For more check out: <span className='underline'>Dribble</span> <span className='underline'>Behance</span></h1>
        </div>
        <div className='flex md:mr-36'>
        <h1 className='text-white cursor-pointer'><span onClick={()=>history.push('/contact')}>Next page</span></h1>
          <img src={arrow} alt='' className='ml-1' />
        </div>
      </div>
    </div>
  )
}
