let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.1706431, lng: 136.8816945 },
    zoom: 12,
  });

  //スタイルの設定
  let styleOptions = new google.maps.StyledMapType(
    [
      {
        featureType: 'all',
        stylers: [
          { 'saturation': -150 },
          { 'visibility': 'on' },
          { 'lightness': 22 },
        ]
      },
      {
        futureType: 'landscape.natural',
        stylers: [
          { 'color': '#87ceeb' },
        ]
      },
      {
        futureType: 'poi.attraction',
        stylers: [
          {}
        ]
      },

      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { 'color': '#6a1917' },
          { 'saturation': -50 },

        ]
      },
      {

        futureType: 'geometry',
        elementType: 'labels.text',
        stylers: [
          { 'visibillity': 'inherit' },
          { 'color': '#black' },
        ]
      }

    ]
    , { name: 'Styled Map' });
  map.mapTypes.set('map', styleOptions);
  map.setMapTypeId('map');
}
