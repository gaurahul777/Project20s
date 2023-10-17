import React from 'react'
import { AiFillDollarCircle, AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import {FcDocument} from 'react-icons/fc'
import { TfiWallet } from "react-icons/tfi";
import { BsCartFill } from "react-icons/bs";
function DashBoardStatsGrid() {
    return (
      <div className="flex gap-2 w-full ">
        <BoxWrapper>
          <div>
            <AiFillDollarCircle fontSize={70} className="text-[#47d672]" />
          </div>
          <div className="flex-col">
            <span className="text-sm text-slate-400">Earning</span>
              <h1 className="font-bold">$198k</h1>

              <div className="flex items-center gap-x-1">
                <p className="text-[#47d672] font-semibold text-sm">
                  <AiOutlineArrowUp fontSize={20} fontWeight={900} />
                </p>
                <span className="font-semibold text-[12px] text-[#47d672] ">
                  37.8%
                </span>
                <span className="text-[13px]"> this month</span>
              </div>
            
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div>
            <FcDocument fontSize={70} className="text-[#47d672]" />
          </div>
          <div className="flex-col">
            <span className="text-sm text-slate-400">Orders</span>

            <div className="flex-col ">
              <h1 className="font-bold">$2.4k</h1>

              <div className="flex items-center gap-1">
                <p className="text-red-700 font-semibold text-sm">
                  <AiOutlineArrowDown fontSize={20} fontWeight={900} />
                </p>
                <span className="font-semibold text-sm text-red-700">2%</span>
                <span className="text-[14px]"> this month</span>
              </div>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div>
            <TfiWallet fontSize={70} className="text-red-600" />
          </div>
          <div className="flex-col">
            <span className="text-sm text-slate-400">Balance</span>

            <div className="flex-col ">
              <h1 className="font-bold">$2.4k</h1>

              <div className="flex items-center gap-1">
                <p className="text-red-700 font-semibold text-sm">
                  <AiOutlineArrowUp fontSize={20} fontWeight={900} />
                </p>
                <span className="font-semibold text-sm text-red-700">2%</span>
                <span className="text-[14px]"> this month</span>
              </div>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div>
            <BsCartFill fontSize={70} className="text-[#47d672]" />
          </div>
          <div className="flex-col">
            <span className="text-sm text-slate-400">Products</span>

            <div className="flex-col ">
              <h1 className="font-bold">$89k</h1>

              <div className="flex items-center gap-1">
                <p className="text-[#47d672] font-semibold text-sm">
                  <AiOutlineArrowUp fontSize={20} fontWeight={900} />
                </p>
                <span className="font-semibold text-sm text-[#47d672] ">
                  11%
                </span>
                <span className="text-[14px]"> this month</span>
              </div>
            </div>
          </div>
        </BoxWrapper>
      </div>
    );
}


export default DashBoardStatsGrid

function BoxWrapper({ children }) {
    return(
    <div className="bg-white rounded-xl shadow-lg p-4 flex-1 border border-gray-200 flex gap-2 items-center">
        {children}
        </div>
    )
}