"use client";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar } from "react-big-calendar";
import { dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";

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
  return (
    <div className="h-[500px] bg-white rounded-xl shadow-lg overflow-hidden">
      <style>{`
        .rbc-calendar {
          font-family: inherit;
          height: 100%;
        }
        .rbc-header {
          padding: 16px 8px;
          font-weight: 700;
          font-size: 13px;
          color: #6b7280;
          border-bottom: 1px solid #f3f4f6;
          background-color: #fafbfc;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .rbc-today {
          background-color: #eff6ff;
        }
        .rbc-off-range-bg {
          background-color: #fafbfc;
        }
        .rbc-event {
          padding: 4px 8px;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          border-radius: 6px;
          border: none;
          font-size: 12px;
          font-weight: 500;
          color: white;
          box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
          transition: all 0.2s ease;
        }
        .rbc-event:hover {
          box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
          transform: translateY(-1px);
        }
        .rbc-event-label {
          font-size: 11px;
        }
        .rbc-event-content {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .rbc-day-bg {
          border-right: 1px solid #f3f4f6;
        }
        .rbc-time-slot {
          border-top: 1px solid #f9fafb;
        }
        .rbc-time-content {
          border-top: 1px solid #f3f4f6;
        }
        .rbc-current-time-indicator {
          background-color: #ef4444;
          height: 2px;
          box-shadow: 0 0 4px rgba(239, 68, 68, 0.3);
        }
        .rbc-toolbar {
          padding: 16px;
          margin-bottom: 0;
          flex-wrap: wrap;
          gap: 8px;
          background-color: #fafbfc;
          border-bottom: 1px solid #f3f4f6;
        }
        .rbc-toolbar button {
          padding: 8px 14px;
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .rbc-toolbar button:hover {
          background-color: #f3f4f6;
          border-color: #d1d5db;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .rbc-toolbar button.rbc-active {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          border-color: #3b82f6;
          color: white;
          box-shadow: 0 2px 6px rgba(59, 130, 246, 0.2);
        }
        .rbc-toolbar-label {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
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
          border-top: 1px solid #f3f4f6;
        }
      `}</style>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};
