// Initialize and add the map
function initMap() {
  // My location
  const loc = { lat: 49.842957, lng: 24.031111 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 14
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({
    position: loc, map: map
  })
}