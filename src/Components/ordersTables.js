import React from 'react';
import 'tailwindcss/tailwind.css';

const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Jane Cooper', orderNo: '48965786', amount: '$365.02', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78958215', amount: '$45.88', status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

const statusColors = {
    Delivered: 'bg-green-500',
    Cancelled: 'bg-red-500',
    Pending: 'bg-yellow-500',
};

const OrdersTable = () => {
    return (
        <div className=" items-center w-full justify-center bg-gray-900 text-white pt-4 px-0 ">
            <div className="w-full  p-6 bg-gray-800 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-left">Recent Orders</h2>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-full table-auto">
                        <thead>
                            <tr className="text-left text-gray-400">
                                <th className="pb-4 text-sm sm:text-base">Customer</th>
                                <th className="pb-4 text-sm sm:text-base">Order No.</th>
                                <th className="pb-4 text-sm sm:text-base">Amount</th>
                                <th className="pb-4 text-sm sm:text-base">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index} className="border-t border-gray-700">
                                    <td className="py-4 flex items-center">
                                        <img className="w-8 h-8 rounded-full mr-3" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                        <span className="text-sm sm:text-base">{order.customer}</span>
                                    </td>
                                    <td className="py-4 text-left text-sm sm:text-base">{order.orderNo}</td>
                                    <td className="py-4 text-left text-sm sm:text-base">{order.amount}</td>
                                    <td className="py-4 text-left">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs sm:text-sm ${statusColors[order.status]}`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrdersTable;
