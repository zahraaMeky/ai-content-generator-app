'use client'
import React, { useEffect, useState } from 'react';
import { TotalUsageContext } from "../context/TotalUsageContext";
import { UpdateCreditUsage } from "../context/UpdateCreditUsage";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
const Layout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [totalUsage, setTotalUsage] = useState<number>(0);
    const [updateUsage, setUpdateUsage] = useState<any>();
    return (
      <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
        <UpdateCreditUsage.Provider value={{updateUsage,setUpdateUsage}}>
          <div className="bg-slate-100 h-screen">
              <div className="md:w-64  hidden md:block fixed">
                  <Sidebar/>
              </div>
              <div className="md:ml-64">
                  <Header/>
                  {children}
              </div>
        </div>
        </UpdateCreditUsage.Provider>
      </TotalUsageContext.Provider>
    );
  };
  
  export default Layout;
  