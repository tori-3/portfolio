'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "02cc458e52566e5cf0bfd06d47ff709b",
"assets/AssetManifest.bin.json": "4e3d51db1a70aeec8d4b72541abd82b0",
"assets/AssetManifest.json": "d85f010c49d8d49ebd5cf2b6322e8296",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/images/%25E3%2581%25A8%25E3%2582%258A%25E3%2581%2595%25E3%2582%2593.jpg": "be97e8d0f2a1794e23132cb988ef6a47",
"assets/images/%25E3%2582%25A2%25E3%2583%25B3%25E3%2583%258A%25E3%2581%25AE%25E3%2581%258A%25E8%258F%2593%25E5%25AD%2590%25E3%2581%25AA%25E5%25A4%25A7%25E5%2586%2592%25E9%2599%25BA.png": "8556f50fbee4ab3045ccfa9d4278a384",
"assets/images/%25E3%2582%25AB%25E3%2583%25BC%25E3%2582%25BD%25E3%2583%25AB%25E3%2581%25A9%25E3%2581%2593.png": "09d2c372ac61505cf583ad87b0dc7fa1",
"assets/images/%25E3%2582%25B2%25E3%2583%25BC%25E3%2583%25A0%25E3%2583%25A9%25E3%2583%25B3%25E3%2583%2581%25E3%2583%25A3%25E3%2583%25BC.png": "fdd80985e542d174c56dc4ce4c1a662f",
"assets/images/%25E3%2583%25A9%25E3%2583%25B3%25E3%2583%2580%25E3%2583%25A0%25E3%2582%25A6%25E3%2582%25A9%25E3%2583%25BC%25E3%2582%25AF%25E4%25B8%2587%25E8%258F%25AF%25E9%258F%25A1.png": "9c19b92c3bcfac34512950b045c20761",
"assets/images/%25E5%2585%2585%25E5%25A1%25AB%25E3%2582%25B8%25E3%2583%25A5%25E3%2583%25AA%25E3%2582%25A2%25E9%259B%2586%25E5%2590%2588.png": "1bb78b5c63c89985842ebfe3fece6fc7",
"assets/images/%25E5%25B7%259D%25E3%2582%25BF%25E3%2582%25A4%25E3%2583%2594%25E3%2583%25B3%25E3%2582%25B0.png": "9863ad11edb79936e6503a8b70698aa9",
"assets/images/%25E8%258A%25B8%25E8%25A1%2593%25E3%2583%2597%25E3%2583%25AD%25E3%2582%25B0%25E3%2583%25A9%25E3%2583%259F%25E3%2583%25B3%25E3%2582%25B0.png": "23a6f8f601fe20ddfcfb4e97fdef39d5",
"assets/images/%25E9%2583%25A8%25E5%2586%2585%25E8%25AC%259B%25E5%25BA%25A7.png": "1d0ed35f9d50f66593d3f7b1494ea889",
"assets/images/%25E9%25A1%2594%25E6%2596%2587%25E5%25AD%2597%25E3%2582%25B7%25E3%2583%25A5%25E3%2583%25BC%25E3%2583%2586%25E3%2582%25A3%25E3%2583%25B3%25E3%2582%25B0.png": "f540c7b107109be9a507031509398ffe",
"assets/images/BunchoUI.png": "9407154d11305cce71634a2797dc8b01",
"assets/images/Figure.png": "706bd672d72ae26363dce31d2b5123ac",
"assets/images/Flutter.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/images/GarbageCollection.png": "65c68bb60b1e31862a781d3cc8027912",
"assets/images/Siv3D%25E3%2583%2597%25E3%2583%2581%25E3%2582%25B5%25E3%2583%25B3%25E3%2583%2597%25E3%2583%25AB.png": "8fdb5facfe9128a77d7a66cc28b45b15",
"assets/NOTICES": "1d6fa971a9431b630b417bb3cd7996a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "abf0e81369c396f227fc1f5c517a5fbd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "41456be4dff75da9aeca1a9cf4f2ff55",
"/": "41456be4dff75da9aeca1a9cf4f2ff55",
"main.dart.js": "bb8ec56092e8ab22d97c5ffa88e11161",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
