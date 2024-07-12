'use client'
import React, { useEffect } from 'react';
import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import UsageTrack from './UsageTrack';
import Link from 'next/link'

const Sidebar = () => {
  const path = usePathname();
  useEffect(() => {
    console.log("path",path);
  }, []);
  return (
    <div className='h-screen p-5 shadow-sm border bg-white relative'>
      <Link href="/" className='flex justify-center'>
        <Image
          src="/logo.svg"
          alt="A beautiful landscape"
          width={120}
          height={100}
        />
      </Link>
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
      {/* user credits */}
      <div className='absolute bottom-10 left-0 w-full'>
        <UsageTrack/>
      </div>
    </div>
  )
}

export default Sidebar
