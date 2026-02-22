"use client";

import { routes } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  isOpen?: boolean;
  isMobile?: boolean;
}

const Navigation = ({ isOpen = true, isMobile = false }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {routes.map((item) => {
        const isActive = item.href === pathname;
        const Icon = item.icon;

        return (
          <Link key={item.href} href={item.href}>
            <div
              className={cn(
                "group flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all duration-200",
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white",
                !isOpen && !isMobile && "justify-center"
              )}
              title={!isOpen && !isMobile ? item.label : undefined}
            >
              <Icon
                className={cn(
                  "h-5 w-5 shrink-0 transition-transform group-hover:scale-110",
                  isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                )}
              />
              {(isMobile || isOpen) && (
                <>
                  <span className={cn(
                    "truncate transition-opacity text-xs sm:text-sm",
                    !isOpen && !isMobile && "opacity-0 w-0"
                  )}>
                    {item.label}
                  </span>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="ml-auto">
                      <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                    </div>
                  )}
                </>
              )}
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
