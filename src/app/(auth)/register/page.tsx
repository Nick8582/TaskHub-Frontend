import type { Metadata } from "next"

import { RegisterPage } from "@/src/views/register"

export const metadata: Metadata = {
  title: "Register",
}

export default function RootAuthRegister() {
  return <RegisterPage />
}
