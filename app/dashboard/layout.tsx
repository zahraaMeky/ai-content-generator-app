'use client'
import React, { useEffect, useState } from 'react';
import { TotalUsageContext } from "../context/TotalUsageContext";
import { UpdateCreditUsage } from "../context/UpdateCreditUsage";
import { UserSubscriptionContext } from "../context/UserSubscriptionContext";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Layout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [totalUsage, setTotalUsage] = useState<number>(0);
    const [userSubscription,setUserSubscription] = useState<boolean>(false);
    const [updateUsage, setUpdateUsage] = useState<any>();
    return (
      <PayPalScriptProvider options={{clientId:process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}}>
      <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
      <UserSubscriptionContext.Provider value={{userSubscription,setUserSubscription}}>
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
      </UserSubscriptionContext.Provider>
      </TotalUsageContext.Provider>
      </PayPalScriptProvider>

    );
  };
  
  export default Layout;
  