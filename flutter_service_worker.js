'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetImages/black%2520logo.jpg": "0553ad9589691a54476fed31b2051fdd",
"assets/AssetImages/Logo.jpeg": "3612184866531cefcabecca0e891b9e3",
"assets/AssetImages/or%2520logo.png": "eb55495063e0b35464b37ec49ba73554",
"assets/AssetManifest.json": "e3b1da1384bd7c93117c36dd79d589d0",
"assets/assets/beans/chana%2520dal.jpg": "1c168f63dfc9b1d692fe64b5136acada",
"assets/assets/icons/account.svg": "4a56fc4fc5c531b30fed451ea9244148",
"assets/assets/icons/carrot.svg": "b33f412512f5b6ee13101743194b3a27",
"assets/assets/icons/cart.svg": "106d58665a13003dea46b566197c94c2",
"assets/assets/icons/explore.svg": "892642d094347ec6894ef299668d1a86",
"assets/assets/icons/favorite.svg": "cb1546dc150bfd166abf53c602c90f77",
"assets/assets/icons/filters.svg": "fcfe2bff13ff36e8e2affd6161c2bead",
"assets/assets/icons/search.svg": "27686387a94bf780b2bf4d3ebe74f51e",
"assets/assets/icons/Semitruck.svg": "df9e4c4b665fceaca708bbe972be0205",
"assets/assets/icons/share.svg": "3f35215d34f9581e893341820ebf0fb5",
"assets/assets/icons/shop.svg": "e2f124b127e803c55b1e85577d501017",
"assets/assets/icons/tr.svg": "f451f80a2d63d8d313fc73baee4040ae",
"assets/assets/icons/Truck.svg": "10b6a9a410dee63095f26210053b945e",
"assets/assets/icons/visa.svg": "dcf308c755c8a09e2d07b1ebf9e8c78d",
"assets/assets/images/8848house.png": "f350d0c0fc7605346ce4fdd464570caa",
"assets/assets/images/aata.jpg": "45643a0807a34f2271ad48d952a12c89",
"assets/assets/images/allinone.jpg": "47588a46267d4a6d209449cc4e8ede01",
"assets/assets/images/almond%2520whole.jpg": "17a9fe4d3080ade9ffdb5dec52029d8c",
"assets/assets/images/aloo%2520bhujiya.jpg": "f782b9c5ae1a71f391cdc83e0a3c2edb",
"assets/assets/images/apples.png": "73ce4652bbc71dc18954ec304326df15",
"assets/assets/images/bakery.png": "aa9b3a0fb6bc2b26a4981361c0c82537",
"assets/assets/images/bananas.png": "c15d44669a1e8674bbf8694bdc6fb190",
"assets/assets/images/beans.jpg": "2a36e3044a0e294a73e64a5d9484bc3d",
"assets/assets/images/beef_bone.png": "aad3b90f0379af947e0927f36437b8c2",
"assets/assets/images/beverages.png": "9328674316ba887e78bfd0db2145c042",
"assets/assets/images/bg.png": "8a8000687d5aa217a4cb84c49a2b752f",
"assets/assets/images/bhelpuri.jpg": "a34d66143cd974d176f1dc5df2286f86",
"assets/assets/images/bhujiya%2520haldiram.jpg": "dd9c3f449d92a9f87787a9c2965a43ea",
"assets/assets/images/cashew%2520nut.jpg": "e65ed7e221d6cfe86a0b2bbb776269f7",
"assets/assets/images/chanachur%2520hot.jpg": "7e8a39b1fc9119fd78c1dd971db6e7c2",
"assets/assets/images/chanachur.jpg": "969903d405bb63d5f0fde5887480f970",
"assets/assets/images/chicken.png": "5ebfe96c9ab40e888cf17661ebb85344",
"assets/assets/images/coca_cola.png": "8a8c0a9ba3c1ef6bfa6305fbde1be32e",
"assets/assets/images/coconut%2520half%2520cut.jpg": "168e1448ec90c4352dea8510b502afee",
"assets/assets/images/cola_diet.png": "28c507c90f7218d09219f15c5bc7ce32",
"assets/assets/images/Corn%2520Flakes%2520haldi.jpg": "570973d749353ff0383d72eb7f55e631",
"assets/assets/images/dabur%2520toothpaste.jpg": "a336e4736c3e7a6289eb8cdad561f6ce",
"assets/assets/images/diary.png": "fea093b33432da9cbf6ca106d152e963",
"assets/assets/images/done.png": "14a2c7f8ea08c7a4cdaafcd114a2aa5f",
"assets/assets/images/dry%2520dates.jpg": "89834bc81dc4d3e4d1d0ecb44d5765aa",
"assets/assets/images/dry%2520pea%2520small.jpg": "ef4a53ca6f31a14f89dc1fa3f1b413e7",
"assets/assets/images/dry_fruits.jpg": "8b8cfa8f03bf5411dbb5adb21b9e97d0",
"assets/assets/images/egg_red.png": "22c13a82cf5f39e6c54b1b7c3389b530",
"assets/assets/images/egg_white.png": "c987309c1ec53794d2f3a2fb35c91447",
"assets/assets/images/fresh_fruits.png": "7d00635a4100bd04f49fc3cb6a3cc8ec",
"assets/assets/images/gahat%2520dal.jpg": "f965d6bd662d273487e948a295957eab",
"assets/assets/images/general.jpg": "34388a3d1c282156840ba8fb466d5a09",
"assets/assets/images/ghee%2520and%2520oil.jpg": "a3147f16320bdc977d8ac862ba3bb486",
"assets/assets/images/ginger.png": "e41280dfcdfdff22b51189052ccfa9ab",
"assets/assets/images/green%2520pea%2520dry.jpg": "74d662db8f6f00a584c07d1baeed18f7",
"assets/assets/images/gulab%2520jamun.jpg": "21e331641858766f925d03a664ce57c2",
"assets/assets/images/haldiram%2520aloo%2520bhujiya.jpg": "f782b9c5ae1a71f391cdc83e0a3c2edb",
"assets/assets/images/HALDIRAM-BHUJIYA-SEV.jpg": "7f2f8293115ab4d7b563e71e96dd4e6a",
"assets/assets/images/HALDIRAM-CONFLEX-MIXTURE.jpg": "9907da02c9f8a70df1db69a8759dbee7",
"assets/assets/images/HALDIRAM-KHATTA-MITHA.jpg": "ea8d4ced8e4c09adbaa30ad37e4af2e5",
"assets/assets/images/HALDIRAM-MOONG-DAL.jpg": "5e8bc289174d6ed8693382dc80259c0d",
"assets/assets/images/juice%2520and%2520pulp.jpg": "b4606c3c07159f4763a3e44a39cea317",
"assets/assets/images/juice_apple.png": "fffeed069f65c6feb2aed10e8eed29e3",
"assets/assets/images/juice_orange.png": "d8e066b06ff3a39e92b03c9a1c6c3474",
"assets/assets/images/kabuli%2520chana.jpg": "78bbdd8d9f3a1ec16365cd6e77ba0e9c",
"assets/assets/images/kala%2520chana.jpg": "e3904c25f993a4c1dc849f3a5ad7a16e",
"assets/assets/images/lays%2520classic.jpg": "60e44d9f2547969b19d36874df974d15",
"assets/assets/images/lays%2520green.jpg": "9fa5d0e7d6a81d4399a3d6bc01f23c00",
"assets/assets/images/lays%2520magic%2520masala.jpg": "a5852ce80be1a1ebbbd06121ff8f116f",
"assets/assets/images/lays%2520spanish%2520tomato.jpg": "86619f8f2ddc60ca912bead4c672cb06",
"assets/assets/images/masoor%2520dal%2520red.jpg": "2daa69e2d26993d83631685a92bc4d17",
"assets/assets/images/masyang%2520dal.jpg": "7ea56098714c232c2106605a4967c391",
"assets/assets/images/mayonnais.png": "e6262f49577314f7a354479d39a8d563",
"assets/assets/images/meat%2520and%2520frozen.jpg": "bbb7fa6b791830f33efb7ba8d3f55de7",
"assets/assets/images/meat_fish.png": "9bb79b50c0b0c64b09164393ced9ffd7",
"assets/assets/images/mix%2520dal.jpg": "61fa42d068933a66c0a26b85a88c872f",
"assets/assets/images/mixed%2520beans.jpg": "2a36e3044a0e294a73e64a5d9484bc3d",
"assets/assets/images/moong%2520dal%2520green%2520spilt.jpg": "2a73c07c4256458c9117287be7246603",
"assets/assets/images/moong%2520dal%2520yellow.jpg": "fff5f66e4d236d38ec6516fe654624e1",
"assets/assets/images/moong%2520green.jpg": "e4ce4542ad0f6628ea6fc43a4dfbac20",
"assets/assets/images/nimbu%2520masala.jpg": "9f8fab2c1031a419c5347bfeb41d7e41",
"assets/assets/images/noodles%2520and%2520snacks.jpg": "36e951c7f860c009a3c38b0193f6ce5f",
"assets/assets/images/noodles.png": "b39925576ca19925cbef773f870eba43",
"assets/assets/images/noodles1.png": "ed2ffbd316357dc1647a075f3b6dc28b",
"assets/assets/images/oils.png": "dbc0dd78b8e1924851455b3b244ab41e",
"assets/assets/images/others.jpg": "f725abf223836d3a0c3b8fed6a144c37",
"assets/assets/images/pasta.png": "3aff64cdc34fbe5b34d12dd9c6d0f808",
"assets/assets/images/peanut.jpg": "ef2ee4b4d75988645b5f4ecaf1fdaf7b",
"assets/assets/images/peesi.png": "b7724c62d03669478716917fffd559e3",
"assets/assets/images/pepper.png": "2b758c950a2b1688549a883f20ed6066",
"assets/assets/images/pickles%2520and%2520paste.jpg": "0740aee6241e69782710f7d170a3d9ef",
"assets/assets/images/pistachio.jpg": "f2edcccd320110b0e0dbd9398c6cdd83",
"assets/assets/images/pulau%2520masala.jpg": "b9013bec9e4e24a37e50e720daf03d81",
"assets/assets/images/pulses.png": "ff5aca1c68606fcc611d3a0cce5d1530",
"assets/assets/images/raisin.jpg": "eceb8df523145a23aa3685b408ba4bfd",
"assets/assets/images/rajma%2520chitabra.jpg": "b7ef41e5d51c1658d9d87920b0e4d668",
"assets/assets/images/rajma%2520red%2520lobiya.jpg": "8f8e3ef7304b69bff6023ecb39fae362",
"assets/assets/images/RARA-NOODLES.jpg": "5c928c03277b74a056e01627d2e7aab3",
"assets/assets/images/rice.png": "c772fdae2432734db4cc044e731ef512",
"assets/assets/images/soyabean%2520black.jpg": "ec196ae43373adad2f2dcd72ca29164b",
"assets/assets/images/soyabean%2520white.jpg": "1e20c770cc85e3f48de478e77c2e296a",
"assets/assets/images/spice.jpg": "33663c78986fb81eb0524515ffc76a30",
"assets/assets/images/sprite.png": "a1798902e15c44724476440d9b43bc35",
"assets/assets/images/tea%2520and%2520rice.jpg": "3580a9e2d9f4db89d21fbacfa57044bd",
"assets/assets/images/toor%2520arhar%2520dal.jpg": "e37399b4b27d50805dffa8ffb83452a9",
"assets/assets/images/toothpaste%2520and%2520soap.jpg": "1a76eb935f59f9dcb11d481b5226906f",
"assets/assets/images/urad%2520black.jpg": "0ba06902fa2a831c96c1e6ad652ce535",
"assets/assets/images/vegs_banner.png": "974b3ae2fa486c615fad412a8d892112",
"assets/assets/images/wai%2520wai%2520chicken%2520noodles%2520case.jpg": "dae998b320a13e7014bb8f9f6af183b0",
"assets/assets/images/wai%2520wai%2520chicken%2520noodles.jpg": "40b09940fbc35f5d1c250f47d7fc670a",
"assets/assets/images/wai%2520wai%2520noodle%2520veg%2520case.jpg": "230a98e1a4d192e949049a9f63e4ebb3",
"assets/assets/images/wai%2520wai%2520noodle%2520veg.jpg": "c7834097d9c5f11264543b59643f85b1",
"assets/assets/images/walnut.jpg": "0d2f91b926a4af96a36315edcb8efcbc",
"assets/assets/images/welcome.png": "cd75d224f87327ed23fa332ef6bf08dd",
"assets/assets/images/white%2520lobiya%2520bodi.jpg": "75f9799225f4a44629cc38bdc62ad7e0",
"assets/assets/images/white%2520pea%2520dry.jpg": "35be97ff8b66855716135f87db6ba553",
"assets/assets/juice/BVITAS-GAUVA-JUICE-250ML-90.jpg": "b88709a1d8e1d71751f6d3820ead411a",
"assets/assets/juice/BVITAS-LYCHEE-250ML-90.jpg": "15cb5fa08ca9670d3f07a7159ab2af50",
"assets/assets/juice/BVITAS-MANGO-JUICE-90.jpg": "71d8fe7fa150ee4d4886e1ba18f43743",
"assets/assets/juice/chanachur%2520hot%2520ruchi-350.jpg": "0035e63a80fe9f2dff442f164a820109",
"assets/assets/juice/COCONUT-JUICE-150.jpg": "4e80f3b51ce9bdfc4f53f9e5a9fc17d5",
"assets/assets/juice/GAUVA-JUICE-150.jpg": "5ea292987d4c338c833cfaf054f325f9",
"assets/assets/juice/lemon%2520juice%25201L%2520500.jpg": "bceceb57fff9f0d25b53de316083ca25",
"assets/assets/juice/LEMON-250-ML-200.jpg": "29b83b13e6acc82c404e2bfaef97dc30",
"assets/assets/juice/LYCHE-NECTER-150.jpg": "0701bcb771f28aee48bf882db86f6de6",
"assets/assets/juice/MAAZA-1L-350.jpg": "29e111ba0a197913a04a7a47990a5583",
"assets/assets/juice/MAAZA-250ML-90.jpg": "52121765815eb78e2999bc088acfbf96",
"assets/assets/juice/POMOGRANATE-NECTER-180.jpg": "7dcdfb51befc0d2bdad1f26509bb733c",
"assets/assets/juice/REAL-GAUVa-JUICE-430.jpg": "ff54ca2303861b828e1e8c62a1ca25e6",
"assets/assets/juice/REAL-GREEN-MANGO-430.jpg": "33fff83773d1e8d644829ad373cf09f7",
"assets/assets/juice/REAL-MANGO-JUICE-430.jpg": "3a5cdc19694278b97842de2f62ee1062",
"assets/assets/juice/REAL-POMOGRANATE-JUICE-430.jpg": "b0df0b4b65216facc9df9c1cd969d40c",
"assets/assets/juice/ROOH-AFZA-800ML-1000.jpg": "7596d89261daaf2c1bea617c7452f77e",
"assets/assets/juice/TAMARIND-DRIND-tamarind%2520drink-150.jpg": "add56e304e6c4f8db77e332929ed1276",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "21197fbc72f768e89cc9b0d88c98fbc3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c2454d256ae195562d0dc9c97cdf20e9",
"/": "c2454d256ae195562d0dc9c97cdf20e9",
"main.dart.js": "4510415fba200bfb530a87182ab7c85a",
"manifest.json": "4fd720ff007d465ac703a6ce89b67792",
"version.json": "535284ca201ac83e898bc90297982288"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
