import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Matsuo AI Book Description Generator',
  description: 'สร้างคำอธิบายหนังสือฟรีด้วย AI',
  copyright: 'Matsuo IM',
  privacy_policy: '',
  default_language: 'EN-us',
}

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
