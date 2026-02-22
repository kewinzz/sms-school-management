"use client";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, Views } from "react-big-calendar";
import { dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import { useState, useCallback } from "react";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

export const BigCalendar = ({ events = [] }) => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(Views.MONTH);

  const onNavigate = useCallback((newDate: Date) => {
    setDate(newDate);
  }, []);

  const onView = useCallback((newView: any) => {
    setView(newView);
  }, []);

  return (
    <div className="h-[700px] bg-white">
      <style>{`
        .rbc-calendar {
          font-family: inherit;
          height: 100%;
        }
        .rbc-header {
          padding: 18px 12px;
          font-weight: 700;
          font-size: 13px;
          color: #64748b;
          border-bottom: 2px solid #f1f5f9;
          background: linear-gradient(to bottom, #fafbfc, #f8fafc);
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }
        .rbc-today {
          background-color: #eff6ff;
        }
        .rbc-off-range-bg {
          background-color: #fafbfc;
        }
        .rbc-date-cell {
          padding: 8px;
          text-align: right;
        }
        .rbc-date-cell.rbc-now {
          font-weight: 700;
        }
        .rbc-date-cell > a {
          color: #334155;
          font-weight: 600;
          font-size: 14px;
        }
        .rbc-date-cell.rbc-now > a {
          color: #3b82f6;
        }
        .rbc-event {
          padding: 6px 10px;
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          border-radius: 8px;
          border: none;
          font-size: 13px;
          font-weight: 600;
          color: white;
          box-shadow: 0 2px 6px rgba(139, 92, 246, 0.25);
          transition: all 0.2s ease;
        }
        .rbc-event:hover {
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.35);
          transform: translateY(-2px);
        }
        .rbc-event-label {
          font-size: 11px;
          font-weight: 500;
        }
        .rbc-event-content {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .rbc-day-bg {
          border-right: 1px solid #f1f5f9;
        }
        .rbc-day-bg:hover {
          background-color: #f8fafc;
        }
        .rbc-time-slot {
          border-top: 1px solid #f1f5f9;
        }
        .rbc-time-content {
          border-top: 2px solid #e2e8f0;
        }
        .rbc-current-time-indicator {
          background-color: #ef4444;
          height: 2px;
          box-shadow: 0 0 6px rgba(239, 68, 68, 0.4);
        }
        .rbc-toolbar {
          padding: 20px 24px;
          margin-bottom: 0;
          flex-wrap: wrap;
          gap: 12px;
          background: linear-gradient(to bottom, #fafbfc, #ffffff);
          border-bottom: 2px solid #f1f5f9;
        }
        .rbc-toolbar button {
          padding: 10px 16px;
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .rbc-toolbar button:hover {
          background-color: #f8fafc;
          border-color: #cbd5e1;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          transform: translateY(-1px);
        }
        .rbc-toolbar button:active {
          transform: translateY(0);
        }
        .rbc-toolbar button.rbc-active {
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          border-color: #8b5cf6;
          color: white;
          box-shadow: 0 4px 8px rgba(139, 92, 246, 0.25);
        }
        .rbc-toolbar-label {
          font-size: 20px;
          font-weight: 700;
          color: #1e293b;
          flex-grow: 1;
          text-align: center;
        }
        .rbc-month-view,
        .rbc-time-view {
          border: none;
          border-radius: 0;
          overflow: hidden;
        }
        .rbc-month-row {
          border-top: 1px solid #f1f5f9;
          min-height: 90px;
        }
        .rbc-month-row:first-child {
          border-top: none;
        }
        .rbc-day-slot .rbc-time-slot {
          border-top: 1px solid #f8fafc;
        }
      `}</style>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        date={date}
        view={view}
        onNavigate={onNavigate}
        onView={onView}
        views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
        defaultView={Views.MONTH}
      />
    </div>
  );
};
