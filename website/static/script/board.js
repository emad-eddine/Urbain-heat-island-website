// // // // map
// // GeoTIFF
// var tiff = "http://localhost:8080/juillet2022/clip_11.tif";

// var map = L.map('map');

// /* Basemap */
// var url = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
// L.tileLayer(url, {
//     attribution: 'CartoDB & OSM',
//     subdomains: 'abc',
//     maxZoom: 19
// }).addTo(map);

// /*
//     Some ScalarField layers with custom styles
// */
// fetch(tiff).then(r => r.arrayBuffer()).then(function (buffer) {
//     var s = L.ScalarField.fromGeoTIFF(buffer);

//     var layer2 = L.canvasLayer.scalarField(s, {
//         //color: chroma.scale(['black','red','yellow','white']).correctLightness().domain(s.range).classes(25),
//         color: chroma.scale(['blue', 'yellow', 'red']).domain([10, 50]).classes(25),
//         mouseMoveCursor: null,
//         opacity: 0.55
//     }).addTo(map);;
//     layer2.on("click", function (e) {
//         if (e.value !== null) {
//             console.log(e.latlng)

//             $(document).ready(function() 
//             {
                
//             })
            
//             let popup = L.popup()
//                 .setLatLng(e.latlng)
//                 .setContent(`${e.value}`)
//                 .openOn(map);
//         }
//     });
//     map.fitBounds(layer2.getBounds());
// })


// function that send post request to server using ajax 
// send the position

// download the files






