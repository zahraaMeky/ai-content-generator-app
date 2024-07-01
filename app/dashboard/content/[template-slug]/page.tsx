'use client'
import { useState } from "react";
import { PROPS } from "@/app/(type)/Type"
import FormSection from "../_components/FormSection"
import OutputSection from "../_components/OutputSecton"
import { Templates } from '@/app/(data)/Templates'
import { TEMPLATES } from '@/app/(type)/Type'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { chatSession } from "@/utils/AiModel"

const CreateNewContent = (props: PROPS) => {
    const [loading, setLoading] = useState(false);
    const [generatedContent, setGeneratedContent] = useState("");

    const selectedTemplate: TEMPLATES | undefined = Templates?.find((item) => item.slug === props.params["template-slug"]);

    const generateAiContent = async (formData: any) => {
        if (!selectedTemplate) {
            console.error('No template selected');
            return;
        }
        setLoading(true);
        const selectedPrompt = selectedTemplate.aiPrompt;
        const finalPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
        try {
            const result = await chatSession.sendMessage(finalPrompt);
            const responseText = await result.response.text();
            setGeneratedContent(responseText);
        } catch (error) {
            console.error('Error generating content:', error);
        }
        setLoading(false);
    }

    if (!selectedTemplate) {
        return (
            <div className="p-10">
                <Link href="/dashboard">
                    <Button>
                        <ArrowLeft />
                        <span>Back</span>
                    </Button>
                </Link>
                <p className="text-red-500">Template not found</p>
            </div>
        );
    }

    return (
        <div className="p-10">
            <Link href="/dashboard">
                <Button>
                    <ArrowLeft />
                    <span>Back</span>
                </Button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
                <FormSection 
                    selectedTemplate={selectedTemplate}
                    userFormInput={(value: any) => generateAiContent(value)}
                    loading={loading}
                />
                <div className="col-span-2">
                    <OutputSection content={generatedContent} />
                </div>
            </div>
        </div>
    )
}

export default CreateNewContent;
