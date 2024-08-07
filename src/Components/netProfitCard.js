import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const NetProfitCard = () => {
    const percentage = 70;

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-center mb-4 h-auto sm:h-32">
            <div className="sm:mb-0 mb-4 text-center sm:text-left">
                <div className="text-gray-400">Net Profit</div>
                <div className="text-4xl font-bold text-white">$6759.25</div>
                <div className="text-green-500 mt-2">
                    <span className="text-sm">▲ 3%</span>
                </div>
            </div>
            <div className='w-full sm:w-auto flex flex-col items-center sm:items-end'>
                <div className="w-20 h-20">
                    <CircularProgressbarWithChildren
                        value={percentage}
                        styles={buildStyles({
                            textColor: '#fff',
                            pathColor: '#3b82f6',
                            trailColor: '#1f2937',
                        })}
                    >
                        <div style={{ fontSize: 16, marginTop: -5 }}>
                            <strong>70%</strong>
                            <p style={{ fontSize: 8 }}>Goal <br /> Completed</p>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <p className='text-xs mt-2 sm:mt-6 text-center sm:text-right'>*The values here have been rounded off.</p>
            </div>
        </div>
    );
};

export default NetProfitCard;
