'use client'
import { useState } from "react";
import { PROPS } from "@/app/(type)/Type"
import FormSection from "../_components/FormSection"
import OutputSecton from "../_components/OutputSecton"
import { Templates } from '@/app/(data)/Templates'
import { TEMPLATES } from '@/app/(type)/Type'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {chatSession} from "@/utils/AiModel"
const CreateNewContent = (props:PROPS) => {
    const [loading, setLoading] = useState(false);

    console.log(props.params["template-slug"])
    const selectedTemplate: TEMPLATES | undefined = Templates?.find((item) => item.slug === props.params["template-slug"]);
    
    const GeneateAiContent =async(formData:any)=>{
        setLoading(true)
        const selectedPrompt = selectedTemplate?.aiPrompt
        const finalPrompt=JSON.stringify(formData)+", "+selectedPrompt
        const result = await chatSession.sendMessage(finalPrompt);
        console.log(result.response.text())
        setLoading(false)

    }
  return (
    <div className="p-10">
        <Link href="/dashboard">
            <Button><ArrowLeft/><span>Back</span></Button>
          
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection selectedTemplate={selectedTemplate}
        userFormInput={(value:any)=>GeneateAiContent(value)}
        loading = {loading}
        />
        <div className="col-span-2">
            <OutputSecton/>
        </div>
        </div>
    </div>
  )
}

export default CreateNewContent
