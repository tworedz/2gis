var map;

DG.then(function () {
    map = DG.map('map', {
        center: [84.98, 82.89],
        zoom: 15
    });

    DG.marker([54.95, 82.89]).addTo(map);
});
