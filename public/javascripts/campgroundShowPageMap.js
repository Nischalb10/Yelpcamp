mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
  center: campground.geometry.coordinates, // starting position [lng, lat]
  zoom: 10 // starting zoom
});

map.on('load', () => {
    if (!campground.geometry.coordinates.length) {
        map.setCenter([78.9629, 20.5937]); // Default to India's center
        map.setZoom(4);
    }
});

map.addControl(new mapboxgl.NavigationControl());


new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
        .setHTML(
            `<h3>${campground.title}</h3><p>${campground.location}</p>`
        )
    )
    .addTo(map);
