import React from 'react'
import { useHistory } from 'react-router-dom'
import Background4 from '../assets/Background4.png'
import glasses from '../assets/glasses.png'
import wrist from '../assets/wrist.png'
import watch from '../assets/watch.png'
import clock from '../assets/clock.png'
import chair from '../assets/chair.png'
import paper from '../assets/paper.png'
import arrow from '../assets/arrow.svg'
export default function Portfolio() {
  let history = useHistory()
  return (
    <div style={{ background: `transparent url(${Background4}) no-repeat scroll center`, backgroundSize: "" }} className='h-screen flex flex-1 items-center justify-center'>
      <div className='flex flex-col md:px-24'>
        <div className='flex justify-center items-center md:w-11/12 md:h-11/12'>
          <div>
            <img src={glasses} alt='' className='' />
          </div>
          <div>
            <img src={wrist} alt='' className='' />
          </div>
          <div>
            <img src={watch} alt='' className='' />
          </div>
        </div>
        <div className='flex justify-center items-center md:w-11/12 md:h-11/12 lg:-mt-8'>
          <div>
            <img src={clock} alt='' className='' />
          </div>
          <div>
            <img src={chair} alt='' className='' />
          </div>
          <div>
            <img src={paper} alt='' className='' />
          </div>
        </div>
        <div className='flex justify-between lg:px-20 md:-mt-4'>
          <div className='flex w-1/2'>
            <h1 className='text-white md:text-xl lg:text-2xl'>For more check out: <span className='underline lg:px-10'>Dribble</span> <span className='underline'>Behance</span></h1>
          </div>
          <div className='flex items-center'>
            <h1 className='text-white md:text-xl lg:text-2xl cursor-pointer'><span onClick={() => history.push('/contact')}>Next page</span></h1>
            <img src={arrow} alt='' className='ml-2 w-8'/>
          </div>
        </div>
      </div>
    </div>
  )
}
