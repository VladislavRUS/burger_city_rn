export const map = `
<!DOCTYPE html>
<html>
  <head>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      html,
      body {
        height: 100%;
      }

      #map {
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      function initMap() {
        var place = { lat: LATITUDE, lng: LONGITUDE };
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: place,
          disableDefaultUI: true,
          draggable: false
        });
        var marker = new google.maps.Marker({ position: place, map: map });
      }
    </script>
    <script
      async
      defer
      src="https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=initMap"
    ></script>
  </body>
</html>
`;
