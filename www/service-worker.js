/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
//self.toolbox.router.any('/*', self.toolbox.fastest);

/* Handle the request by trying to fetch the URL from the network. 
If the fetch fails, fail the request. Essentially the same as 
not creating a route for the URL at all. */
self.toolbox.router.any('/*', self.toolbox.networkOnly);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
//self.toolbox.router.default = self.toolbox.networkFirst;

//Handle the request by trying to fetch the URL from the network.
self.toolbox.router.default = self.toolbox.networkOnly;
