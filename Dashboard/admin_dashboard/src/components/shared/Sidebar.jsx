import React from 'react'
import classNames from 'classnames';
import {FcDoughnutChart} from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/Navigation';
import { Link, useLocation } from 'react-router-dom';

const LinkClasses='flex items-center gap-2 font-light px-3 py-3 hover:bg-blue-950 hover:no-underline active:bg-blue-600 rounded-sm text-base'

function Sidebar() {
  return (
    <div className="bg-[#040440] text-white flex flex-col w-60 p-3">
      <div className="flex items-center gap-2 px-2 py-4 pb-8 border-b-2 border-blue-300">
        <FcDoughnutChart fontSize={24}/>
        <span className='text-lg font-medium'>Dashboard</span>
      </div>
      <div className="flex-1">{DASHBOARD_SIDEBAR_LINKS.map((item) =>
      (
        <SidebarLink key={item.key} item={item}/>
        
        
      
      ))}
      </div>
      {/* <div className='border-t-2 border-blue-300 p-2'>bottom part</div> */}
    </div>
  );
}

function SidebarLink({ item }) {
  const {pathname}=useLocation()
  return (
    <Link to={item.path} className={classNames(pathname===item.path ?'text-sky-300':'text-white', LinkClasses )}>
      <span className='text-xl'>{item.icon}</span>
      {item.label}
    </Link>
  )
}

export default Sidebar