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

// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    this.document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    this.document.querySelector("#navbar").style.opacity = 1;
  }
});

// Smooth Scrolling
$("#navbar a, .btn").on('click', function (event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 80
      }, 800);
  } // End if
});