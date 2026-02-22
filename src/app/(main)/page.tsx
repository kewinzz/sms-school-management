"use client";

import React from "react";
import {
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  TrendingUp,
  Clock,
  Award,
  AlertCircle,
  CheckCircle2,
  UserCheck,
  DollarSign,
  Bell,
} from "lucide-react";

const DashboardPage = () => {
  const stats = [
    {
      title: "Total Students",
      value: "1,234",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "blue",
    },
    {
      title: "Total Teachers",
      value: "87",
      change: "+3%",
      trend: "up",
      icon: GraduationCap,
      color: "purple",
    },
    {
      title: "Active Classes",
      value: "42",
      change: "0%",
      trend: "neutral",
      icon: BookOpen,
      color: "green",
    },
    {
      title: "Attendance Rate",
      value: "94.5%",
      change: "+2.3%",
      trend: "up",
      icon: UserCheck,
      color: "orange",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "success",
      message: "New student Ahmad Rizki enrolled in Grade 10",
      time: "5 minutes ago",
    },
    {
      id: 2,
      type: "warning",
      message: "Exam schedule for Mathematics updated",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "info",
      message: "Parent-teacher meeting scheduled for next week",
      time: "2 hours ago",
    },
    {
      id: 4,
      type: "success",
      message: "Monthly fee payment received from 45 students",
      time: "3 hours ago",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Mid-Term Examinations",
      date: "March 15-20, 2024",
      type: "exam",
    },
    {
      id: 2,
      title: "Parent-Teacher Conference",
      date: "March 25, 2024",
      type: "meeting",
    },
    {
      id: 3,
      title: "Sports Day",
      date: "April 5, 2024",
      type: "event",
    },
    {
      id: 4,
      title: "Science Fair",
      date: "April 12, 2024",
      type: "event",
    },
  ];

  const classPerformance = [
    { grade: "Grade 10A", average: 87, students: 32 },
    { grade: "Grade 10B", average: 82, students: 30 },
    { grade: "Grade 11A", average: 89, students: 28 },
    { grade: "Grade 11B", average: 85, students: 31 },
    { grade: "Grade 12A", average: 91, students: 25 },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-sm text-slate-600 mt-1">
              Welcome back! Here's what's happening today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-10 w-10 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center transition-all">
              <Bell className="h-5 w-5 text-slate-600" />
            </button>
            <div className="text-sm text-slate-600">
              <div className="font-medium">Today</div>
              <div className="text-xs text-slate-500">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-slate-900 mt-2">
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp
                      className={`h-3 w-3 ${
                        stat.trend === "up"
                          ? "text-green-600"
                          : "text-slate-400"
                      }`}
                    />
                    <span
                      className={`text-xs font-medium ${
                        stat.trend === "up"
                          ? "text-green-600"
                          : "text-slate-500"
                      }`}
                    >
                      {stat.change} from last month
                    </span>
                  </div>
                </div>
                <div
                  className={`h-12 w-12 rounded-lg flex items-center justify-center ${getColorClasses(
                    stat.color
                  )}`}
                >
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Class Performance */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Class Performance
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Average scores by grade
                </p>
              </div>
              <Award className="h-5 w-5 text-slate-400" />
            </div>
            <div className="space-y-4">
              {classPerformance.map((cls, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">
                      {cls.grade}
                    </span>
                    <span className="text-slate-600">
                      {cls.average}% • {cls.students} students
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${cls.average}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Upcoming Events
                </h2>
                <p className="text-sm text-slate-600 mt-1">Next activities</p>
              </div>
              <Calendar className="h-5 w-5 text-slate-400" />
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">
                      {event.title}
                    </p>
                    <p className="text-xs text-slate-600 mt-1">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Recent Activities
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Latest updates and notifications
              </p>
            </div>
            <Clock className="h-5 w-5 text-slate-400" />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div
                  className={`h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activity.type === "success"
                      ? "bg-green-100"
                      : activity.type === "warning"
                      ? "bg-orange-100"
                      : "bg-blue-100"
                  }`}
                >
                  {activity.type === "success" ? (
                    <CheckCircle2
                      className={`h-5 w-5 ${
                        activity.type === "success"
                          ? "text-green-600"
                          : "text-blue-600"
                      }`}
                    />
                  ) : (
                    <AlertCircle
                      className={`h-5 w-5 ${
                        activity.type === "warning"
                          ? "text-orange-600"
                          : "text-blue-600"
                      }`}
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-900">{activity.message}</p>
                  <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md hover:border-blue-300 transition-all group">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-sm font-semibold text-slate-900">Add Student</p>
            <p className="text-xs text-slate-600 mt-1">Enroll new student</p>
          </button>
          <button className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md hover:border-purple-300 transition-all group">
            <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-3 group-hover:bg-purple-200 transition-colors">
              <GraduationCap className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-sm font-semibold text-slate-900">Add Teacher</p>
            <p className="text-xs text-slate-600 mt-1">Register new staff</p>
          </button>
          <button className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md hover:border-green-300 transition-all group">
            <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-3 group-hover:bg-green-200 transition-colors">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-sm font-semibold text-slate-900">
              Create Class
            </p>
            <p className="text-xs text-slate-600 mt-1">Setup new class</p>
          </button>
          <button className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md hover:border-orange-300 transition-all group">
            <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-3 group-hover:bg-orange-200 transition-colors">
              <DollarSign className="h-6 w-6 text-orange-600" />
            </div>
            <p className="text-sm font-semibold text-slate-900">
              Fee Payment
            </p>
            <p className="text-xs text-slate-600 mt-1">Process payments</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
