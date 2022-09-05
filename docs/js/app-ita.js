// Nuestro código irá aquí
var arregloPines = [];
const icono = "images/pin.png";
const icono_chaco = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
var igle = '-25.500544993071735, -57.35710630081914';

// Función para agregar pines
// function agregarMarcador( location ){

//     var pin = new google.maps.Marker({
//         position: location,
//         map: map,
//         // animation: google.maps.Animation.DROP
//     });

//     console.log("Latitud: ", location.lat() );
//     console.log("Longitud: ", location.lng() );

//     // Va a resetearnos cada uno de los pines
//     for (var i in arregloPines) {
//         arregloPines[i].setMap(null);
//     }
    
//     arregloPines.push( pin );

// }

function cargar_mapa_ita(){

    var lat = -25.500544993071735; //$('#map').data('lat');
    var lang = -57.35710630081914; //$('#map').data('lang');

    var myLatlng = new google.maps.LatLng(lat, lang);

    var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

    var myOptions = {
        center: new google.maps.LatLng( igle ), // Iglesia El Refugio
        apTypeId: google.maps.MapTypeId.ROADMAP,
        icon: 'images/marker.png',
        zoom: 14,
        center: myLatlng,
        mapTypeControl: false,
        disableDefaultUI: true,
        zoomControl: false,
        scrollwheel: true,
        //styles: styles
    };

    map = new google.maps.Map( document.getElementById('gmap_canvas'), myOptions) 

    // Agregar listener click
    // map.addListener('click', function(event){
    //     agregarMarcador(event.latLng);
    //         //console.log(event);         
    // });

//* Inicio de TAVA VIII


    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.500544993071735, -57.35710630081914 ),
        map: map,
        icon: icono,
        title: "Iglesia Manantial de Vida de los Hermanos Menonitas - Itá"
    });
//! Fin de TAVA VIII
  

    arregloPines.push(pin);


}
