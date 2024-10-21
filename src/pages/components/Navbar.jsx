import React from 'react'
import Image from 'next/image';
import sfaclogo from '../../../public/sfac.png'
import Link from 'next/link';

const Navbar = () => {
  return (<header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-red-700 text-sm py-3 dark:bg-neutral-800 drop-shadow-md">
    <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
  <div className="flex items-center justify-between">
    <Image className="mr-2" src={sfaclogo} alt="sfac logo" width={50} height={50}/>
    <a className="flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80 text-white" href="#" aria-label="Brand">
      Saint Francis of Assisi College
    </a>
    <div className="sm:hidden">
      <button type="button" className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
        <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
        <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        <span className="sr-only">Toggle navigation</span>
      </button>
    </div>
  </div>
  <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
      <a className="font-semibold text-gray-600 hover:text-gray-400 focus:outline-none text-white" href="/" aria-current="page">Home</a>
      <Link className="font-semibold text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 text-white" href="/components/About">About</Link>
      <Link className="font-semibold text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 text-white" href="/components/ContactUs">Contact Us</Link>
      <Link className="font-semibold text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 text-white" href="/components/Campuses">Campuses</Link>
    </div>
  </div>
</nav>
</header>
  )
}

export default Navbar