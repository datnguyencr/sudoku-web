'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "789fb61f5a55c6aea59384c4d519f519",
"assets/AssetManifest.bin.json": "a36d70664559d9f64555268784e962c3",
"assets/AssetManifest.json": "201cbbb2eb97c887a4fbb55bb4657a91",
"assets/assets/images/1.webp": "2373436908dd646e2eb0994e4ee0d457",
"assets/assets/images/21.webp": "82a365f671624fe2a1f752de15e108a2",
"assets/assets/images/22.webp": "0ae7d7a440ee5bb4532225ed6e1d3e05",
"assets/assets/images/ic_check.webp": "ea45540d63611ca7515b9ab26c93d413",
"assets/assets/images/ic_clock.webp": "e70cd67a1491ae9608c42de908a0e769",
"assets/assets/images/ic_edit.webp": "0504f013c2e4b980bf32f3b39228658c",
"assets/assets/images/ic_erase.webp": "9661340cb8fddebe6a47f7bb1b0f95bf",
"assets/assets/images/ic_give_up.webp": "72ff2f777ce596247387ef4fc4ebf7e8",
"assets/assets/images/ic_hint.webp": "9d35fc93d50fae4ef81b801279d2e0a6",
"assets/assets/images/ic_logo.webp": "52d4f7fbad5c97fd4153ba4342d6e07f",
"assets/assets/images/ic_rotate_left.webp": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/ic_rotate_right.webp": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/translations/de.json": "cf3960923ebfec4c7a9ed523c08c98f6",
"assets/assets/translations/en.json": "2426c34513f0e9c7e21e6823297db137",
"assets/assets/translations/es.json": "01564358e5f42144d7341c4f41511924",
"assets/assets/translations/fr.json": "06062e97dfeadad70ad463818e796388",
"assets/assets/translations/ja.json": "cf4965e41a9b619a74db24a0dfeee275",
"assets/assets/translations/ko.json": "cc5e654e7460ef6e9371a33d23c03de5",
"assets/assets/translations/pt.json": "17c79406e5b245f3346803394710af0a",
"assets/assets/translations/ru.json": "f9fe357b6a981f49275c3574184f346d",
"assets/assets/translations/vi.json": "787be760ed1a07fc9d6927b40a4c5878",
"assets/assets/translations/zh.json": "26198e0530e08193bf194a27a079435f",
"assets/FontManifest.json": "9181d218c42bf639db8202eec3435a69",
"assets/fonts/MaterialIcons-Regular.otf": "3e736ca66a85e2970ce85bf8d22d855d",
"assets/NOTICES": "652e90910275e5314fc698ed4c387a90",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/sst_base/assets/fonts/NotoSans-Bold.ttf": "28c191ce33ca36e0f75106491846de68",
"assets/packages/sst_base/assets/fonts/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/packages/sst_base/assets/images/achievement.webp": "179e1bc0c88d378ff4cb011d92be044b",
"assets/packages/sst_base/assets/translations/de.json": "6a131aa6505813fa9b3aaa51c83ae0c5",
"assets/packages/sst_base/assets/translations/en.json": "0f178be98183c23d7c655ece5dc6c8d9",
"assets/packages/sst_base/assets/translations/es.json": "03b9863885ed312128e4c4556a45a1dc",
"assets/packages/sst_base/assets/translations/fr.json": "f9c59ab9412b4d626dc6de3ebe8db00c",
"assets/packages/sst_base/assets/translations/ja.json": "71f3c4708d59f761f0cc60661d18be4a",
"assets/packages/sst_base/assets/translations/ko.json": "657b17a760d136f9384e922b155c311f",
"assets/packages/sst_base/assets/translations/pt.json": "cc7f26174da1332ca3c625184a5c25d0",
"assets/packages/sst_base/assets/translations/ru.json": "f8bac1550fc4c6fabd6f950eae5adf2f",
"assets/packages/sst_base/assets/translations/vi.json": "49a5e33822b876f46ae44927326be247",
"assets/packages/sst_base/assets/translations/zh.json": "972a3d708c456eda1e4a3308cd81e41e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "902c6845be10dfc51e1478bc0afe5af3",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "c8c3891a2d6af1f9fa418707f305c267",
"icons/Icon-192.png": "463495d8d5bf93941d0b37cf1cb99be0",
"icons/Icon-512.png": "5964d7ee925e2e477b90cee93a9bfae4",
"icons/Icon-maskable-192.png": "463495d8d5bf93941d0b37cf1cb99be0",
"icons/Icon-maskable-512.png": "5964d7ee925e2e477b90cee93a9bfae4",
"index.html": "65a7f487e67c518615ad674b9c649381",
"/": "65a7f487e67c518615ad674b9c649381",
"main.dart.js": "716477eeab7ad7f019480ccf4e24a744",
"manifest.json": "ef3af4df340b46220158f69b31e62660",
"version.json": "781e017e2d4c2e5477ea0f397bd107b2"};
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
