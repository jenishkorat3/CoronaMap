function updateMap() {
    console.log("updating data with real time.");
    fetch("./data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                //Mark on the map
                cases = element.infected;
                if(cases>255){
                    color= 'rgb(255,0,0)';
                }
                else{
                    color= `rgb(${cases},0,0)`;
                }
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

                // new mapboxgl.Marker()
                //     .setLngLat([longitude, latitude])
                //     .addTo(map);
            });
        })

}

let intervel = 4000;
setInterval(updateMap, intervel);
// updateMap();