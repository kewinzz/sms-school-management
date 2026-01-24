import {
  LayoutDashboard,
  Calendar,
  Users,
  UserCog,
  ClipboardCheck,
  Trophy,
  BarChart3,
  CheckSquare,
  FileText,
  BookOpen,
  Info,
  Image,
  Settings,
} from "lucide-react";

export const routes = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Calendar",
    href: "/calendars",
    icon: Calendar,
  },
  {
    label: "Siswa",
    href: "/siswa",
    icon: Users,
  },
  {
    label: "Karyawan",
    href: "/karyawan",
    icon: UserCog,
  },
  {
    label: "Penilaian",
    href: "/penilaian",
    icon: ClipboardCheck,
  },
  {
    label: "Ekstrakurikuler",
    href: "/ekstrakurikuler",
    icon: Trophy,
  },
  {
    label: "Laporan Kemajuan",
    href: "/laporan-kemajuan",
    icon: BarChart3,
  },
  {
    label: "Kehadiran",
    href: "/kehadiran",
    icon: CheckSquare,
  },
  {
    label: "Laporan Manajemen",
    href: "/laporan-manajemen",
    icon: FileText,
  },
  {
    label: "LMS",
    href: "/lms",
    icon: BookOpen,
  },
  {
    label: "Informasi Sekolah",
    href: "/informasi-sekolah",
    icon: Info,
  },
  {
    label: "Galeri",
    href: "/galeri",
    icon: Image,
  },
  {
    label: "Pengaturan",
    href: "/pengaturan",
    icon: Settings,
  },
];
