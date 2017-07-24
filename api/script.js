 function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.4, lng: 30.5},
          scrollwheel: false,
          zoom: 8
        });
      }
