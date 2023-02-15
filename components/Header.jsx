import Image from "next/image";
import React, { useState } from "react";
import { GlobeAltIcon, MagnifyingGlassIcon, UserIcon} from '@heroicons/react/24/outline'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";

const Header = ({placeholder}) => {

  const [searchKeyword, setSearchKeyword] = useState('')
  const [guestNumber, setGuestNumber] = useState(1)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const router = useRouter()


  const handleSelect = (selectedRange) => {
    setStartDate(selectedRange.selection.startDate)
    setEndDate(selectedRange.selection.endDate)
  }

  const selectionRange = {
    startDate, //startDate: startDate,
    endDate, //endDate: endDate,
    key: 'selection',
    
  }

  const searchContent = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchKeyword,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests: guestNumber
      }
    })
    setSearchKeyword('')
  }



	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-2 px-5 md:py-4 md:px-10">
      {/* LOGO */}
			<div className="relative flex items-center cursor-pointer" onClick={() => router.push('/')}>
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
					height={80}
					width={80}
          alt='logo'
					// fill
					className="object-contain object-left"
          
				/>
			</div>
      {/* SEARCH BAR */}
      <div className="flex justify-between items-center md:border-2 rounded-full px-2 my-">
        <input
          value={searchKeyword}
          onChange={e => setSearchKeyword(e.target.value)}
          className="bg-transparent flex-grow m-2 outline-none text-sm" 
          type="input" 
          placeholder={placeholder || 'Search Any Place...'}
          />
        <MagnifyingGlassIcon className="hidden md:inline-flex text-white bg-red-400 rounded-full p-2 h-8 cursor-pointer" /> 
      </div>
      {/* BECOME A HOST AND LOGIN SIDE */}
      <div className="flex items-center justify-end text-sm space-x-1 sm:space-x-2 md:space-x-4 ">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className=" hidden sm:inline-flex h-5 cursor-pointer"/>
        <button className="flex border-2 rounded-full p-1 md:p-2">
          {/* <Bars3Icon className="h-5"/> */}
          <UserIcon className="h-3 md:h-5"/>
        </button>
      </div>
      {searchKeyword && (
      <div className="col-span-3 mx-auto pt-5 place-items-center">
        <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={['#FD5B61']}
          onChange={handleSelect}
          // className='w-full'
        />
        <div className="flex items-center border-b mb-5 pb-2">
          <h2 className="text-2xl flex-grow font-semibold">Number of guests</h2>
          <UserIcon 
            className="h-5"
          />
          <input 
            type="number" 
            value={guestNumber} 
            onChange={e => setGuestNumber(e.target.value)} 
            min={1}
            className="w-12 pl-2 text-lg outline-none text-red-400"/>
        </div>

        {/* Cancel and Search buttons */}
        <div className="flex justify-between px-2">
          <button className="bg-gray-500 text-white px-5 py-2 rounded-full" onClick={() => setSearchKeyword("")}>Cancel</button>
          <button className="bg-red-400 text-white px-5 py-2 rounded-full" onClick={searchContent}>Search</button>
        </div>
      </div>
      )
    }
		</header>

    
	);
};

export default Header;