'use client'
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { db } from "@/utils/dbConnection";
import { AIOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import { eq } from 'drizzle-orm';
import { Templates } from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from 'lucide-react';

// Define the type for your result items
interface ResultItem {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string; // Adjust this based on your actual data structure
  createdBy: string;
  createdAt: string | null; // Ensure createdAt can be null or string
  wordCount: number;
}

const HistoryList: React.FC = () => {
  const { user } = useUser();
  const [result, setResult] = useState<ResultItem[]>([]); // Initialize with an empty array and specify the type
  const [loading, setLoading] = useState(false);
  const userEmail = user?.primaryEmailAddress?.emailAddress;

  const getData = async () => {
    setLoading(true);
    try {
      const fetchedResult = await db.select().from<typeof AIOutput>(AIOutput).where(eq(AIOutput.createdBy as any, userEmail));
      const resultWithWordCount: ResultItem[] = fetchedResult.map(item => ({
        id: item.id,
        formData: item.formData,
        aiResponse: item.aiResponse,
        templateSlug: item.templateSlug, // Ensure this matches your database structure
        createdBy: item.createdBy,
        createdAt: item.createdAt,
        wordCount: countWords(item.aiResponse),
      }));
      setResult(resultWithWordCount);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  const findTemplate = (slug: string) => {
    return Templates.find(template => template.slug === slug);
  };

  const countWords = (text: string | null) => {
    return text ? text.replace(/[#*]/g, '').split(/\s+/).filter(word => word.length > 0).length : 0;
  };

  return (
    <div className='overflow-y-auto'>
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
        {loading ? (
          <div className='flex justify-center items-center mx-auto mt-5'>
            <Loader2Icon className="animate-spin text-primary" />
          </div>
        ) : (
          result.map((item, index) => {
            const template = findTemplate(item.templateSlug); // Adjust property name if needed
            const formattedDate = item.createdAt // Handle null or undefined createdAt
            return (
              <div key={index} className='grid grid-cols-7 py-3 px-3'>
                <div className='col-span-2 flex gap-2 items-center'>
                  <img src={template?.icon} alt={template?.name} className='w-10 h-10' />
                  <h2>{template?.name}</h2>
                </div>
                <div className='col-span-2 line-clamp-3'>{item.aiResponse}</div>
                <div>{formattedDate}</div> {/* Display formatted date */}
                <div>{item.wordCount}</div>
                <div>
                  <Button variant={"secondary"} className="text-primary"
                    onClick={() => navigator.clipboard.writeText(item.aiResponse || '')}
                  >
                    Copy
                  </Button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default HistoryList;
