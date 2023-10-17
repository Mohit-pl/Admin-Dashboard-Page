import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

export default function DashboardStatsGrid() {
	return (
		<div className="sm:flex-col lg:flex-row sm:w-{80%} flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-16 w-16 flex items-center justify-center bg-sky-500">
					<IoBagHandle className="text-2xl h-5rem w-5rem text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Earning</span>
					<div className="flex items-center">
						<strong className="text-2xl text-gray-700 font-semibold">$198k</strong>
					</div>
					<p className='ml-{-7px}'><span className="text-sm text-green-500">↑37.8%</span> this month</p>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-16 w-16 flex items-center justify-center bg-orange-600">
					<IoPieChart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Orders</span>
					<div className="flex items-center">
						<strong className="text-2xl text-gray-700 font-semibold">$2.4k</strong>
					</div>
					<p className='ml-{-7px}'><span className="text-sm text-red-500">↓2%</span> this month</p>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-16 w-16 flex items-center justify-center bg-yellow-400">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Balance</span>
					<div className="flex items-center">
						<strong className="text-2xl text-gray-700 font-semibold">$2.4k</strong>
					</div>
					<p className='ml-{-7px}'><span className="text-sm text-red-500">↓2%</span> this month</p>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-16 w-16 flex items-center justify-center bg-green-600">
					<IoCart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Sales</span>
					<div className="flex items-center">
						<strong className="text-2xl text-gray-700 font-semibold">$89k</strong>
					</div>
					<p className='ml-{-7px}'><span className="text-sm text-green-500">↑11%</span> this week</p>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
