import { postApi, getApi } from '@api/_base'

export function login(req) {
  return postApi('/login', req)
}

export function getDetailUser(req) {
  return getApi(`/users/${req}`)
}
