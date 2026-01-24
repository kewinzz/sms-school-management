"use client";

import { routes } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        const isActive = item.href === pathname;
        const Icon = item.icon;

        return (
          <Link key={item.href} href={item.href}>
            <div
              className={cn(
                "flex items-center gap-4 p-3 rounded-md hover:text-primary font-semibold transition",
                isActive &&
                  "bg-blue-500 text-white shadow-sm hover-opacity-100",
              )}
            >
              <Icon className={cn("size-5", isActive && "text-white")} />
              {item.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export default Navigation;
