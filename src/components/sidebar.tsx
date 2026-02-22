import Link from "next/link";
import Navigation from "./navigation";
import { DottedSeparator } from "./dotted-separator";
import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isMobile?: boolean;
  isOpen?: boolean;
}

const Sidebar = ({ isMobile = false, isOpen = true }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 transition-all duration-300",
        isMobile ? "w-full" : isOpen ? "w-64" : "w-20"
      )}
    >
      {/* Brand */}
      <Link
        href="/"
        className={cn(
          "flex items-center px-4 py-6 group transition-all",
          isOpen ? "justify-start" : "justify-center"
        )}
      >
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all flex-shrink-0">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>

        {(isMobile || isOpen) && (
          <div className={cn("ml-3 transition-opacity", !isOpen && !isMobile && "opacity-0")}>
            <span className="text-base sm:text-lg font-bold text-white whitespace-nowrap">
              Kemix
            </span>
            <p className="text-xs text-slate-400 whitespace-nowrap">
              School Management
            </p>
          </div>
        )}
      </Link>

      <DottedSeparator className="my-4 mx-4 opacity-20" />

      {/* Navigation */}
      <div className="px-3 py-2">
        <Navigation isOpen={isOpen} isMobile={isMobile} />
      </div>

      {/* Footer */}
      {!isMobile && isOpen && (
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
            <p className="text-xs font-medium text-white mb-1">Need Help?</p>
            <p className="text-xs text-slate-400 mb-2">
              Check our documentation
            </p>
            <button className="w-full h-8 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors">
              Get Support
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
