import { BookAIcon, BookCopy, BookImageIcon, BookTemplate, BookUpIcon, BookUserIcon, FileClock, HelpingHand, Home, LayoutTemplate, LayoutTemplateIcon, Settings, WalletCards } from "lucide-react";

export const navLinks = [
    {
      label: "Home",
      route: "/dashboard",
      icon: Home,
    },
    {
      label: "History",
      route: "/dashboard/history",
      icon: FileClock,
    },
    {
      label: "Billing",
      route: "/dashboard/billing",
      icon: WalletCards,
    },
    {
      label: "Setting",
      route: "/dashboard/setting",
      icon: Settings,
    },
    
  ];

  export const Features = [
    {
      label: "20+ templates",
      icon: LayoutTemplateIcon,
      desc: "20+ different types of AI-generated content that your app could offer",
    },
    {
      label: "Easy Copy",
      icon: BookCopy,
      desc: "Experience effortless content creation with Easy Copy delivers polished",
    },
    {
      label: "Free to Use",
      icon: BookUserIcon,
      desc: "free-to-use features designed to enhance your content creation journey.",
    },
    {
      label: "24/7 Support",
      icon: HelpingHand,
      desc: "24/7 support is here to ensure that you receive assistance whenever you need.",
    },
  ]

 
  export const plans = [
    {
      _id: 1,
      name: "Free",
      icon: "/free-plan.svg",
      price: 0,
      credits: "Free",
      inclusions: [
        {
          label: Intl.NumberFormat('en-US').format(10000) +" Credits",
          isIncluded: true,
        },
        {
          label: "Basic Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: false,
        },
        {
          label: "Priority Updates",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 2,
      name: "Pro Package",
      icon: "/free-plan.svg",
      price: 40,
      credits:'40$ / Month',
      inclusions: [
        {
          label: Intl.NumberFormat('en-US').format(100000) +" Credits",
          isIncluded: true,
        },
        {
          label: "Full Access to Services",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "Priority Updates",
          isIncluded: false,
        },
      ],
    },
    // {
    //   _id: 3,
    //   name: "Premium Package",
    //   icon: "/free-plan.svg",
    //   price: 199,
    //   credits: '199$ / Month',
    //   inclusions: [
    //     {
    //       label: Intl.NumberFormat('en-US').format(1000000) +" Credits",
    //       isIncluded: true,
    //     },
    //     {
    //       label: "Full Access to Services",
    //       isIncluded: true,
    //     },
    //     {
    //       label: "Priority Customer Support",
    //       isIncluded: true,
    //     },
    //     {
    //       label: "Priority Updates",
    //       isIncluded: true,
    //     },
    //   ],
    // },
 
  ];
  