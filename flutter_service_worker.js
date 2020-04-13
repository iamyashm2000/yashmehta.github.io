'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"/AssetManifest.json": "751d73de6f0927b131fb3d19146c85fd",
"/assets\about.html": "cca535e84bb3f1ad20cd1423638d0253",
"/assets\AssetManifest.json": "751d73de6f0927b131fb3d19146c85fd",
"/assets\assets\about.html": "cca535e84bb3f1ad20cd1423638d0253",
"/assets\assets\avatar.jpg": "456e161e1b5c498832d56579b96925ce",
"/assets\assets\facebook.png": "021ada146ffb7c1753557ff29618d04c",
"/assets\assets\FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"/assets\assets\github.png": "d22ee3727a7216019c3848df6eafa024",
"/assets\assets\GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"/assets\assets\instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"/assets\assets\linkedin.png": "926e2dcf5ab4220a359867614556df68",
"/assets\assets\medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"/assets\assets\medium_light.png": "bd516690c99267a778885736015befe8",
"/assets\assets\moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"/assets\assets\twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"/assets\assets\works\cocoapay.png": "1a116679a577ef4af05f6e3c7f6f23be",
"/assets\assets\works\facelyt.png": "9c21f203fc4d3a9ca53455c525b63f94",
"/assets\assets\works\kharedi_now.png": "d0c478d3e7e33419a8f48b34bf1207e3",
"/assets\assets\works\messio.png": "23233361bc75dab41e50d279138d4f4a",
"/assets\assets\works\mydealer.png": "14f62eb3413897290d2b2a248dcd8931",
"/assets\assets\works\mynewcar.png": "cf467ada9e6bba4c8cf4e19e3c8864ed",
"/assets\assets\works\railenq.png": "ada5668fcf89fc62195547566febc449",
"/assets\assets\works\rajasthan_tourism.png": "d7e838f9f73511fc7038a05b60859356",
"/assets\assets\works\savaari_consumer.png": "1f8e373e7b912498e24149b633460ad6",
"/assets\assets\works\savaari_partner.png": "5de6fe640934c0b23321fe4b83e4bf1b",
"/assets\assets\works\stattion.png": "3e39fc6c1f96b3201cb661452edc6d7f",
"/assets\assets\works\trivz.png": "4fc7b4922689e1508fdbd35a9b1785ee",
"/assets\assets\works\truelancer.png": "6fb95e8b38b764676678907ba9560037",
"/assets\assets\works\vdrone.png": "f9817772bfa75c8d65c62810d83be284",
"/assets\assets\works\wheelie_repairs.png": "cd0c2be230c6e7b9cb6224da0726d7ca",
"/assets\avatar.jpg": "456e161e1b5c498832d56579b96925ce",
"/assets\facebook.png": "021ada146ffb7c1753557ff29618d04c",
"/assets\FontManifest.json": "592290621294619b16740a9d89232ba6",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\github.png": "d22ee3727a7216019c3848df6eafa024",
"/assets\GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"/assets\instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"/assets\LICENSE": "eabbd8b4d1cffc59cf5704d361e8fdc0",
"/assets\linkedin.png": "926e2dcf5ab4220a359867614556df68",
"/assets\medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"/assets\medium_light.png": "bd516690c99267a778885736015befe8",
"/assets\moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"/assets\twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"/assets\works\cocoapay.png": "1a116679a577ef4af05f6e3c7f6f23be",
"/assets\works\facelyt.png": "9c21f203fc4d3a9ca53455c525b63f94",
"/assets\works\kharedi_now.png": "d0c478d3e7e33419a8f48b34bf1207e3",
"/assets\works\messio.png": "827f062f04c16a164d9d7e9d13f24916",
"/assets\works\mydealer.png": "14f62eb3413897290d2b2a248dcd8931",
"/assets\works\mynewcar.png": "a856c91717e8817762660e95e591a10f",
"/assets\works\railenq.png": "7982d54f1972d96a8f10a389ad354db2",
"/assets\works\rajasthan_tourism.png": "d7e838f9f73511fc7038a05b60859356",
"/assets\works\savaari_consumer.png": "480950a09ee167d32cdabea4b45b676f",
"/assets\works\savaari_partner.png": "05e90af963f924eeac54490a5a2dcd38",
"/assets\works\stattion.png": "3e39fc6c1f96b3201cb661452edc6d7f",
"/assets\works\trivz.png": "4fc7b4922689e1508fdbd35a9b1785ee",
"/assets\works\truelancer.png": "1126f584894fa84c5c052ec625ebf54e",
"/assets\works\vdrone.png": "f9817772bfa75c8d65c62810d83be284",
"/assets\works\wheelie_repairs.png": "cd0c2be230c6e7b9cb6224da0726d7ca",
"/favicon.ico": "dd55b82325b221860b480551cb343da3",
"/FontManifest.json": "592290621294619b16740a9d89232ba6",
"/fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "3d6cff87aa85b6b4ac5725345131c50c",
"/LICENSE": "9e93105abdc0d9455cd2b0440360c515",
"/main.dart.js": "6c4efa6ab0cbc398f8fb4ad984d6fb49",
"/manifest.json": "5c0df29cc514d42547a90001b434a009"
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
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
