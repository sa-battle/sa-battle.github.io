  
  // Request user geolocation and callback with lat, lon
  function getLocation(page) {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function(loc) { // permission granted
              location.href=`${page}?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}`;
            },
            function() { // permission denied
              // location defaults to central Bristol
              location.href=`${page}?lat=51.454514&lon=-2.587910`;              
            }
          )
      }
      else { // unsupported feature
          alert("Geolocation is not supported by this browser.");
          // location defaults to central Bristol
          location.href=`${page}?lat=51.454514&lon=-2.587910`;
      }
  }

  
  