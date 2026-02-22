"use client";

import { MobileSidebar } from "./mobile-sidebar";
import { Bell, Search, Settings, User, Menu, X } from "lucide-react";
import { Input } from "./ui/input";

interface NavbarProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

export const Navbar = ({ onToggleSidebar, isSidebarOpen }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      <div className="px-3 sm:px-4 lg:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
        {/* Left Section */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Desktop Sidebar Toggle */}
          <button
            onClick={onToggleSidebar}
            className="hidden lg:flex h-9 w-9 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 items-center justify-center transition-colors flex-shrink-0"
          >
            {isSidebarOpen ? (
              <X className="h-5 w-5 text-slate-600" />
            ) : (
              <Menu className="h-5 w-5 text-slate-600" />
            )}
          </button>

          {/* Mobile Sidebar */}
          <div className="lg:hidden flex-shrink-0">
            <MobileSidebar />
          </div>
        </div>

        {/* Search - Takes available space */}
        <div className="flex-1 min-w-0 max-w-xl">
          <div className="relative">
            <Search className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            <Input
              type="text"
              placeholder="Search..."
              className="w-full h-9 sm:h-10 pl-9 sm:pl-10 pr-3 sm:pr-16 rounded-lg border border-slate-300 bg-slate-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-xs sm:text-sm text-slate-700 placeholder:text-slate-400"
            />
            <kbd className="hidden sm:flex absolute right-3 top-1/2 transform -translate-y-1/2 h-6 px-2 items-center gap-1 rounded border border-slate-300 bg-white text-xs font-medium text-slate-500 pointer-events-none">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
          {/* Notifications */}
          <button className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center transition-colors flex-shrink-0">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
            <span className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
          </button>

          {/* Settings */}
          <button className="hidden md:flex h-10 w-10 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 items-center justify-center transition-colors flex-shrink-0">
            <Settings className="h-5 w-5 text-slate-600" />
          </button>

          {/* User Profile */}
          <button className="flex items-center gap-1.5 sm:gap-2 h-9 sm:h-10 px-2 sm:px-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 transition-colors flex-shrink-0">
            <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
              <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
            </div>
            <span className="hidden sm:inline text-xs lg:text-sm font-medium text-slate-700 whitespace-nowrap">
              Admin
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
