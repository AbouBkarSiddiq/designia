import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
export default function Navbar() {
  return (
    <header class="lg:px-16 px-8 flex flex-wrap items-center py-4 bg-transparent w-full absolute">
      <div class="flex-1 flex justify-between items-center">
        <img src={Logo} alt='' />
      </div>
      <label for="menu-toggle" class="pointer-cursor md:hidden block">
        <svg class="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" />
      <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul class="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
            <li><Link to='/' class="md:p-4 py-3 font-sans font-bold text-xl leading-7 px-0 block">ABOUT</Link></li>
            <li><Link to='/skills' class="md:p-4 py-3 font-sans font-bold text-xl leading-7 px-0 block">SKILLS</Link></li>
            <li><Link to='/portfolio'class="md:p-4 py-3 font-sans font-bold text-xl leading-7 px-0 block">PORTFOLIO</Link></li>
            <li><Link to='/contact' class="md:p-4 py-3 font-sans font-bold text-xl leading-7 px-0 block md:mb-0 mb-2">CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
