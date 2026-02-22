"use client";

import { karyawanColumns, KaryawanData } from "@/components/karyawan-columns";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Plus, Search, Download, Filter, UserCog, Users, Clock } from "lucide-react";
import React from "react";

export const KaryawanView = () => {
  const data: KaryawanData[] = [
    {
      id: "EMP001",
      name: "Dr. Siti Aminah",
      email: "siti.aminah@school.com",
      phone: "081234567890",
      position: "Principal",
      department: "Administration",
      status: "active",
      joinDate: "2020-01-15",
    },
    {
      id: "EMP002",
      name: "Budi Santoso, S.Pd",
      email: "budi.santoso@school.com",
      phone: "081234567891",
      position: "Mathematics Teacher",
      department: "Academic",
      status: "active",
      joinDate: "2021-03-20",
    },
    {
      id: "EMP003",
      name: "Dewi Lestari, S.Pd",
      email: "dewi.lestari@school.com",
      phone: "081234567892",
      position: "English Teacher",
      department: "Academic",
      status: "on-leave",
      joinDate: "2021-08-10",
    },
    {
      id: "EMP004",
      name: "Ahmad Rizki",
      email: "ahmad.rizki@school.com",
      phone: "081234567893",
      position: "IT Administrator",
      department: "IT Support",
      status: "active",
      joinDate: "2022-02-05",
    },
    {
      id: "EMP005",
      name: "Rina Wijaya",
      email: "rina.wijaya@school.com",
      phone: "081234567894",
      position: "Finance Officer",
      department: "Finance",
      status: "active",
      joinDate: "2022-06-15",
    },
  ];

  const activeCount = data.filter((emp) => emp.status === "active").length;
  const onLeaveCount = data.filter((emp) => emp.status === "on-leave").length;
  const inactiveCount = data.filter((emp) => emp.status === "inactive").length;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50">
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <UserCog className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  Staff Management
                </h1>
                <p className="text-sm text-slate-600 mt-1">
                  Manage and view all staff information
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
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
                Add Staff
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Staff</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{data.length}</p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Staff</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{activeCount}</p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">On Leave</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{onLeaveCount}</p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search staff by name, position, or department..."
                className="w-full h-10 pl-10 pr-4 rounded-lg border border-slate-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-sm"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-10 px-4 rounded-lg border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Data Table */}
        <DataTable data={data} columns={karyawanColumns} />
      </div>
    </div>
  );
};
