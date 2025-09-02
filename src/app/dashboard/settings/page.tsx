import type { Metadata } from "next"

import { NO_INDEX_PAGE } from "@/shared/constants/seo.constants"

export const metadata: Metadata = {
  title: "Settings",
  ...NO_INDEX_PAGE,
}

export default function Page() {
  return <div>Settings </div>
}
