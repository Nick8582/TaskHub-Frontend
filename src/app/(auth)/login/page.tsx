import type { Metadata } from "next"

import { LoginPage } from "@/src/views/login"

export const metadata: Metadata = {
  title: "Login",
}

export default function RootAuthLogin() {
  return <LoginPage />
}
