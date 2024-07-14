'use client'
import React from "react";

const Charts: React.FC = () => {
  return (
    <>
      <section>
        <div className="flex m-4 p-1 gap-1">
          <div className="flex-1 px-2 justify-center w-8 bg-black shadow rounded h-300px">
            <div className="">
              <p className="text-white font-bold">Net Sales</p>
              <p className="py-1 text-white">N 100,000</p>
              <p className="text-green-300">+10%</p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-8 bg-black shadow rounded max-h-300px">
            <div className="">
              <p className="text-white font-bold">Earnings</p>
              <p className="py-1 text-white">N 35,000</p>
              <p className="text-green-300">-2%</p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-8  bg-black shadow rounded max-h-300px">
            <div className="">
              <p className="text-white font-bold">Page View</p>
              <p className="py-4 text-white">1210</p>
              <p className="text-green-300">+10%</p>
            </div>
          </div>
         </div> 
      </section>


      <section className="flex my-4 px-4 gap-3">
        <div className="flex m-4 gap-2">
          <div className="w-[80vw] h-[600px] bg-white rounded">
            <div className="">
            <p className="flex my-4 px-4 text-Black-300"> Product Analysis </p>
            </div>
        </div>
        </div>
      </section>

    </>
  );
};

export default Charts;