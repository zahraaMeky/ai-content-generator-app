import { TEMPLATES } from "@/app/(type)/Type"
import Image from 'next/image';
import Link from "next/link";

const TemplateCard = (item: TEMPLATES) => {
  return (
    <Link href={`/dashboard/content/${item.slug}`} className="p-5 shadow-md flex flex-col rounded-md bg-white border gap-3 cursor-pointer
    hover:scale-105 transition-all">
       <Image
          src={item.icon}
          alt="icon"
          width={50}
          height={50}
        />
        <h2 className="font-medium text-lg">{item.name}</h2>
        <p className="text-gray-500 line-clamp-3">{item.desc}</p>
    </Link>
  )
}

export default TemplateCard
