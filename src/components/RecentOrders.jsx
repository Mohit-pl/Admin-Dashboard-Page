import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi'


export default function RecentOrders() {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <div className="flex justify-between">
                <strong className="text-gray-700 font-medium">Recent Orders</strong>
                <div className="relative">
                    <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[16rem] h-8 pl-11 pr-4 rounded-sm"
                    />
                </div>
            </div>

            <div className="flex justify-between mt-4 align-centre justify-centre text-gray-400">
                <div>
                    <p>Product Name</p>
                </div>
                <div className="flex gap-16">
                    <p>Stock</p>
                    <p>Price</p>
                    <p>Total Price</p>
                </div>
            </div>
            <hr className="mt-2"/>

            <div className="relative flex justify-between mt-4 align-centre justify-centre ">
                <div className='flex flex-col'>
                    <p className='font-bold'>Abstract 3D</p>
                    <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
				<div className='lg:visible flex gap-24 items-center'>
					<span>32in stock</span>
					<span className=''>$45.99</span>
					<span>20</span>
				</div>
            </div>
        </div>
    )
}
