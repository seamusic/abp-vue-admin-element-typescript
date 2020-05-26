import { AbpConfiguration } from '@/api/abpconfiguration'
const abpConfigKey = 'vue_admin_abp_configuration'
export const getAbpConfig = () => {
  const abpConfigItem = localStorage.getItem(abpConfigKey)
  if (abpConfigItem) {
    return JSON.parse(abpConfigItem) as AbpConfiguration
  }
  return new AbpConfiguration()
}
export const setAbpConfig = (abpConfig: AbpConfiguration) => {
  const abpConfigItem = JSON.stringify(abpConfig)
  localStorage.setItem(abpConfigKey, abpConfigItem)
}
export const removeAbpConfig = () => localStorage.removeItem(abpConfigKey)

// User
const tokenKey = 'vue_typescript_admin_token'
const refreshTokenKey = 'vue_typescript_admin_refresh_token'
export function getToken() {
  const tokenItem = localStorage.getItem(tokenKey)
  if (tokenItem) {
    return tokenItem
  }
  return ''
}
export const setToken = (token: string) => localStorage.setItem(tokenKey, token)
export const getRefreshToken = () => {
  const tokenItem = localStorage.getItem(refreshTokenKey)
  if (tokenItem) {
    return tokenItem
  }
  return ''
}
export const setRefreshToken = (token: string) => localStorage.setItem(refreshTokenKey, token)
export const removeToken = () => {
  localStorage.removeItem(tokenKey)
  localStorage.removeItem(refreshTokenKey)
}