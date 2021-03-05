$( document ).ready(function() {
  var map = L.map('map', {
              maxZoom: 24,
              minZoom: 1,
              crs: L.CRS.Simple
          }).setView([0, 0], 1);
      {% for user in user_data %}
          var myIcon = L.icon({
            iconUrl: '{{user.profile_image_url}}',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -50]
        });
        var point = L.point({{ user.pos_x }}, {{ user.pos_y }});
        L.marker().setIcon(myIcon).setLatLng(map.unproject(point)).bindPopup('第{{user.section}}/<a href="https://twitter.com/{{user.screen_name}}">{{ user.name }}</a><br />{{ user.mission }}').addTo(map);
   {% endfor %}
    var imageUrl = 'map.jpg',
        imageBounds = [[270,-480], [-270,480]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);

});
