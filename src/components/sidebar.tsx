import Link from "next/link";
import Navigation from "./navigation";
import { DottedSeparator } from "./dotted-separator";
import { School } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isMobile?: boolean;
}

const Sidebar = ({ isMobile = false }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "h-full bg-blue-50 p-4 transition-all duration-300",
        isMobile ? "w-full" : "w-20 lg:w-64",
      )}
    >
      {/* Brand */}
      <Link
        href="/"
        className="
          flex items-center
          justify-center lg:justify-start
          my-4 font-bold text-lg
        "
      >
        <School className="size-6 text-blue-600" />

        {!isMobile && <span className="hidden lg:inline ml-2">Kemix</span>}

        {isMobile && <span className="ml-2">Kemix</span>}
      </Link>

      <DottedSeparator className="my-4" />

      <Navigation />
    </aside>
  );
};

export default Sidebar;
