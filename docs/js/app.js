// Nuestro código irá aquí
var arregloPines = [];
var icono = "images/pin.png"

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

function cargar_mapa(){

    var lat = -25.320265167823855; //$('#map').data('lat');
    var lang = -57.55294236520059; //$('#map').data('lang');

    var myLatlng = new google.maps.LatLng(lat, lang);

    var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

    var myOptions = {
        center: new google.maps.LatLng( -25.320265167823855, -57.55294236520059 ), // Iglesia El Refugio
        apTypeId: google.maps.MapTypeId.ROADMAP,
        icon: 'images/marker.png',
        zoom: 10,
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


    //* Departamento Central

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.320264561690234, -57.55294504740739 ),
        map: map,
        icon: icono,
        title: "El Refugio, Igl. Hermanos Menonitas\n Oficina de CEIPHM"
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.33853215332627, -57.489292596405825 ),
        map: map,
        icon: icono,
        title: "Iglesia Evangélica Sinai"
        
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.3982923,-57.4670016 ),
        map: map,
        icon: icono,
        title: "Centro Cristiano Maranatha"
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.28037554526531, -57.65100154335919 ),
        map: map,
        icon: icono,
        title: "Iglesia Hermanos Menonitas Príncipe de Paz"
    });


    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.37344148622139, -57.566239694431474 ),
        map: map,
        icon: icono,
        title: "Iglesia Villa Anita"
    });
  
    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.46833568571581, -57.48437629716371 ),
        map: map,
        icon: icono,
        title: "IHM Altos de Ypane"
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.500544993071735, -57.35710630081914 ),
        map: map,
        icon: icono,
        title: "Iglesia Manantial de Vida de los Hermanos Menonitas"
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.359146647653727, -57.59896766428428 ),
        map: map,
        icon: icono,
        title: "Iglesia Cristiana Shalom HM - San Isidro Lambare"
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.361592427454827, -57.61032551714799 ),
        map: map,
        icon: icono,
        title: "Iglesia Hermanos Menonitas Vida Nueva"
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.492667075591655, -57.45289599140317 ),
        map: map,
        icon: icono,
        title: "Iglesia Hnos Menonitas Gracia Y Verdad"
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.405024971025323, -57.28210686606255 ),
        map: map,
        icon: icono,
        title: "Iglesia La Estación"
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.4473167780316, -57.51521986811051 ),
        map: map,
        icon: icono,
        title: "Iglesia de Avivamiento Eben Ezer"
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.297255651095984, -57.630434787579176 ),
        map: map,
        icon: icono,
        title: "Iglesia Maranata De Los Hnos. Menonitas - Asunción"
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.403733328286613, -57.52123700550375 ),
        map: map,
        icon: icono,
        title: "Iglesia Emanuel"
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.33943967617024, -57.589996792841255 ),
        map: map,
        icon: icono,
        title: "Iglesia Peniel"
    });

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.39655258662675, -57.54748374865024 ),
        map: map,
        icon: icono,
        title: "Iglesia Cristo Vive de Los Hermanos Menonitas"
    });


    //* Fin de Region Central

    //* Inicio: Departamento de Boquerón

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -22.364216782256516, -60.01903119125341 ),
        map: map,
        icon: icono,
        title: "Comunidad Cristiana Roca De La Fe"
    });


    //* Inicio: Departamento de Paraguarí

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -25.911075861285408, -57.11391831207706 ),
        map: map,
        icon: icono,
        title: "Iglesia HM Acahay"
    });


    //* Misiones
    var pin = new google.maps.Marker({
        position: new google.maps.LatLng( -26.67134877764053, -57.14741491446397 ),
        map: map,
        icon: icono,
        title: "IGLESIA CRISTO SALVA"
    });



    arregloPines.push(pin);


}



