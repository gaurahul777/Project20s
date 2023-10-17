import React from 'react'
import {FcLikePlaceholder} from 'react-icons/fc';
import { HiOutlineSearch } from 'react-icons/hi';

function Header() {
  return (
    <div className=" bg-[#f5f6f8] h-16 p-5 flex justify-between px-8 items-center">
      <div className="font-semibold text-lg flex gap-x-2">
        <span>
        Hello Hemant,
        </span>
          <FcLikePlaceholder fontSize={25}/>
      </div>
          <div className='relative shadow-lg'>
              <HiOutlineSearch className=' absolute top-1 left-2 text-gray-400'fontSize={23}/>
        <input type='text' placeholder='search...' className='text-sm focus:outline-none placeholder-slate-500 active:outline-none h-8 w-[15rem]  rounded-lg pl-9 ' />
      </div>
    </div>
  );
}

export default Header