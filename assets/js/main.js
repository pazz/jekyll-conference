---
---

{% include js/conference.js %}

(function() {
    var map_provider = "{{ site.conference.location.map.map_provider }}";
    var home_coord = [{{ site.conference.location.map.home_coord }}];
    var default_zoom = {{ site.conference.location.map.default_zoom }};

    if (document.getElementById('map')) {
        var map = L.map('map').setView(home_coord, default_zoom);

        L.tileLayer.provider(map_provider).addTo(map);

        L.easyButton('far fa-star', function(){
            map.setView(home_coord, default_zoom);
        }).addTo(map);

        L.control.locate().addTo(map);

        {% for m in site.conference.location.map.markers %}
          var coord = [{{ m.coord }}];
          var icon = L.AwesomeMarkers.icon({
              icon: "{{ m.icon }}",
              prefix: 'fa',
              iconColor: '{{ m.icon_color }}',
              markerColor: '{{ m.marker_color }}'
          });
          var marker = L.marker(coord, {icon: icon}).addTo(map);
          marker.bindPopup("{{ m.description }}").openPopup();
        {% endfor %}
    }
})();
