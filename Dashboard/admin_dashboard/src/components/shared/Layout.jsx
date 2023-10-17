import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';
import Header from './Header';
function Layout() {
  return (
    <div className="flex flex-row bg-[#f5f6f8]  w-screen">
<Sidebar/>
      <div className='flex-1'>
      <Header/>

        <div className='p-4'>{<Outlet />}
        </div>

      </div>
    </div>
  );
}

export default Layout