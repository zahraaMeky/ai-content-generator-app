'use client'
import { plans } from '@/constants'
import Image from 'next/image';
import { SignedIn, useUser} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Checkout from "./_components/Checkout"
const Billing = () => {

  const {user}=useUser();
  const userEmail: string = user?.primaryEmailAddress?.emailAddress ?? "";

  return (
    <div className='overflow-y-auto'>
    <ul className="m-5 p-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-9 xl:grid-cols-3">
      {plans.map((plan) => (
        <li key={plan.name} className="w-full rounded-[16px] border-2 border-purple-200/20 bg-white p-8 shadow-xl shadow-purple-200/20 lg:max-w-none">
          <div className="flex justify-center items-center flex-col gap-3">
            <Image src={plan.icon} alt="check" width={50} height={50} />
            <p className="font-semibold text-[20px] leading-[140%] mt-2 text-primary">
              {plan.name}
            </p>
            <p className="max-w-[500px] flex-wrap text-center text-white shadow-sm text-dark-600">${plan.price}</p>
            <p className="font-normal text-[16px] leading-[140%]">{plan.credits} Credits</p>
          </div>

          {/* Inclusions */}
          <ul className="flex flex-col gap-5 py-9">
            {plan.inclusions.map((inclusion) => (
              <li
                key={plan.name + inclusion.label}
                className="flex items-center gap-4"
              >
                <Image
                  src={`/${
                    inclusion.isIncluded ? "check.svg" : "cross.svg"
                  }`}
                  alt="check"
                  width={24}
                  height={24}
                />
                <p className="font-normal text-[16px] leading-[140%]">{inclusion.label}</p>
              </li>
            ))}
          </ul>

          {plan.name === "Free" ? (
            <Button variant="outline" className="w-full rounded-full bg-purple-100 bg-cover text-primary hover:text-purple-500">
              Free Consumable
            </Button>
          ) : (
            <SignedIn>
              <Checkout
                plan={plan.name}
                amount={plan.price}
                credits={plan.credits}
                buyerEmail={userEmail}
              />
            </SignedIn>
          )}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Billing
