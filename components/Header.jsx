import Image from "next/image";
import React from "react";
import {Bars3Icon, GlobeAltIcon, MagnifyingGlassIcon, UserIcon} from '@heroicons/react/24/outline'

const Header = () => {
	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-2 px-5 md:py-4 md:px-10">
      {/* LOGO */}
			<div className="relative flex items-center cursor-pointer">
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
					height={80}
					width={80}
					// fill
					className="object-contain object-left"
				/>
			</div>
      {/* SEARCH BAR */}
      <div className="flex justify-between items-center md:border-2 rounded-full px-2 my-">
        <input className="bg-transparent flex-grow m-2 outline-none text-sm" type="input" placeholder="Search Any Place..."/>
        <MagnifyingGlassIcon className="hidden md:inline-flex text-white bg-red-400 rounded-full p-2 h-8" /> 
      </div>
      {/* BECOME A HOST AND LOGIN SIDE */}
      <div className="flex items-center justify-end text-sm space-x-1 md:space-x-4 ">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-5 cursor-pointer"/>
        <button className="flex border-2 rounded-full p-1 md:p-2">
          {/* <Bars3Icon className="h-5"/> */}
          <UserIcon className="h-3 md:h-5"/>
        </button>
      </div>
		</header>
	);
};

export default Header;