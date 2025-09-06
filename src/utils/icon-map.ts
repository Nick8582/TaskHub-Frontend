import {
  BarChart,
  Briefcase,
  Clock,
  Code,
  Database,
  FileText,
  Layers,
  Plane,
  Settings,
  Shield,
  Users,
  type LucideIcon,
} from 'lucide-react'

export const ICON_NAMES = [
  'BarChart',
  'Briefcase',
  'Clock',
  'Code',
  'Database',
  'FileText',
  'Layers',
  'Plane',
  'Settings',
  'Shield',
  'Users',
] as const

export type IconName = (typeof ICON_NAMES)[number]

export const ICON_MAP: Record<IconName, LucideIcon> = {
  BarChart,
  Briefcase,
  Clock,
  Code,
  Database,
  FileText,
  Layers,
  Plane,
  Settings,
  Shield,
  Users,
}
