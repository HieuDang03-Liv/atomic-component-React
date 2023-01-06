import { getLocalStorage, removeLocalStorage, setLocalStorage } from './doLocalStorage'
import { JWT_TOKEN_KEY } from '@common/constants'

export function getJwtToken(): string | null {
  return getLocalStorage(JWT_TOKEN_KEY)
}

export function setJwtToken(value: string): void {
  setLocalStorage(JWT_TOKEN_KEY, value)
}

export function removeJwtToken(): void {
  removeLocalStorage(JWT_TOKEN_KEY)
}
