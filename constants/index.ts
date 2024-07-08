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

 