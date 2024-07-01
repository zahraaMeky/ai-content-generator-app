'use client'
import { useState, useEffect } from "react";
import { Templates } from "@/app/(data)/Templates"
import TemplateCard from "./TemplateCard";
import { TEMPLATES } from "@/app/(type)/Type";

const TemplateListsSection = ({usersearchInput}:any) => {
  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    if(usersearchInput){
      const filterTemplate = Templates.filter(item => item.name.toLowerCase().includes(usersearchInput.toLowerCase()));
      setTemplateList(filterTemplate)
    }
    else{
      setTemplateList(Templates)
    }
    console.log("searchInput",usersearchInput)
  },[usersearchInput]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
       {templateList.map((item: TEMPLATES, index: number) => ( 
        <TemplateCard {...item}  key={index} />
       ))}
    </div>
  )
}

export default TemplateListsSection
