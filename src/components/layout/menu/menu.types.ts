import type { LucideIcon } from 'lucide-react'

import type { Pages } from '@/shared/constants/page.constants'

export interface IMenuItem {
  icon: LucideIcon
  label: string
  href: Pages
}
