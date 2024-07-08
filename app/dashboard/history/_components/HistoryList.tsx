'use client'
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { db } from "@/utils/dbConnection";
import { AIOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import { eq } from 'drizzle-orm';
import { Templates } from "@/app/(data)/Templates";
import { TEMPLATES } from "@/app/(type)/Type";
import { Button } from "@/components/ui/button";

// Utility function to count words in a string
const countWords = (text) => {
  return text ? text.replace(/[#*]/g, '').split(/\s+/).filter(word => word.length > 0).length : 0;
};

const HistoryList = () => {
  const { user } = useUser();
  const [result, setResult] = useState([]);
  

  const getData = async () => {
    try {
      const fetchedResult = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
      const resultWithWordCount = fetchedResult.map(item => ({
        ...item,
        wordCount: countWords(item.aiResponse)
      }));
      setResult(resultWithWordCount);
      console.log('result', resultWithWordCount);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  const findTemplate = (slug) => {
    return Templates.find(template => template.slug === slug);
  };

  return (
    <div className='m-5 p-5 rounded-lg bg-white'>
      <h2 className='font-bold text-3xl'>History</h2>
      <p className='text-gray-500'>Search your previously generated AI content</p>
      <div className='grid grid-cols-7 bg-secondary py-3 px-3 mt-5'>
        <h2 className='col-span-2'>TEMPLATE</h2>
        <h2 className='col-span-2'>AI RESP</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>
      <div>
        {result.map((item, index) => {
          const template = findTemplate(item.templateSlug); // Adjust property name if needed
          return (
            <div key={index} className='grid grid-cols-7 py-3 px-3'>
              <div className='col-span-2 flex gap-2 items-center'>
                <img src={template?.icon} alt={template?.name} className='w-10 h-10' />
                <h2>{template?.name}</h2>
              </div>
              <div className='col-span-2 line-clamp-3'>{item.aiResponse}</div>
              <div>{moment(item.createdAt).format("DD/MM/YYYY")}</div>
              <div>{item.wordCount}</div>
              <div>
                <Button variant={"secondary"} className="text-primary"
                  onClick = {()=>navigator.clipboard.writeText(item.aiResponse)}
                  >
                Copy</Button></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryList;
