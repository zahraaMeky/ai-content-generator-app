'use client'
import React, { useContext, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { db } from "@/utils/dbConnection"
import { AIOutput,UserSubscription } from "@/utils/Schema"
import { useUser } from "@clerk/nextjs";
import {eq} from "drizzle-orm";
import { HISTORY } from "@/app/(type)/Type";
import { TotalUsageContext } from '@/app/context/TotalUsageContext';
import { UpdateCreditUsage } from '@/app/context/UpdateCreditUsage';
import { UserSubscriptionContext } from '@/app/context/UserSubscriptionContext';
import Link from 'next/link';
const UsageTrack = () => {
  const {user} = useUser()
  const {totalUsage,setTotalUsage} = useContext(TotalUsageContext);
  const {updateUsage,setUpdateUsage} = useContext(UpdateCreditUsage);
  const {userSubscription,setUserSubscription} = useContext(UserSubscriptionContext);
  const [maxWords, setMaxWords] = useState(10000);


  
    useEffect(() => {
        user&&getData()
        user&&IsUserSubscribe()
      },[user]);

      useEffect(() => {
        user&&getData()
      },[updateUsage&&user]);

    const getData =async ()=>{
        const result:HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy as any, user?.primaryEmailAddress?.emailAddress)); 
        countTotalUsage(result)
    }
    const countWords = (text: string) => {
      return text ? text.replace(/[#*]/g, '').split(/\s+/).filter(word => word.length > 0).length : 0;
    };
    
    const countTotalUsage = (result: HISTORY[]) => {
      let total: number = 0;
    
      result.forEach(element => {
        if (element.aiResponse) {
          const wordCount = countWords(element.aiResponse);
          console.log('wordCount', wordCount);
          total += wordCount;
        }
      });
      setTotalUsage(total)
      console.log('total', total);
    };
    const IsUserSubscribe =async()=>{
      const result = await db.select().from(UserSubscription).where(eq(UserSubscription.email as any, user?.primaryEmailAddress?.emailAddress));
      if(result){
        setUserSubscription(true)
        setMaxWords(100000)
      }

    }
  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-5">
            <div className="rounded-full bg-white h-2"
              style={{ width: `${(totalUsage / maxWords) * 100}%` }}
            >
            </div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/{Intl.NumberFormat('en-US').format(maxWords)} Credit Used</h2>
      </div>
      <div className='w-full my-3 bg-slate-200 text-center py-2 rounded-lg'>
        <Link href="/dashboard/billing" className=" text-primary">
          Upgrade
        </Link>
      </div>
      
    </div>
  )
}

export default UsageTrack
