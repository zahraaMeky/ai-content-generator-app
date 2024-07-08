import React from 'react'
import { Features } from '@/constants/'
const FeaturesContent = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
                {Features.map((feature, index) => (
                    <div key={index} className='flex flex-col gap-2'>
                        <div className="bg-gradient-to-tl from-blue-600 to-violet-600 text-white size-12 rounded-xl p-4 flex justify-center items-center">
                            <feature.icon />
                        </div>
                    <h3 className='group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400"'>{feature.label}</h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">{feature.desc}</p>
                    </div>
                ))}
        </div>
    </div>
  
  )
}

export default FeaturesContent
