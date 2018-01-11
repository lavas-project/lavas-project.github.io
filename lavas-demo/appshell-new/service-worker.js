importScripts('/lavas-demo/appshell-new/static/js/workbox-sw.prod.v2.1.2.js');/**
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
    "revision": "64476da6cac3a5afbd139800bc0732d7"
  },
  {
    "url": "/lavas-demo/appshell-new/static/css/index.09552c9b.css"
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
    "url": "/lavas-demo/appshell-new/static/js/index.e1f7a3fe.js"
  },
  {
    "url": "/lavas-demo/appshell-new/static/js/manifest.d6d063c0.js"
  },
  {
    "url": "/lavas-demo/appshell-new/static/js/vendor.b2ce233b.js"
  },
  {
    "url": "/lavas-demo/appshell-new/static/js/vue.43a05400.js"
  },
  {
    "url": "/lavas-demo/appshell-new/static/js/workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
]);

// Define response for HTML request.
workboxSW.router.registerNavigationRoute('/lavas-demo/appshell-new/index.html');
workboxSW.router.registerNavigationRoute('/index.html');