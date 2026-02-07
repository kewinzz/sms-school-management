import { columns, SiswaData } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import React from "react";

export const SiswaView = () => {
  const data: SiswaData[] = [
    {
      id: "1",
      name: "Ahmad Rizki",
      email: "ahmad.rizki@school.com",
      phone: "081234567890",
      status: "active",
      joinDate: "2024-01-15",
    },
    {
      id: "2",
      name: "Siti Nurhaliza",
      email: "siti.nurhaliza@school.com",
      phone: "081234567891",
      status: "active",
      joinDate: "2024-02-20",
    },
    {
      id: "3",
      name: "Budi Santoso",
      email: "budi.santoso@school.com",
      phone: "081234567892",
      status: "inactive",
      joinDate: "2023-11-10",
    },
    {
      id: "4",
      name: "Dewi Lestari",
      email: "dewi.lestari@school.com",
      phone: "081234567893",
      status: "active",
      joinDate: "2024-03-05",
    },
    {
      id: "5",
      name: "Roni Hermawan",
      email: "roni.hermawan@school.com",
      phone: "081234567894",
      status: "active",
      joinDate: "2024-01-25",
    },
  ];

  return (
    <div className="w-full p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Siswa Management</h1>
        <p className="text-slate-600 mt-2">
          Manage and view all student information
        </p>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  );
};
