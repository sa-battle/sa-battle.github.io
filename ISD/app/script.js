function show(btn, classifier,name) {
    // black out the other buttons in the menu bar
    var tabs = document.getElementsByClassName("w3-bar-item");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("w3-grey");
      tabs[i].classList.add("w3-black");
    }
    // colour this button
    btn.classList.remove("w3-black");
    btn.classList.add("w3-grey");
    
    // hide all the elements in the class
    var x = document.getElementsByClassName(classifier);
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    // show the element identified
    var panel = document.getElementById(name);
    panel.style.display = "block";
    
    // refresh the iframe
    var iframe = panel.getElementsByTagName("iframe");
    iframe[0].src = iframe[0].src;
  }
  
  // Request user geolocation and callback with lat, lon
  function getLocation(fun,page) {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(loc) {
            fun(page,loc.coords.latitude, loc.coords.longitude,true);
          })
      }
      else {
          alert("Geolocation is not supported by this browser.");     // location defaults to central Bristol
          fun(page,51.454514, -2.587910,false);
      }
  }
  
  // Load map with lat, lon query string
  function loadMap(page,lat,lon,userloc) {
      // userloc indicates if this is the true user location.
      location.href=page+"?lat="+lat+"&lon="+lon+"&userloc="+userloc;
  }
  
  