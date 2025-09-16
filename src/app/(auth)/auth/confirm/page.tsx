import { Suspense } from 'react'

import { ConfirmSlicePage } from '@/app/(auth)/auth/confirm/ConfirmPage'

export default async function PrivatePage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ConfirmSlicePage />
    </Suspense>
  )
}
