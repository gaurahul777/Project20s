import React from 'react'
import DashBoardStatsGrid from './DashBoardStatsGrid'
import TransactionChart from './TransactionChart'
import { HiOutlineSearch } from 'react-icons/hi';
import { FcGraduationCap, FcMindMap } from 'react-icons/fc';

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashBoardStatsGrid />
      <TransactionChart />
      <div className="bg-white rounded-xl p-4  mb-2 flex flex-col flex-1 shadow-xl">
        <div className="w-full p-4 pb-1 border-b-2 border-slate-200 flex justify-between">
          <div className="flex-col  w-1/2">
            <h1 className="font-semibold text-xl pb-9">Product Sell</h1>
            <p className="text-slate-400 font-medium text-sm">Product Name</p>
          </div>
          <div className="flex-col w-1/2">
            <div className=" justify-around flex items-center pb-7">
              <div className="relative  ">
                <HiOutlineSearch
                  className=" absolute top-1 left-2 text-gray-400 "
                  fontSize={23}
                />
                <input
                  type="text"
                  placeholder="search..."
                  className="text-sm focus:outline-none placeholder-slate-500 active:outline-none h-8 w-[12rem]  rounded-xl pl-9 bg-slate-100 shadow-lg"
                />
              </div>
              <div className="bg-slate-100 text-slate-400 p-1 px-2 rounded-lg shadow-lg">
                Last 30 days
              </div>
            </div>
            <div className="flex  justify-between">
              <div className=" text-slate-400 pl-6 ">Stock</div>
              <div className=" text-slate-400 pl-12">Price</div>
              <div className=" text-slate-400">Total Sales</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-xl flex justify-between">
        <div className="w-1/2">
          <div className="flex gap-3 justify-start items-center">
            <div className="">
              {/* <img src="../image/img1.jpg" alt="img1" className=""/> */}
              <FcMindMap fontSize={40} />
            </div>
            <div>
              <h1 className="font-semibold">Sarphens illustration</h1>
              <p className="text-slate-400">
                lorem ipsum dollar corrected lapsinf etc
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2  flex justify-between items-center">
          <p className="pl-6">32 in stock</p>
          <p className="font-semibold pr-3">$45.99</p>
          <p className="pr-10 ">20</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl flex justify-between">
        <div className="w-1/2">
          <div className="flex gap-3 justify-start items-center">
            <div className="">
              {/* <img src="../image/img1.jpg" alt="img1" className=""/> */}
              <FcGraduationCap fontSize={40} />
            </div>
            <div>
              <h1 className="font-semibold">Abstract 3D</h1>
              <p className="text-slate-400">
                lorem ipsum dollar corrected lapsinf etc
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2  flex justify-between items-center">
          <p className="pl-6">32 in stock</p>
          <p className="font-semibold pr-3">$45.99</p>
          <p className="pr-10 ">20</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard