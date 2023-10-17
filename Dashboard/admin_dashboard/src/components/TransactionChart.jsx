import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import CustomerPie from "./CustomerPie";


const data = [
  {
    name: "JAN",
    Earning: 900,
    Orders: 800,
    Balance: 1400,
  },
  {
    name: "FEB",
    Earning: 868,
    Orders: 967,
    Balance: 1506,
  },
  {
    name: "MAR",
    Earning: 1397,
    Orders: 1098,
    Balance: 989,
  },
  {
    name: "APRIL",
    Earning: 1480,
    Orders: 1200,
    Balance: 1228,
  },
  {
    name: "MAY",
    Earning: 1520,
    Orders: 1108,
    Balance: 1100,
  },
  {
    name: "JUNE",
    Earning: 1400,
    Orders: 680,
    Balance: 1700,
  },
  {
    name: "JULY",
    Earning: 900,
    Orders: 800,
    Balance: 1400,
  },
  {
    name: "AUG",
    Earning: 868,
    Orders: 967,
    Balance: 1506,
  },
  {
    name: "SEPT",
    Earning: 1397,
    Orders: 1098,
    Balance: 989,
  },
  {
    name: "OCT",
    Earning: 1480,
    Orders: 1200,
    Balance: 1228,
  },
  {
    name: "NOV",
    Earning: 1520,
    Orders: 1108,
    Balance: 1100,
  },
  {
    name: "DEC",
    Earning: 1400,
    Orders: 680,
    Balance: 1700,
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/composed-chart-in-responsive-container-pkqmy";

  render() {
    return (
      <div className="w-full flex flex-1 gap-x-4">
        <div className="bg-white rounded-xl w-[70%] h-[22rem] pb-12 shadow-xl">
          <div className=" flex justify-between w-[95%] px-2 items-center">
            <div className="p-2 ">
              <h1 className="font-semibold text-xl ">Overview</h1>
              <p className="text-slate-400 font-medium text-sm">
                Monthly Earning
              </p>
            </div>
            <div className="bg-slate-100 text-slate-400 px-2 p-1 rounded-lg shadow-lg">
              Quantity
            </div>
          </div>

          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="Balance"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="Orders" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="Earning" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="w-[30%] h-[22rem] rounded-xl shadow-xl bg-white items-center pb-20 justify-center">
          <div className=" flex justify-between w-[95%] px-2 items-center">
            <div className="p-2">
              <h1 className="font-semibold text-xl ">Customers</h1>
              <p className="text-slate-400 font-medium text-sm">
                Customer that buy products
              </p>
            </div>
          </div>

          <CustomerPie />
        </div>
      </div>
    );
  }
}
