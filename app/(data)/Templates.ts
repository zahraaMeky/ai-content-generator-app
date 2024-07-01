export const Templates = [
  {
    name: "Blog Title",
    desc: "An AI tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: "/4186534.png",
    aiPrompt: "Give me 5 blog topic ideas in bullet points based on the given niche & outline and present the result in Rich Text Editor format.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter Your blog niche",
        field: "input",
        name: "niche",
        required: true
      },
      {
        label: "Enter Your blog outline",
        field: "textarea",
        name: "outline",
        required: true
      }
    ]
  },
  {
    name: "Blog Content",
    desc: "An AI tool that generates engaging blog content based on your chosen topic and outline.",
    category: "Blog",
    icon: "/4905454.png",
    aiPrompt: "Generate blog content based on the given topic and outline, and provide the results in Rich Text Editor format.",
    slug: "blog-content-generation",
    form: [
      {
        label: "Enter Your blog topic",
        field: "input",
        name: "topic",
        required: true
      },
      {
        label: "Enter Your blog outline here",
        field: "textarea",
        name: "outline",
        required: true
      }
    ]
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that generates catchy and viral-worthy blog topic ideas in your chosen language.",
    category: "Blog",
    icon: "/11497847.png",
    aiPrompt: "Generate blog topic ideas based on the given niche and outline, and provide the results in Rich Text Editor format.",
    slug: "blog-topic-ideas",
    form: [
      {
        label: "Enter Your blog niche",
        field: "input",
        name: "niche",
        required: true
      },
      {
        label: "Enter Your blog outline here",
        field: "textarea",
        name: "outline",
        required: true
      }
    ]
  },
  {
    name: "YouTube SEO Title",
    desc: "An AI tool that generates SEO-optimized titles for YouTube videos.",
    category: "YouTube Tools",
    icon: "/402075.png",
    aiPrompt: "Give me the best SEO-optimized high-ranked 5 title ideas for your YouTube videos based on the video content and target keywords.",
    slug: "youtube-seo-title-generator",
    form: [
      {
        label: "Enter Your YouTube video topic keywords",
        field: "input",
        name: "keywords",
        required: true
      },
      {
        label: "Enter Your YouTube description outline here",
        field: "textarea",
        name: "outline"
      }
    ]
  },
  {
    name: "YouTube Description",
    desc: "An AI tool that generates engaging and SEO-optimized descriptions for YouTube videos.",
    category: "YouTube Tools",
    icon: "/402075.png",
    aiPrompt: "Generate an engaging and SEO-optimized description for a YouTube video based on the provided video content and target keywords.",
    slug: "youtube-description-generator",
    form: [
      {
        label: "Enter Your video content",
        field: "textarea",
        name: "content",
        required: true
      },
      {
        label: "Enter Your target keywords (comma-separated)",
        field: "input",
        name: "keywords",
        required: true
      }
    ]
  },
  {
    name: "YouTube Tags",
    desc: "An AI tool that generates SEO-optimized tags for YouTube videos.",
    category: "YouTube Tools",
    icon: "/402075.png",
    aiPrompt: "Generate SEO-optimized tags for your YouTube videos based on the provided video content and target keywords.",
    slug: "youtube-tags-generator",
    form: [
      {
        label: "Enter Your video content",
        field: "textarea",
        name: "content",
        required: true
      },
      {
        label: "Enter Your target keywords (comma-separated)",
        field: "input",
        name: "keywords",
        required: true
      }
    ]
  },
  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing articles or blog posts to make them plagiarism-free and capable of bypassing AI detectors.",
    category: "Writing Tools",
    icon: "/4905454.png",
    aiPrompt: "Rewrite the given article or blog post to make it plagiarism-free and ensure it bypasses AI detectors.",
    slug: "rewrite-article-plagiarism-free",
    form: [
      {
        label: "Enter the article or blog post content",
        field: "textarea",
        name: "content",
        required: true
      }
    ]
  },
  {
    name: "Text Improver",
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
    category: "Writing Tools",
    icon: "/4905454.png",
    aiPrompt: "Refine the given text to eliminate errors and redundancies, provide a comprehensive tone analysis, and suggest better word choices.",
    slug: "text-improver",
    form: [
      {
        label: "Enter the text you want to improve",
        field: "textarea",
        name: "content",
        required: true
      }
    ]
  },
  {
    name: "Add Emojis to Text",
    desc: "This tool enhances your text by adding relevant emojis, making it more engaging and expressive.",
    category: "Writing Tools",
    icon: "/2584606.png",
    aiPrompt: "Enhance the given text by adding relevant emojis to make it more engaging and expressive.",
    slug: "add-emojis-to-text",
    form: [
      {
        label: "Enter the text you want to enhance",
        field: "textarea",
        name: "content",
        required: true
      }
    ]
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "An AI tool that generates new and trending Instagram ideas based on your niche.",
    category: "Social Media Tools",
    icon: "/15713420.png",
    aiPrompt: "Generate new and trending Instagram ideas based on your niche.",
    slug: "instagram-post-reel-idea",
    form: [
      {
        label: "Enter Your Instagram niche",
        field: "input",
        name: "niche",
        required: true
      }
    ]
  },
  {
    name: "English Grammar Check",
    desc: "An AI tool that corrects your English grammar errors in text.",
    category: "Writing Tools",
    icon: "/12596700.png",
    aiPrompt: "Correct the English grammar errors in the provided text.",
    slug: "english-grammar-check",
    form: [
      {
        label: "Enter the text you want to check",
        field: "textarea",
        name: "content",
        required: true
      }
    ]
  },
  {
    name: "Tagline Generator",
    desc: "An AI tool that assists in creating the perfect tagline for your brand.",
    category: "Marketing Tools",
    icon: "/2178616.png",
    aiPrompt: "Generate a tagline that stands out for your brand.",
    slug: "tagline-generator",
    form: [
      {
        label: "Enter details about your brand and the desired tone of the tagline",
        field: "textarea",
        name: "details",
        required: true
      }
    ]
  },
  {
    name: "Product Description",
    desc: "Your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    category: "E-commerce Tools",
    icon: "/679922.png",
    aiPrompt: "Create captivating and keyword-rich e-commerce product descriptions to boost online sales.",
    slug: "product-description-generator",
    form: [
      {
        label: "Enter details about your product and target audience",
        field: "textarea",
        name: "details",
        required: true
      }
    ]
  },
  {
    name: "Code Generator",
    desc: "An AI tool to generate programming code in any language based on user requirements.",
    category: "Programming Tools",
    icon: "/6062646.png",
    aiPrompt: "Generate programming code in any language based on the provided requirements.",
    slug: "code-generator",
    form: [
      {
        label: "Enter programming problem statement or requirements",
        field: "textarea",
        name: "requirements",
        required: true
      },
      {
        label: "Select programming language",
        field: "select",
        name: "language",
        options: ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift", "Go", "PHP", "TypeScript", "Other"],
        required: true
      }
    ]
  },
  {
    name: "Code Explainer",
    desc: "An AI tool to explain programming code in any language.",
    category: "Programming Tools",
    icon: "/8488751.png",
    aiPrompt: "Explain the provided programming code in any language.",
    slug: "code-explainer",
    form: [
      {
        label: "Enter programming code",
        field: "textarea",
        name: "code",
        required: true
      },
      {
        label: "Select programming language",
        field: "select",
        name: "language",
        options: ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift", "Go", "PHP", "TypeScript", "Other"],
        required: true
      }
    ]
  },
  {
    name: "Code Bug Detector",
    desc: "An AI tool to analyze your input (like error messages and code snippets) to pinpoint and fix bugs, offering detailed solutions and alternatives.",
    category: "Programming Tools",
    icon: "/4426267.png",
    aiPrompt: "Analyze your input (error messages or code snippets) to pinpoint bugs and provide detailed solutions.",
    slug: "code-bug-detector",
    form: [
      {
        label: "Enter error message or code snippet",
        field: "textarea",
        name: "input",
        required: true
      },
      {
        label: "Additional context (optional)",
        field: "textarea",
        name: "context"
      }
    ]
  }
];
