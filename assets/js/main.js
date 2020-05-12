---
---

{% include js/conference.js %}

(function() {
    // Alternative map providers can be found on https://leaflet-extras.github.io/leaflet-providers/preview/
    // The following do match the Bootstrap design not too badly:
    //   - Hydda.Full
    //   - Thunderforest.Neighbourhood
    //   - Esri.WorldTopoMap
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
    }
})();
