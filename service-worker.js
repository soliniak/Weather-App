"use strict";var precacheConfig=[["/Weather-App/index.html","cc8ea2b448101974bc4e4d01ea3df2ee"],["/Weather-App/static/css/main.f121c117.css","056a1c513cb8f3b3951ac91c9bdf516a"],["/Weather-App/static/js/main.35a302d0.js","1aef411505b0418831f2cbd3a21ef91b"],["/Weather-App/static/media/barcelona.a24516b8.jpg","a24516b8e2388a433afdf828f1e0140c"],["/Weather-App/static/media/img-placeholder.ae96e53a.jpg","ae96e53ac296046bb1eb1de49a2c6db0"],["/Weather-App/static/media/lighting_cover.40f4ba54.gif","40f4ba5401a4bfd1d76f105512c81cd2"],["/Weather-App/static/media/meksyk.5e8253e4.jpg","5e8253e4f3f466fa502ee4e3440ca4f6"],["/Weather-App/static/media/mist_cover.c57eb0cc.png","c57eb0ccb2cae450812c5a7cbfe4f6ea"],["/Weather-App/static/media/moscow.97e4c309.jpg","97e4c3091cdae09c6585f6d1b8f98a69"],["/Weather-App/static/media/newyork.1c1e11ba.jpg","1c1e11ba4ac554bae237c44542e62518"],["/Weather-App/static/media/rain_cover.926327da.png","926327da478fe2f2b05d5d4b1cfcc1e0"],["/Weather-App/static/media/sad_face.d51d3c6a.jpg","d51d3c6addfd9a9038fbdb2985dfbaab"],["/Weather-App/static/media/stromclouds.6070f680.jpg","6070f6803345c5c62596da1a71c80319"],["/Weather-App/static/media/warsaw.e9f592ef.jpg","e9f592eff09d4a24776c0ce592a38aa7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/Weather-App/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});