
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

  let state = store.getState()

  if (fromCurrentPath === null || typeof fromCurrentPath === 'undefined') {
    fromCurrentPath = state.data.path || ''
  }

  url = path.normalize(fromCurrentPath + '/' + url).toLowerCase()

  return (state.data.files[url] && state.data.files[url].localFile)
    ? state.data.files[url].localFile
    : url
}
