'use client'
import { useState, useEffect } from "react";
import { SELECTEDTEMPLATE } from "@/app/(type)/Type";
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Loader, Loader2Icon } from "lucide-react";

const FormSection = ({ selectedTemplate,userFormInput,loading}: SELECTEDTEMPLATE) => {
    const [formData, setFormData] = useState<any>();

    const handdleInputChange =(event:any)=>{
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log('formData',formData)

    }
    const onSubmit =(e:any)=>{
        e.preventDefault();
        userFormInput(formData)


    }
  return (
    <div className="shadow-md border rounded-lg p-5 bg-white">
      {selectedTemplate?.icon && (
        <Image
          src={selectedTemplate.icon}
          alt="icon"
          width={70}
          height={70}
        />
      )}
      <h2 className="font-bold text-2xl text-primary mb-2">{selectedTemplate?.name}</h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>
      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 my-2 mb-7">
            <label className="font-bold" htmlFor={item.name}>
              {item.label}
            </label>
            {item.field === 'input' && (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handdleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              />
            )}
            {item.field === 'textarea' && (
              <textarea
                name={item.name}
                onChange={handdleInputChange}
                required={item?.required}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              ></textarea>
            )}
          </div>
        ))}
        <Button type="submit"className="bg-primary w-full py-6" disabled={loading}>
            {loading&&<Loader2Icon className="animate-spin"/>}
            Generate Content
        </Button>

      </form>
    </div>
  );
};

export default FormSection;
