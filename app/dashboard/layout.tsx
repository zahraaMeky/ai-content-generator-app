'use client'
import React, { useEffect, useState } from 'react';
import { TotalUsageContext } from "../context/TotalUsageContext";
import { UpdateCreditUsage } from "../context/UpdateCreditUsage";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Layout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [totalUsage, setTotalUsage] = useState<number>(0);
    const [updateUsage, setUpdateUsage] = useState<any>();
    return (
      <PayPalScriptProvider options={{clientId:process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}}>
      <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
        <UpdateCreditUsage.Provider value={{updateUsage,setUpdateUsage}}>
          <div className="bg-slate-100 min-h-screen">
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
      </PayPalScriptProvider>

    );
  };
  
  export default Layout;
  