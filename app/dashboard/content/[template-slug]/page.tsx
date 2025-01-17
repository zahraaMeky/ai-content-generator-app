'use client'
import { useContext, useState } from "react";
import { PROPS } from "@/app/(type)/Type"
import FormSection from "../_components/FormSection"
import OutputSection from "../_components/OutputSecton"
import { Templates } from '@/app/(data)/Templates'
import { TEMPLATES } from '@/app/(type)/Type'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { chatSession } from "@/utils/AiModel"
import { db } from "@/utils/dbConnection";
import { AIOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/context/TotalUsageContext";
import { useRouter } from 'next/navigation';
import { UpdateCreditUsage } from "@/app/context/UpdateCreditUsage";
import { UserSubscriptionContext } from "@/app/context/UserSubscriptionContext";


const CreateNewContent = (props: PROPS) => {
    const [loading, setLoading] = useState(false);
    const [aiGeneratedOutput, setAiGeneratedOutput] = useState<string>();
    const {user} =useUser()
    const {totalUsage,setTotalUsage} = useContext(TotalUsageContext);
    const {updateUsage,setUpdateUsage} = useContext(UpdateCreditUsage);
    const {userSubscription,setUserSubscription} = useContext(UserSubscriptionContext);
    const router = useRouter()

    const selectedTemplate: TEMPLATES | undefined = Templates?.find((item) => item.slug === props.params["template-slug"]);

    const generateAiContent = async (formData: string) => {
        if (totalUsage > 10000 && !userSubscription) {
            router.push("/dashboard/billing");
            console.log("Please Upgrade");
            return; // Exit early or show alert dialog
        }
    
        setLoading(true);
        const selectedPrompt = selectedTemplate?.aiPrompt;
        const finalPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
    
        try {
            const result = await chatSession.sendMessage(finalPrompt);
            const responseText = await result?.response.text();
            console.log('responseText', responseText);
            setAiGeneratedOutput(responseText);
            if (formData && selectedTemplate?.slug && responseText) {
                await saveInDB(formData, selectedTemplate?.slug, responseText);
            }
            setLoading(false);
            setUpdateUsage(Date.now());
        } catch (error) {
            console.error('Error generating content:', error);
        }
    };
    
    const saveInDB = async (formData: string, slug: string, aiResponse: string) => {
        try {
            const result = await db.insert(AIOutput).values({
                formData: formData as string,
                templateSlug: slug as string,
                aiResponse: aiResponse as string,
                createdBy: user?.primaryEmailAddress?.emailAddress || '',
                createdAt: moment().format("DD/MM/YYYY")
            });
            console.log(result, user?.primaryEmailAddress?.emailAddress);
        } catch (error) {
            console.error('Error saving to database:', error);
        }
    };
    

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
                    <OutputSection aiGeneratedOutput = {aiGeneratedOutput}/>
                </div>
            </div>
        </div>
    )
}

export default CreateNewContent;
