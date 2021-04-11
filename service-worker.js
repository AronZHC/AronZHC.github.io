/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/aron/Desktop/blog/public/2020/10/23/自我介绍/index.html","d48e5043ab2fba548c01d4a052af404e"],["C:/Users/aron/Desktop/blog/public/2020/10/31/C8051F380初级教程-1/index.html","ecab8a7f406111af66a9baa80630566d"],["C:/Users/aron/Desktop/blog/public/2021/03/05/ControlTheory_Ⅰ/index.html","36f2dd2cf0d8eccd5689bd69bc98e16a"],["C:/Users/aron/Desktop/blog/public/2021/04/09/Ⅳ变量和不同的赋值方式/index.html","e81534e3bed5c3438752f5674f04a33b"],["C:/Users/aron/Desktop/blog/public/2021/04/09/构造函数/index.html","987acbce3058d0f8d27d2171c7734fe3"],["C:/Users/aron/Desktop/blog/public/2021/04/11/Ⅴ预定义变量的使用/image-20210411175525011.png","b76e5233d86b05cb626b5ea2f41e7ee9"],["C:/Users/aron/Desktop/blog/public/2021/04/11/Ⅴ预定义变量的使用/image-20210411175744920.png","3d7f40968d9f6a80c366ac17235990ca"],["C:/Users/aron/Desktop/blog/public/2021/04/11/Ⅴ预定义变量的使用/index.html","978b6c9c1a6666e99c9402ce19c81a09"],["C:/Users/aron/Desktop/blog/public/404.html","de61f60e4c87ac3c099c82bbba9e13ac"],["C:/Users/aron/Desktop/blog/public/archives/2020/10/index.html","48d819ca2d21ac41d3744488e7686b91"],["C:/Users/aron/Desktop/blog/public/archives/2020/index.html","f214bd92d257e9bbbb5e3f7fdf592e56"],["C:/Users/aron/Desktop/blog/public/archives/2021/03/index.html","037f510e4a22ac2fa37152729160e07d"],["C:/Users/aron/Desktop/blog/public/archives/2021/04/index.html","4b03911417d3c90712f7f1b20bf33280"],["C:/Users/aron/Desktop/blog/public/archives/2021/index.html","b562b956b895548cc8b335bce9778b44"],["C:/Users/aron/Desktop/blog/public/archives/index.html","7ceefbb2d96c3d8ebd4800958d6e47a3"],["C:/Users/aron/Desktop/blog/public/categories/index.html","96fc75304502e1f0dd8ef10e455c8a71"],["C:/Users/aron/Desktop/blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["C:/Users/aron/Desktop/blog/public/css/index.css","3f8d1e39857e6856c2795013cd53a7b6"],["C:/Users/aron/Desktop/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/aron/Desktop/blog/public/gallery/index.html","c39e6cc0420674d8766791b67676c963"],["C:/Users/aron/Desktop/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/aron/Desktop/blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["C:/Users/aron/Desktop/blog/public/index.html","1d833d6e22434a1b42ae0113085ca057"],["C:/Users/aron/Desktop/blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["C:/Users/aron/Desktop/blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["C:/Users/aron/Desktop/blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["C:/Users/aron/Desktop/blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["C:/Users/aron/Desktop/blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/aron/Desktop/blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["C:/Users/aron/Desktop/blog/public/js/scroll.js","603fa932f3ec986228c2136a51a14f94"],["C:/Users/aron/Desktop/blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["C:/Users/aron/Desktop/blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["C:/Users/aron/Desktop/blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["C:/Users/aron/Desktop/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["C:/Users/aron/Desktop/blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["C:/Users/aron/Desktop/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["C:/Users/aron/Desktop/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["C:/Users/aron/Desktop/blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["C:/Users/aron/Desktop/blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["C:/Users/aron/Desktop/blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["C:/Users/aron/Desktop/blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["C:/Users/aron/Desktop/blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["C:/Users/aron/Desktop/blog/public/slides/index.html","fa04cdf1eb440573f9af5927787e09a7"],["C:/Users/aron/Desktop/blog/public/tags/C/index.html","eea7b0f51fd65c9f1a6197a43e3f46aa"],["C:/Users/aron/Desktop/blog/public/tags/index.html","3d49a95c1f7d7c1dba777c926b115382"],["C:/Users/aron/Desktop/blog/public/tags/makefile/index.html","917bc10e8cd2fa47b5601da74831c33c"],["C:/Users/aron/Desktop/blog/public/tags/介绍/index.html","b19ec5dac915858bbed37afff1fa9359"],["C:/Users/aron/Desktop/blog/public/tags/单片机-，教程/index.html","e17f40f558584f81e7e6b5ca6534f1b8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







