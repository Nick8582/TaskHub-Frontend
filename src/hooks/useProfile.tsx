import { useQuery } from '@tanstack/react-query'

import { getProfile } from '@/services/profile/profile-client'

export const useProfile = () => {
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })

  return {
    user: data,
  }
}
