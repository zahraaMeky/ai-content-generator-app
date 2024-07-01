'use client'
import React, { useEffect } from 'react';
import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const path = usePathname();
  useEffect(() => {
    console.log("path",path);
  }, []);
  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
        <Image
          src="/logo.svg"
          alt="A beautiful landscape"
          width={120}
          height={100}
        />
      </div>
      <hr className='my-6 border'/>
      <ul className='mt-3'>
        {navLinks.map((link,index) => (
          <li key={index}>
            <Link
              href={link.route}
              className={`
                text-lg flex items-center gap-2 p-3 mb-2 hover:bg-primary hover:text-white 
                rounded-lg cursor-pointer transition-all ease-in-out
                ${path === link.route && 'bg-primary text-white'}
                `}
            >
              <span> <link.icon className='w-6 h-6'/></span>
              <span>{link.label}</span>
            
            </Link>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default Sidebar
