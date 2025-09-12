'use server'

import { createClient as createBrowserClient } from './client'
import { createClientFromServer } from './server'

export async function createClient() {
  if (typeof window === 'undefined') {
    // Серверная среда
    return await createClientFromServer()
  } else {
    // Браузерная среда
    return createBrowserClient()
  }
}
