/* Gym Mengo: cache do app para funcionar sem internet. */
var CACHE = "gym-mengo-v3";
var ARQUIVOS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./vinheta.mp3",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png"
];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(ARQUIVOS); })
      .then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(ks){
      return Promise.all(ks.map(function(k){
        if(k !== CACHE) return caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;

  var url = new URL(req.url);

  /* fontes do Google: usa o cache mas tenta atualizar por tras */
  if(url.hostname.indexOf("fonts.g") === 0 || url.hostname === "fonts.gstatic.com"){
    e.respondWith(
      caches.match(req).then(function(hit){
        var rede = fetch(req).then(function(r){
          caches.open(CACHE).then(function(c){ c.put(req, r.clone()); });
          return r;
        }).catch(function(){ return hit; });
        return hit || rede;
      })
    );
    return;
  }

  /* miniaturas dos exercicios: guarda depois de baixar, pra funcionar offline */
  if(url.hostname === "img.youtube.com" || url.hostname === "i.ytimg.com"){
    e.respondWith(
      caches.match(req).then(function(hit){
        return hit || fetch(req).then(function(r){
          if(r && r.status === 200){
            var copia = r.clone();
            caches.open(CACHE).then(function(c){ c.put(req, copia); });
          }
          return r;
        }).catch(function(){ return hit; });
      })
    );
    return;
  }

  if(url.origin !== location.origin) return;

  /* arquivos do app: cache primeiro, rede como reserva */
  e.respondWith(
    caches.match(req).then(function(hit){
      if(hit) return hit;
      return fetch(req).then(function(r){
        if(r && r.status === 200 && r.type === "basic"){
          var copia = r.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copia); });
        }
        return r;
      }).catch(function(){
        return caches.match("./index.html");
      });
    })
  );
});
