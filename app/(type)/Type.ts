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