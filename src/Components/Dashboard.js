import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faShoppingBag, faTimesCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <div className='flex flex-wrap w-full pt-8 pb-4 justify-evenly md:justify-between'>

      <div className="bg-gray-800 p-4 h-32 sm:w-full md:w-5/12 lg:w-1/4 xl:w-3/12 rounded-lg shadow-lg flex flex-col items-center justify-between mb-4 md:mb-0">
        <div className="flex items-center w-full mb-2">
          <div className="bg-blue-500 p-2 rounded-full h-8 w-8 flex items-center justify-center">
            <FontAwesomeIcon icon={faShoppingBasket} className="text-white" />
          </div>
        </div>
        <div className='flex justify-between w-full h-24'>
          <div className="text-center">
            <div className="text-gray-400 text-xs">Total Cancelled</div>
            <div className="text-3xl font-bold text-white mt-2 text-left">05</div>
          </div>
          <div className="text-green-500 mt-8">
            <span className="text-sm">▲ 3%</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-4 h-32 sm:w-full md:w-5/12 lg:w-1/4 xl:w-3/12 rounded-lg shadow-lg flex flex-col items-center justify-between ml-3 md:ml-0">
        <div className="flex items-center w-full mb-2">
          <div className="bg-green-500 p-2 rounded-full h-8 w-8 flex items-center justify-center">
            <FontAwesomeIcon icon={faShoppingBag} className="text-white" />
          </div>
        </div>
        <div className='flex justify-between w-full h-24'>
          <div className="text-center">
            <div className="text-gray-400 text-xs">Total Revenue</div>
            <div className="text-3xl font-bold text-white mt-2 text-left">$12k</div>
          </div>
          <div className="text-green-500 mt-8">
            <span className="text-sm">▲ 3%</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-4 h-32 sm:w-full md:w-5/12 lg:w-1/4 xl:w-3/12 rounded-lg shadow-lg flex flex-col items-center justify-between mb-4 md:mb-0">
        <div className="flex items-center w-full mb-2">
          <div className="bg-red-500 p-2 rounded-full h-8 w-8 flex items-center justify-center">
            <FontAwesomeIcon icon={faTimesCircle} className="text-white" />
          </div>
        </div>
        <div className='flex justify-between w-full h-24'>
          <div className="text-center">
            <div className="text-gray-400 text-xs">Total Cancelled</div>
            <div className="text-3xl font-bold text-white mt-2 text-left">05</div>
          </div>
          <div className="text-green-500 mt-8">
            <span className="text-sm">▲ 3%</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-4 h-32 sm:w-full md:w-5/12 lg:w-1/4 xl:w-1/5 rounded-lg shadow-lg flex flex-col items-center justify-between ml-3 md:ml-0">
        <div className="flex items-center w-full mb-2">
          <div className="bg-pink-500 p-2 rounded-full h-8 w-8 flex items-center justify-center">
            <FontAwesomeIcon icon={faDollarSign} className="text-white" />
          </div>
        </div>
        <div className='flex justify-between w-full h-24'>
          <div className="text-center">
            <div className="text-gray-400 text-xs">Total Revenue</div>
            <div className="text-3xl font-bold text-white mt-2 text-left">$12k</div>
          </div>
          <div className="text-green-500 mt-8">
            <span className="text-sm">▲ 3%</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Dashboard;
