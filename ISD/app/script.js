function outputTableAttributes(json) {
  let element = document.getElementById("results");
  let features = json.features;
  for (i=0; i<features.length; i++) {
    tr = document.createElement('tr');
    let a = features[i].attributes;
    let g = features[i].geometry;
    let td = document.createElement('td');
    td.innerHTML = a.NAME;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML = a.TYPE;
    tr.appendChild(td);
    element.appendChild(tr);
  }
}

  // Request user geolocation and callback with lat, lon
  function getLocation(page) {
    navigator.geolocation.getCurrentPosition(
      location=>console.log(location),
      location=>error.log(location)
    ); 
    

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

  
  