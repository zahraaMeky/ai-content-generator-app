import { FileClock, Home, Settings, WalletCards } from "lucide-react";

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
      route: "//dashboard/setting",
      icon: Settings,
    },
    
  ];

 