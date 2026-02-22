"use client";

import { BigCalendar } from "@/features/calendars/components/big-calendar";
import { Calendar as CalendarIcon, Plus, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CalendarView = () => {
  const events = [
    {
      title: "Math Exam - Grade 10",
      start: new Date(2024, 2, 15, 9, 0),
      end: new Date(2024, 2, 15, 11, 0),
    },
    {
      title: "Parent-Teacher Meeting",
      start: new Date(2024, 2, 20, 14, 0),
      end: new Date(2024, 2, 20, 16, 0),
    },
    {
      title: "Sports Day",
      start: new Date(2024, 2, 25, 8, 0),
      end: new Date(2024, 2, 25, 17, 0),
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <CalendarIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  School Calendar
                </h1>
                <p className="text-sm text-slate-600 mt-1">
                  Manage events, exams, and important dates
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-10 px-4 rounded-lg border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 px-4 rounded-lg border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button
                size="sm"
                className="h-10 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-500/30 transition-all"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Event
              </Button>
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <BigCalendar events={events} />
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Upcoming Events
          </h2>
          <div className="space-y-3">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all"
              >
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <CalendarIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900">
                    {event.title}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    {event.start.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    •{" "}
                    {event.start.toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
