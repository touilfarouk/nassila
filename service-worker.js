if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-a6621a23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/android-chrome-144x144.png",revision:"7e4c8a3bd25756ad59911a1c29a62517"},{url:"assets/android-chrome-192x192.png",revision:"5c6eca52508a72feec777ff6dce716de"},{url:"assets/android-chrome-256x256.png",revision:"7511b61211db484ba9f8e3665fdb5352"},{url:"assets/android-chrome-36x36.png",revision:"96218056b66c4362ed61e97796c5816e"},{url:"assets/android-chrome-384x384.png",revision:"e20f314ff0d532929ee899cd190e4799"},{url:"assets/android-chrome-48x48.png",revision:"191b7dc72732518a181a083dd28a3372"},{url:"assets/android-chrome-512x512.png",revision:"e52fb4d70bf13f200f460da890e995fb"},{url:"assets/android-chrome-72x72.png",revision:"bf718736c287542e2627f0cf5e78e26b"},{url:"assets/android-chrome-96x96.png",revision:"b6f96a690be0861b21231bb75d242874"},{url:"assets/apple-touch-icon-1024x1024.png",revision:"fbe6bcb0078b6a27d660509f86c44f1f"},{url:"assets/apple-touch-icon-114x114.png",revision:"4e4b36b548c00c4e484ef742484dd2be"},{url:"assets/apple-touch-icon-120x120.png",revision:"9456379554241fd25f47dc8ea581902c"},{url:"assets/apple-touch-icon-144x144.png",revision:"24edc4edd4a6e4469ae38f2bc4784541"},{url:"assets/apple-touch-icon-152x152.png",revision:"d40bc8e9a935664d2b67f0be24110abe"},{url:"assets/apple-touch-icon-167x167.png",revision:"54ff20a9fc71038f8c469b6f5f799045"},{url:"assets/apple-touch-icon-180x180.png",revision:"dd6f941eb1bf4016fb9a0e4bb6baed35"},{url:"assets/apple-touch-icon-57x57.png",revision:"d90fe8ae2b721410156c00bd419ff858"},{url:"assets/apple-touch-icon-60x60.png",revision:"605bedacea06a2b52e38640f6b244a3a"},{url:"assets/apple-touch-icon-72x72.png",revision:"f8a15955b6c7fcb493a85e140802ba08"},{url:"assets/apple-touch-icon-76x76.png",revision:"bb281c5c88d85af37fd955af59b38f04"},{url:"assets/apple-touch-icon-precomposed.png",revision:"dd6f941eb1bf4016fb9a0e4bb6baed35"},{url:"assets/apple-touch-icon.png",revision:"dd6f941eb1bf4016fb9a0e4bb6baed35"},{url:"assets/apple-touch-startup-image-1125x2436.png",revision:"8847bad91499368adb7301a0d03b2bea"},{url:"assets/apple-touch-startup-image-1136x640.png",revision:"5b88e799de7eb9893a1850ce388a5b6f"},{url:"assets/apple-touch-startup-image-1242x2208.png",revision:"3bba86fff20198746eba4d605eac2906"},{url:"assets/apple-touch-startup-image-1242x2688.png",revision:"7833b338962412e0a9f6f29641a78682"},{url:"assets/apple-touch-startup-image-1334x750.png",revision:"89395519e70dd6f1ebe4b661f92f6fcc"},{url:"assets/apple-touch-startup-image-1536x2048.png",revision:"2f4608f6a7d6b58f6b81f6ad86421a65"},{url:"assets/apple-touch-startup-image-1620x2160.png",revision:"b4f5578edcd8f8837a3001eea68ceec3"},{url:"assets/apple-touch-startup-image-1668x2224.png",revision:"43abf8e87e1a3ed40eac856b1d67861e"},{url:"assets/apple-touch-startup-image-1668x2388.png",revision:"2867af23d5a5db469fab3460e8636b89"},{url:"assets/apple-touch-startup-image-1792x828.png",revision:"d367ec955960fe9203468d2cc028ff79"},{url:"assets/apple-touch-startup-image-2048x1536.png",revision:"06ea115753918c33e8529669aca8d6cf"},{url:"assets/apple-touch-startup-image-2048x2732.png",revision:"052ad3e3b7828b9ce3849510f15b12e9"},{url:"assets/apple-touch-startup-image-2160x1620.png",revision:"6b5f899258fd800412be56153428659e"},{url:"assets/apple-touch-startup-image-2208x1242.png",revision:"59f3a77c183bd3d6050e6a0996d006e0"},{url:"assets/apple-touch-startup-image-2224x1668.png",revision:"bf74e7e6e7f18e0e997091d31ca8bf86"},{url:"assets/apple-touch-startup-image-2388x1668.png",revision:"9f775dc67a13906e5d008af3f2e97c9e"},{url:"assets/apple-touch-startup-image-2436x1125.png",revision:"1539e397b296d1b9e38a3b8dba9efe24"},{url:"assets/apple-touch-startup-image-2688x1242.png",revision:"5a23dee75d17bc4f8dc59a85a589828e"},{url:"assets/apple-touch-startup-image-2732x2048.png",revision:"5aa1adef0a2da42ebdf1d0f5ba47a0f2"},{url:"assets/apple-touch-startup-image-640x1136.png",revision:"39f92503a733a3dff3f75f87db267018"},{url:"assets/apple-touch-startup-image-750x1334.png",revision:"045e9e27d14f433c4ab5f78bca8a903c"},{url:"assets/apple-touch-startup-image-828x1792.png",revision:"9064d1a103ea4d6a4c0f9949f9d038c0"},{url:"assets/browserconfig.xml",revision:"6b9febff1eb49f1662476afc3e8c6d77"},{url:"assets/coast-228x228.png",revision:"2810f4817e319bf7fdf9f1aafe967cbc"},{url:"assets/favicon-16x16.png",revision:"5282708992cfe05c09674216504bc6f0"},{url:"assets/favicon-32x32.png",revision:"9d2f34ed7364ac2e0a314ed65148f1c4"},{url:"assets/favicon-48x48.png",revision:"191b7dc72732518a181a083dd28a3372"},{url:"assets/favicon.ico",revision:"51bb0d7f1603fb940c613b9215791f10"},{url:"assets/firefox_app_128x128.png",revision:"4975e2fa6a0a4abaf90789669349e59f"},{url:"assets/firefox_app_512x512.png",revision:"53450d95536f5a9154b0aaeac3269ef0"},{url:"assets/firefox_app_60x60.png",revision:"ceefc028401ec3e3ffa4e3604da7846f"},{url:"assets/manifest.json",revision:"ebe7e8705c14428fe86160556dd3fabe"},{url:"assets/manifest.webapp",revision:"ce27edee11acb9c98af8186491e63e21"},{url:"assets/mstile-144x144.png",revision:"7e4c8a3bd25756ad59911a1c29a62517"},{url:"assets/mstile-150x150.png",revision:"44d94f68da603f976a06ae09d82879f5"},{url:"assets/mstile-310x150.png",revision:"01443645456120e68acb4ca92782d958"},{url:"assets/mstile-310x310.png",revision:"d393f69bfa20028de3538bd7a030c87f"},{url:"assets/mstile-70x70.png",revision:"1129f44fcd58c41a42eb4e9a274c1f70"},{url:"assets/yandex-browser-50x50.png",revision:"f5c2a41e641ff2a9767b6b571ae5b04e"},{url:"assets/yandex-browser-manifest.json",revision:"1fa786b96e710d40404b454e3f54141c"},{url:"index.html",revision:"755b89ea809a8189818234894423b633"},{url:"main.css",revision:"7037b81bdaae27140cce5b43fd1cb52f"},{url:"main.js",revision:"6ce8a29db00e0ce8c2f8c2ecd7ef55c7"},{url:"main.js.LICENSE.txt",revision:"ac1d32e2116a66660d06e2f6a5ba9780"}],{})}));