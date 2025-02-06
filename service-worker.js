importScripts("https://storage.googleapis.com/workbox-cdn/re1eases/6.O.2/workbox-sw.js")

workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.CacheFirst()
);