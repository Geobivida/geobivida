// Inicia o mapa
var mapa = L.map('mapa').setView([-26.3045, -48.8487], 12); // Joinville, por exemplo

// Adiciona camada base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(mapa);

// Adiciona dados GeoJSON
fetch('data/pontos.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(`<b>${feature.properties.nome}</b>`);
        }
    }).addTo(mapa);
  });
