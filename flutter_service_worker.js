'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0ccfeeebd60d750ddf3b6919731b7641",
"version.json": "23226dcca6c3fbfbcaa64a8bfe101d77",
"index.html": "cbb45de71524b609a4f9d3bec37ad789",
"/": "cbb45de71524b609a4f9d3bec37ad789",
"main.dart.js": "446e6e46ff41c3a8fc879df61f6c0b93",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "506e79f63ad63e89c4c34c5b5609ca57",
"icons/Icon-192.png": "26097ea0e33a91ba6a5f14ffc4d5119d",
"icons/Icon-maskable-192.png": "26097ea0e33a91ba6a5f14ffc4d5119d",
"icons/Icon-maskable-512.png": "74ae5f59c5d73b8bb5924b6106f4c05d",
"icons/Icon-512.png": "74ae5f59c5d73b8bb5924b6106f4c05d",
"manifest.json": "2d8efd52ef82703f4a6ed885cefe315e",
"assets/AssetManifest.json": "8891e0ee385d23a4beb4bfd3a2c71f20",
"assets/NOTICES": "5389904fd1d1797499309c41a948f06b",
"assets/FontManifest.json": "4d21204a176ed737468f7e5458e5fa10",
"assets/AssetManifest.bin.json": "f82d6d44eceb506448d40f2aead5d56d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3c30492fc6d33da9a4710798f154114d",
"assets/fonts/MaterialIcons-Regular.otf": "a31c70a03961ce35ac38c672c938b079",
"assets/assets/images/svg/gmail_icon.svg": "92fa7b30ab3fd1027eee96a6baa1b49e",
"assets/assets/images/svg/menu_icon.svg": "2af738e718e133a5c92f72cc393d9305",
"assets/assets/images/png/card_icon.png": "25c4782651490ef986fb5f9132c51e76",
"assets/assets/images/png/linked_in_icon.png": "5193ff2a4d1158c7e12b3fde0b57993b",
"assets/assets/images/png/apple_wallet_icon.png": "e0000a01ece7623d7e281f6b8b1f3a24",
"assets/assets/images/png/custom_payment_icon.png": "89e8a30615ab6f37e1386fe35e34346d",
"assets/assets/images/png/instagram_icon.png": "a0014b29ff335aec13422ead3e7ac86c",
"assets/assets/images/png/wearable_icon.png": "2861eaa0e2c7a2811bbb9eee53e702a0",
"assets/assets/images/png/android_icon.png": "6459a428b6096e73f4cdcfe0c45faa9c",
"assets/assets/images/png/instagram_icon_light.png": "aa6a3eb3bc8c212bd5e4c981a9147093",
"assets/assets/images/png/payment_icon.png": "fc1d0cd1d0ca70aaf0ba8672cf51680c",
"assets/assets/images/png/facebook_icon_light.png": "012cde6a17db44480cbb9ba89dc59995",
"assets/assets/images/png/flutter_icon.png": "57838d52c318faff743130c3fcfae0c6",
"assets/assets/images/png/profile_placeholder.png": "07bcafaa04163cfd29fbbfd9d1ecc6a7",
"assets/assets/images/png/wallet_icon.png": "22a1d286bb0c1143ce956a79881a1c8d",
"assets/assets/images/png/linked_in_icon_light.png": "1549ea98fd0058fc7d1b253e157eb369",
"assets/assets/images/png/apple_icon.png": "0e94f87291aaced5fc73983358c7634f",
"assets/assets/images/png/x_icon.png": "c019bd434e5489eb40e386b60cf045c9",
"assets/assets/images/png/transfer_icon.png": "f54d85e4ac62b5fd398e1d5570b44456",
"assets/assets/images/png/facebook_icon.png": "69059bfff980b9e85ccc06fe85149c2d",
"assets/assets/images/png/account_icon.png": "f0cc734ba17e106b2b0e3c8d4a8a99ef",
"assets/assets/images/png/github_icon.png": "b6ec19ceacb23390aa66d2f101d0ddf6",
"assets/assets/images/jpeg/game_icon.jpeg": "9349b8ae59395e85497250998f848b2e",
"assets/assets/images/jpeg/open_source_icon.jpeg": "dcd61abcbfee0aca9c6e4d896ddc0005",
"assets/assets/images/jpeg/rolling_ball.jpeg": "82be55a57be880dfd04e82ffa5466e73",
"assets/assets/images/jpeg/payment_coming_soon_icon.jpeg": "fcfd91ee39022b0af2d1b87c75560edd",
"assets/assets/images/jpeg/banking_app_icon.jpeg": "014ad7043759552c83052cc1aaf7954a",
"assets/assets/fonts/Dosis-Medium.ttf": "8569508a235e44e57e67657180774a56",
"assets/assets/fonts/OleoScript-Bold.ttf": "ef6a30802028b361c45ffe5060f8bcfc",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Quote.ttf": "53cb03818aec34aae7cc663dcb98a933",
"assets/assets/fonts/Dosis-Regular.ttf": "09e98c03373f35acab47c6c1f45ffaec",
"assets/assets/fonts/Inter_18pt-Bold.ttf": "7ef6f6d68c7fedc103180f2254985e8c",
"assets/assets/fonts/Inter_18pt-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/fonts/OleoScript-Regular.ttf": "4c19154f6343b5405936c31968ce978c",
"assets/assets/fonts/Dosis-Bold.ttf": "7176a4f7cc08692bd228c53d9c7126c7",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Inter_18pt-Regular.ttf": "37dcabff629c3690303739be2e0b3524",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
