import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const DataPagination = ({ page, totalPages, onPageChange }: Props) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.filter(
    (p) => p === 1 || p === totalPages || (p >= page - 1 && p <= page + 1)
  );

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-t border-slate-200">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-slate-700">
          Page {page} of {totalPages || 1}
        </span>
        <span className="text-xs text-slate-500">
          • Showing {Math.min(10, (totalPages || 1) * 10)} entries
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Button
          disabled={page === 1}
          variant="outline"
          size="sm"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          className="h-9 px-3 rounded-lg border-slate-300 hover:bg-slate-50 hover:border-slate-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        
        <div className="hidden sm:flex items-center gap-1">
          {visiblePages.map((p, idx) => {
            const showEllipsis = idx > 0 && p - visiblePages[idx - 1] > 1;
            return (
              <React.Fragment key={p}>
                {showEllipsis && (
                  <span className="px-2 text-slate-400">...</span>
                )}
                <Button
                  variant={p === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => onPageChange(p)}
                  className={`h-9 w-9 rounded-lg transition-all ${
                    p === page
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                      : "border-slate-300 hover:bg-slate-50 hover:border-slate-400"
                  }`}
                >
                  {p}
                </Button>
              </React.Fragment>
            );
          })}
        </div>

        <Button
          disabled={page === totalPages || totalPages === 0}
          variant="outline"
          size="sm"
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          className="h-9 px-3 rounded-lg border-slate-300 hover:bg-slate-50 hover:border-slate-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

import React from "react";