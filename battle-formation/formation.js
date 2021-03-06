$( document ).ready(function() {
  var map = L.map('map', {
              maxZoom: 24,
              minZoom: 1,
              crs: L.CRS.Simple
          }).setView([0, 0], 1);

    var imageUrl = 'map.jpg',
        imageBounds = [[270,-480], [-270,480]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);

});
