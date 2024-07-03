export interface TEMPLATES {
    name: string;
    desc: string;
    category: string;
    icon: string;
    aiPrompt: string;
    slug: string;
    form?:Form[];
  }
  export interface Form {
    label: string;
    field: string;
    name: string;
    required?: boolean;
  }
  export interface PROPS {
    params:{
      'template-slug': string;
      aiGeneratedOutput:string
    }
   
  }
  export interface SELECTEDTEMPLATE  {
    selectedTemplate: TEMPLATES; 
    userFormInput:any,
    loading:boolean

  }