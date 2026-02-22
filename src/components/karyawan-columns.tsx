"use client";

import { ColumnDef } from "@tanstack/react-table";

export type KaryawanData = {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  status: "active" | "inactive" | "on-leave";
  joinDate: string;
};

export const karyawanColumns: ColumnDef<KaryawanData>[] = [
  {
    accessorKey: "id",
    header: "Employee ID",
    cell: ({ row }) => (
      <div className="font-medium text-slate-900">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-semibold text-slate-900">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => (
      <div className="text-slate-700">{row.getValue("position")}</div>
    ),
  },
  {
    accessorKey: "department",
    header: "Department",
    cell: ({ row }) => (
      <div className="text-slate-700">{row.getValue("department")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="text-slate-600 text-sm">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="text-slate-600">{row.getValue("phone")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <div
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            status === "active"
              ? "bg-green-100 text-green-800"
              : status === "on-leave"
              ? "bg-orange-100 text-orange-800"
              : "bg-slate-100 text-slate-800"
          }`}
        >
          {status === "on-leave" ? "On Leave" : status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      );
    },
  },
  {
    accessorKey: "joinDate",
    header: "Join Date",
    cell: ({ row }) => (
      <div className="text-slate-600">{row.getValue("joinDate")}</div>
    ),
  },
];
