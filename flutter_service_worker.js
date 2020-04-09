'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d4d13cd28a0acc03b56213fe6f4ee59d",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/image/avatar.png": "dbc1377eefcfc8b24ededee524854318",
"assets/image/samsung.png": "07f7b1eeb87194333da33d466e1eceb7",
"assets/image/tiki.png": "f9a50be2c4c7cbae1456f7e6fc8ba708",
"assets/image/vinid.png": "e42b30b714e5e8200591cc290edd351d",
"assets/image/vti.png": "efbca4d0f40d0fac0f8b2b2b9689f568",
"assets/LICENSE": "f9fee5c64dabc2e561365829061c9093",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"index.html": "b811297887871654a7f09adcfe352a3d",
"/": "b811297887871654a7f09adcfe352a3d",
"main.dart.js": "8a355d818db570b6fd3a0e142973eef6"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
