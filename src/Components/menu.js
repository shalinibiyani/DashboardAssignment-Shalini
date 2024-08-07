import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faHamburger, faUtensils } from '@fortawesome/free-solid-svg-icons';
import 'react-circular-progressbar/dist/styles.css';

const Menu = () => {
    return (
        <div className="w-full mx-auto bg-gray-800 rounded-lg p-6 pb-8">
            <div className="space-y-6">
                <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-red-800 flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faBullseye} className="text-orange-500" />
                        </div>
                        <span className="text-lg font-medium">Goals</span>
                    </div>
                    <div>
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faHamburger} className="text-blue-400" />
                        </div>
                        <span className="text-lg font-medium">Popular Dishes</span>
                    </div>
                    <div>
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-teal-800 flex items-center justify-center mr-3">
                            <FontAwesomeIcon icon={faUtensils} className="text-teal-400" />
                        </div>
                        <span className="text-lg font-medium">Menus</span>
                    </div>
                    <div>
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;