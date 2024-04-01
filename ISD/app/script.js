const MY_TOKEN = "pk.eyJ1Ijoic3RldmViYXR0bGUiLCJhIjoiY2xzcWQxZzBiMHExZTJxbmpnN2hqbHMwZyJ9.hIauJCmUD0AzB4Uwru49QQ";

function outputTable(json) {
  let element = document.getElementById("results");
  element.innerHTML = "";
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
function getLocation(page,win = window, nav = navigator) {
  if (nav.geolocation) {
      nav.geolocation.getCurrentPosition(
        function(loc) { // permission granted
          win.location.href=`${page}?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}`;
        },
        function() { // permission denied
          // location defaults to central Bristol
          win.location.href=`${page}?lat=51.454514&lon=-2.587910`;              
        }
      )
  }
  else { // unsupported feature
      win.alert("Geolocation is not supported by this browser.");
      // location defaults to central Bristol
      win.location.href=`${page}?lat=51.454514&lon=-2.587910`;
  }
}

  
  