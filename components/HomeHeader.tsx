import React from "react"
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDownRight, ArrowLeft, ArrowLeftRight, ArrowRight, ArrowRightIcon, LucideCircleArrowRight } from "lucide-react";
const HomeHeader = () => {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <Image
            className="
                hidden
                lg:block
                absolute
                top-1/2
                -translate-y-1/2
                -left-24
                xl:-left-2
                "
            src="/DM-2.webp"
            alt="A beautiful landscape"
            width={120}
            height={100}
            />
            <Image
            className="
                hidden
                lg:block
                absolute
                top-1/2
                -translate-y-1/2
                -right-24
                xl:-right-2
                "
            src="/DM-2.webp"
            alt="A beautiful landscape"
            width={120}
            height={100}
            />
        <div className="flex flex-col gap-6 justify-center items-center max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div>
                    <Link href="/dashboard"  className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200">
                        Ai Content Membership - Join Now
                        <LucideCircleArrowRight/>
                    </Link>
            </div>
            <div>
                <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">AI Content 
                    <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Generator</span>
                </h1>
            </div>
            <div className="mt-3 max-w-3xl text-center mx-auto">
                <p className="text-lg text-gray-600 dark:text-neutral-400">Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.</p>
            </div>
            <div className="mt-3">
            <Link href="/dashboard" className="inline-flex justify-center items-center  gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800">
                <span>Get started</span>
                <ArrowRightIcon/>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default HomeHeader
