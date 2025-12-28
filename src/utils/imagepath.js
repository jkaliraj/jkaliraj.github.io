
import store from '../store'
import path from 'path'

export default function imagepath(url, size) {
  return url || ''
}

export function fetch(url, fromCurrentPath) {
  // If it's already a full URL (http:// or https://), return it as-is
  if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
    return url
  }

  // If it's an absolute path starting with '/', return it as-is
  if (url && url.startsWith('/')) {
    const PUBLIC_PATH = (typeof __PUBLIC_PATH__ !== 'undefined' ? __PUBLIC_PATH__ : '/').replace(/\/+$/, '')
    return PUBLIC_PATH === '' ? url : PUBLIC_PATH + url
  }

  let state = store.getState()

  if (fromCurrentPath === null || typeof fromCurrentPath === 'undefined') {
    fromCurrentPath = state.data.path || ''
  }

  url = path.normalize(fromCurrentPath + '/' + url).toLowerCase()

  return (state.data.files[url] && state.data.files[url].localFile)
    ? state.data.files[url].localFile
    : url
}
