/**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author chenqiushi(chenqiushi@baidu.com)
 */

/**
 * Import workbox-sw with `importScripts` function.
 * 1. Need adding publicPath manually.
 * 2. If the version of workbox updated, modification is also required.
 */
importScripts('/static/js/workbox-sw.prod.v2.1.2.js');

const workboxSW = new WorkboxSW({
    cacheId: 'lavas-cache',
    ignoreUrlParametersMatching: [/^utm_/],
    skipWaiting: true,
    clientsClaim: true
});

// Define precache injection point.
workboxSW.precache([
  {
    "url": "/lavas-demo/index.html",
    "revision": "220d6ba3304626f9fb98d11f5018c1b2"
  },
  {
    "url": "/lavas-demo/static/css/index.ed5c7c4c.css"
  },
  {
    "url": "/lavas-demo/static/fonts/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "/lavas-demo/static/fonts/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "/lavas-demo/static/js/index.26e312c6.js"
  },
  {
    "url": "/lavas-demo/static/js/manifest.17a0d9e2.js"
  },
  {
    "url": "/lavas-demo/static/js/vendor.db046167.js"
  },
  {
    "url": "/lavas-demo/static/js/vue.4dca8e7e.js"
  },
  {
    "url": "/lavas-demo/static/js/workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  },
  {
    "url": "/appshell",
    "revision": "513c98ce0d8cfeb95f3c93f4d96da424"
  }
]);

// Define response for HTML request.
workboxSW.router.registerNavigationRoute('/appshell');
