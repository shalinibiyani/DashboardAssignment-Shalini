'use client'

import { useState } from 'react'
import {
   ArrowPathIcon,
   ChartPieIcon,
   CursorArrowRaysIcon,
   FingerPrintIcon,
   SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Header from './Dashboard'
import ActivityChart from './activityChart'
import OrdersTable from './ordersTables'
import Feedback from './Feedback'
import NetProfitCard from './netProfitCard'
import Menu from './menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope , faGear , faBell , faSearch} from '@fortawesome/free-solid-svg-icons'

const products = [
   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
   { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Root() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

   return (
      <>
         <div>
            {/* Header start */}
            <nav className="fixed top-0 w-screen bg-gray-800 dark:border-gray-700 pl-0 md:pl-16 z-0 z-50" style={{ zIndex: '9999999' }}>
               <div className="px-3 py-3 lg:px-5 lg:pl-3">
                  <div className="grid md:flex items-center justify-end md:justify-between">

                     <div className="flex items-center space-x-4 justify-between w-full">
                        {/* Search Bar */}
                        <div className="relative hidden sm:block">
                        <FontAwesomeIcon icon={faSearch} className="text-gray-300 absolute mt-3 mr-12" style={{ color: '#b0b0b0' , left : '6px'}} />
                           <input
                              type="text"
                              id="search-bar"
                              className="block w-full px-4 py-2 text-gray-900 rounded-lg border border-gray-300 dark:text-white dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              placeholder="   Search..."
                           />
                        </div>
                        <div className="flex space-x-2 items-center w-10/12 justify-end">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-600 cursor-pointer" style={{ backgroundColor: '#2a2a2a' }}>
                           <FontAwesomeIcon icon={faEnvelope} className="text-gray-300" style={{ color: '#b0b0b0' }} />
                        </div>
                        <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-600 cursor-pointer" style={{ backgroundColor: '#2a2a2a' }}>
                           <FontAwesomeIcon icon={faGear} className="text-gray-300" style={{ color: '#b0b0b0' }} />
                        </div>
                        <div className="relative flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-600 cursor-pointer" style={{ backgroundColor: '#2a2a2a' }}>
                           <FontAwesomeIcon icon={faBell} className="text-gray-300" style={{ color: '#b0b0b0' }} />
                        </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                           <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                              <span className="sr-only">Open user menu</span>
                              <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                           </button>
                           <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                              <div className="px-4 py-3" role="none">
                                 <p className="text-sm text-gray-900 dark:text-white" role="none">
                                    Neil Sims
                                 </p>
                                 <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                    neil.sims@flowbite.com
                                 </p>
                              </div>
                              <ul className="py-1" role="none">
                                 <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                 </li>
                                 <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                 </li>
                                 <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                 </li>
                                 <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </nav>
            {/* Header End */}
         </div>
         <div className='flex '>
            {/* sidebar start */}
            <div class="hidden md:flex flex-col items-center w-16 h-auto overflow-hidden text-gray-400 bg-gray-800 rounded pt-0 z-10 sticky" style={{ zIndex: '9999999999' }}>
               <a class="flex items-center justify-center mt-3" href="#">
                  <svg class="w-8 h-8 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                     <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
               </a>
               <div class="flex flex-col items-center mt-3 border-t border-gray-700">
                  <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                     <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                     </svg>
                  </a>
                  <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                     <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                     </svg>
                  </a>
                  <a class="flex items-center justify-center w-12 h-12 mt-2 text-gray-200 bg-gray-700 rounded" href="#">
                     <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                     </svg>
                  </a>
                  <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                     <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                     </svg>
                  </a>
               </div>
               <div class="flex flex-col items-center mt-2 border-t border-gray-700">
                  <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                     <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                     </svg>
                  </a>
                  <a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                     <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                     </svg>
                  </a>
                  <a class="relative flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                     <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                     </svg>
                     <span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
                  </a>
               </div>
               <a class="flex items-center justify-center w-16 h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" href="#">
                  <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
               </a>
            </div>
            {/* sidebar end */}
            <div className="min-h-screen bg-gray-900 text-white md:p-12 p-4 w-full" style={{ maxHeight: '900px', overflow: 'scroll' }}>
               <div className="md:flex flex-row mt-4 relative">
                  <h1 className='absolute mt-8 ml-6 md:ml-0 md:mt-4 font-extrabold'>
                     Dashboard
                  </h1>
                  <br />
                  <div className="flex flex-col mt-4 md:w-8/12 w-full pr-0 md:pr-2">
                     <Header />
                     <ActivityChart />
                     <OrdersTable />
                  </div>
                  <div className="flex flex-col mt-4 md:w-4/12 w-full md:pl-2 pl-0 pt-8 pb-4">
                     <NetProfitCard />
                     {/* <ActivityChart /> */}
                     <Menu />
                     <Feedback />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
