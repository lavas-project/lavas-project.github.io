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
importScripts('/lavas-demo/appshell-new/static/js/workbox-sw.prod.v2.1.2.js');

const workboxSW = new WorkboxSW({
    cacheId: 'lavas-cache',
    ignoreUrlParametersMatching: [/^utm_/],
    skipWaiting: true,
    clientsClaim: true
});

// Define precache injection point.
workboxSW.precache([
  {
    "url": "/lavas-demo/appshell-new/index.html",
    "revision": "eb5ee38648987aac2bea4240806f9341"
  },
  {
    "url": "/lavas-demo/appshell-new/static/css/index.ed5c7c4c.css"
  },
  {
    "url": "/lavas-demo/appshell-new/static/fonts/MaterialIcons-Regular.012cf6a1.woff"
  },
  {
    "url": "/lavas-demo/appshell-new/static/fonts/MaterialIcons-Regular.a37b0c01.ttf"
  },
  {
    "url": "/lavas-demo/appshell-new/static/fonts/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "/lavas-demo/appshell-new/static/fonts/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "/lavas-demo/appshell-new/static/js/index.1e42e9ea.js"
  },
  {
    "url": "/lavas-demo/appshell-new/static/js/manifest.c60a34ca.js"
  },
  {
    "url": "/lavas-demo/appshell-new/static/js/vendor.ded9ba07.js"
  },
  {
    "url": "/lavas-demo/appshell-new/static/js/vue.be7f9f65.js"
  },
  {
    "url": "/lavas-demo/appshell-new/static/js/workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  },
  {
    "url": "/appshell",
    "revision": "59efa4bcf555311329c9f3ae732b2b51"
  }
]);

// Define response for HTML request.
workboxSW.router.registerNavigationRoute('/lavas-demo/appshell-new/index.html');
