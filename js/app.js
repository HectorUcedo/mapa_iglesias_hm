// Nuestro código irá aquí
var arregloPines = [];

// Función para agregar pines
function agregarMarcador( location ){

    var pin = new google.maps.Marker({
        position: location,
        map: map,
        // animation: google.maps.Animation.DROP
    });

    console.log("Latitud: ", location.lat() );
    console.log("Longitud: ", location.lng() );

    // Va a resetearnos cada uno de los pines
    for (var i in arregloPines) {
        arregloPines[i].setMap(null);
    }
    
    arregloPines.push( pin );

}

function cargar_mapa(){

    var myOptions = {
        zoom:15,
        center: new google.maps.LatLng( -25.3493184,-57.5234007 ),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map( document.getElementById('gmap_canvas'), myOptions) 

    // Agregar listener click
    map.addListener('click', function(event){
        agregarMarcador(event.latLng);
            //console.log(event);         
    });



    var pin = new google.maps.Marker({

        position: new google.maps.LatLng( -25.3493184,-57.5234007 ),
        map: map,
        title: "JH FotoEstudio"
    });

    arregloPines.push(pin);

}



