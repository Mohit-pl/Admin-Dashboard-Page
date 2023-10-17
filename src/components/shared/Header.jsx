import React, { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

export default function Header() {
	const navigate = useNavigate()

	return (
		<div className="bg-white h-16 px-4 flex flex-row-reverse items-center border-b border-gray-200 justify-between">
			<div className="relative">
				<HiOutlineSearch fontSize={20} className="sm:hidden lg:visible text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
				<input
					type="text"
					placeholder="Search..."
					className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[22rem] h-10 pl-11 pr-4 rounded-sm"
				/>
			</div>

			<div>
				<h2 className="font-bold">Hello Shahrukh👋,</h2>
			</div>
			
		</div>
	)
}
