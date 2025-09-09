import { makeAutoObservable } from 'mobx'

import { token, TokenServices } from '@/shared/lib/token-services'

class AuthStore {
  isLoggedIn = !!TokenServices.get(token.accessToken)

  constructor() {
    makeAutoObservable(this)
  }

  login() {
    TokenServices.set(token.accessToken, 'mockAccessToken')
    this.isLoggedIn = true
  }

  logout() {
    TokenServices.remove(token.accessToken)
    this.isLoggedIn = true
  }
}

export const authStore = new AuthStore()
