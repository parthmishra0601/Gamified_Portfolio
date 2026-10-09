const CACHE_PREFIX = 'parth-portfolio-'
const CACHE_NAME = `${CACHE_PREFIX}v1`
const APP_SHELL = ['/', '/manifest.json', '/icon.svg']
const isDevelopment = new URL(self.location.href).searchParams.get('dev') === '1'

self.addEventListener('install', (event) => {
  event.waitUntil(
    (isDevelopment
      ? Promise.resolve()
      : caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
    ).then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith(CACHE_PREFIX) && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      ))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  if (isDevelopment || request.method !== 'GET' || url.origin !== self.location.origin) {
    return
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(async (response) => {
          if (response.ok) {
            await caches.open(CACHE_NAME)
              .then((cache) => cache.put('/', response.clone()))
              .catch(() => {})
          }
          return response
        })
        .catch(async () => (await caches.match(request)) || caches.match('/'))
    )
    return
  }

  const isStaticAsset = url.pathname.startsWith('/_next/static/') ||
    ['script', 'style', 'image', 'font'].includes(request.destination)

  if (isStaticAsset) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse
        }

        return fetch(request).then(async (response) => {
          if (response.ok) {
            await caches.open(CACHE_NAME)
              .then((cache) => cache.put(request, response.clone()))
              .catch(() => {})
          }
          return response
        })
      })
    )
  }
})
