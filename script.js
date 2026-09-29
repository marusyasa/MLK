
const map = L.map("map", {
    center: [48.5, 31.2],
    zoom: 6,
    minZoom: 6,
    maxZoom: 12
});

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


const regionInfo = {

    "Київська область": {
        title: "Київська область",
        text: `
            <p><b>Центр:</b> Київ</p>
            <p><b>Площа:</b> 28 131 км²</p>
            <p><b>Опис:</b> Область розташована в центральній частині України.</p>
        `
    },

    "Вінницька область": {
        title: "Вінницька область",
        text: `
            <p><b>Центр:</b> Вінниця</p>
            <p><b>Площа:</b> 26 513 км²</p>
            <p><b>Опис:</b> Розташована в центрально-західній частині України.</p>
        `
    },

    "Волинська область": {
        title: "Волинська область",
        text: `
            <p><b>Центр:</b> Луцьк</p>
            <p><b>Площа:</b> 20 144 км²</p>
            <p><b>Опис:</b> Розташована на північному заході України.</p>
        `
    },

    "Дніпропетровська область": {
        title: "Дніпропетровська область",
        text: `
            <p><b>Центр:</b> Дніпро</p>
            <p><b>Площа:</b> 31 974 км²</p>
            <p><b>Опис:</b> Один із найбільших промислових регіонів України.</p>
        `
    },

    "Донецька область": {
        title: "Донецька область",
        text: `
            <p><b>Центр:</b> Донецьк</p>
            <p><b>Площа:</b> 26 517 км²</p>
            <p><b>Опис:</b> Розташована на сході України.</p>
        `
    },

    "Житомирська область": {
        title: "Житомирська область",
        text: `
            <p><b>Центр:</b> Житомир</p>
            <p><b>Площа:</b> 29 832 км²</p>
            <p><b>Опис:</b> Розташована на півночі України.</p>
        `
    },

    "Закарпатська область": {
        title: "Закарпатська область",
        text: `
            <p><b>Центр:</b> Ужгород</p>
            <p><b>Площа:</b> 12 777 км²</p>
            <p><b>Опис:</b> Гірський регіон на заході України.</p>
        `
    },

    "Запорізька область": {
        title: "Запорізька область",
        text: `
            <p><b>Центр:</b> Запоріжжя</p>
            <p><b>Площа:</b> 27 183 км²</p>
            <p><b>Опис:</b> Розташована на південному сході України.</p>
        `
    },

    "Івано-Франківська область": {
        title: "Івано-Франківська область",
        text: `
            <p><b>Центр:</b> Івано-Франківськ</p>
            <p><b>Площа:</b> 13 928 км²</p>
            <p><b>Опис:</b> Західний регіон України, значну частину займають Карпати.</p>
        `
    },

    "Кіровоградська область": {
        title: "Кіровоградська область",
        text: `
            <p><b>Центр:</b> Кропивницький</p>
            <p><b>Площа:</b> 24 588 км²</p>
            <p><b>Опис:</b> Розташована в центральній частині України.</p>
        `
    },

    "Львівська область": {
        title: "Львівська область",
        text: `
            <p><b>Центр:</b> Львів</p>
            <p><b>Площа:</b> 21 833 км²</p>
            <p><b>Опис:</b> Західний регіон України з великою кількістю історичних місць.</p>
        `
    },

    "Миколаївська область": {
        title: "Миколаївська область",
        text: `
            <p><b>Центр:</b> Миколаїв</p>
            <p><b>Площа:</b> 24 598 км²</p>
            <p><b>Опис:</b> Розташована на півдні України.</p>
        `
    },

    "Одеська область": {
        title: "Одеська область",
        text: `
            <p><b>Центр:</b> Одеса</p>
            <p><b>Площа:</b> 33 310 км²</p>
            <p><b>Опис:</b> Найбільша за площею область України. Має вихід до Чорного моря.</p>
        `
    },

    "Полтавська область": {
        title: "Полтавська область",
        text: `
            <p><b>Центр:</b> Полтава</p>
            <p><b>Площа:</b> 28 748 км²</p>
            <p><b>Опис:</b> Розташована в центральній частині України.</p>
        `
    },

    "Рівненська область": {
        title: "Рівненська область",
        text: `
            <p><b>Центр:</b> Рівне</p>
            <p><b>Площа:</b> 20 047 км²</p>
            <p><b>Опис:</b> Розташована на північному заході України.</p>
        `
    },

    "Сумська область": {
        title: "Сумська область",
        text: `
            <p><b>Центр:</b> Суми</p>
            <p><b>Площа:</b> 23 834 км²</p>
            <p><b>Опис:</b> Розташована на північному сході України.</p>
        `
    },

    "Тернопільська область": {
        title: "Тернопільська область",
        text: `
            <p><b>Центр:</b> Тернопіль</p>
            <p><b>Площа:</b> 13 823 км²</p>
            <p><b>Опис:</b> Розташована на заході України.</p>
        `
    },

    "Харківська область": {
        title: "Харківська область",
        text: `
            <p><b>Центр:</b> Харків</p>
            <p><b>Площа:</b> 31 415 км²</p>
            <p><b>Опис:</b> Розташована на сході України.</p>
        `
    },

    "Херсонська область": {
        title: "Херсонська область",
        text: `
            <p><b>Центр:</b> Херсон</p>
            <p><b>Площа:</b> 28 461 км²</p>
            <p><b>Опис:</b> Розташована на півдні України.</p>
        `
    },

    "Хмельницька область": {
        title: "Хмельницька область",
        text: `
            <p><b>Центр:</b> Хмельницький</p>
            <p><b>Площа:</b> 20 645 км²</p>
            <p><b>Опис:</b> Розташована в західній частині України.</p>
        `
    },

    "Черкаська область": {
        title: "Черкаська область",
        text: `
            <p><b>Центр:</b> Черкаси</p>
            <p><b>Площа:</b> 20 900 км²</p>
            <p><b>Опис:</b> Розташована в центральній частині України.</p>
        `
    },

    "Чернівецька область": {
        title: "Чернівецька область",
        text: `
            <p><b>Центр:</b> Чернівці</p>;
            <p><b>Площа:</b> 8 097 км²</p>
            <p><b>Опис:</b> Найменша за площею область України.</p>
        `
    },

    "Чернігівська область": {
        title: "Чернігівська область",
        text: `
            <p><b>Центр:</b> Чернігів</p>
            <p><b>Площа:</b> 31 865 км²</p>
            <p><b>Опис:</b> Розташована на півночі України.</p>
        `
    }
};


const geojsonUrl =
    "https://raw.githubusercontent.com/slawomirmatuszak/ukrainian_geodata/main/regiony.geojson";


fetch(geojsonUrl)
    .then(response => response.json())
    .then(data => {

        const regions = L.geoJSON(data, {

            style: {
                color: "#222",
                weight: 1,
                fillColor: "#5C766D",
                fillOpacity: 0.6
            },

            onEachFeature: function(feature, layer) {

                const p = feature.properties || {};

                /*
                 * У цьому GeoJSON назва може знаходитися
                 * в одному з різних полів.
                 */

                let name = null;

                const possibleNames = [
                    p.name,
                    p.Name,
                    p.NAME,
                    p.NAME_1,
                    p.name_1,
                    p.NAM,
                    p.NAM_1,
                    p.nam,
                    p.region,
                    p.Region,
                    p.REGION,
                    p.oblast,
                    p.Oblast,
                    p.OBLAST,
                    p.shapeName,
                    p.ShapeName,
                    p.SHAPENAME,
                    p.VARNAME_1,
                    p.type
                ];

                for (const value of possibleNames) {

                    if (
                        typeof value === "string" &&
                        value.trim() !== "" &&
                        value.trim().toLowerCase() !== "область"
                    ) {

                        name = value.trim();
                        break;

                    }

                }


                /*
                 * Якщо GeoJSON все одно не дає назву,
                 * визначаємо її за центром області.
                 */

                if (!name) {

                    const center =
                        layer.getBounds().getCenter();

                    const lat = center.lat;
                    const lng = center.lng;

                    if (lat > 50.8 && lng > 31) {
                        name = "Чернігівська область";
                    }
                    else if (lat > 50.0 && lng > 34.5) {
                        name = "Сумська область";
                    }
                    else if (lat > 49.5 && lng > 36.0) {
                        name = "Харківська область";
                    }
                    else if (lat > 49.5 && lng > 29.5) {
                        name = "Київська область";
                    }
                    else if (lat > 49.5 && lng > 23.0) {
                        name = "Волинська область";
                    }
                    else if (lat > 49.5) {
                        name = "Рівненська область";
                    }
                    else if (lat > 49.0 && lng > 33.0) {
                        name = "Полтавська область";
                    }
                    else if (lat > 49.0 && lng > 27.0) {
                        name = "Черкаська область";
                    }
                    else if (lat > 48.8 && lng > 23.0) {
                        name = "Хмельницька область";
                    }
                    else if (lat > 49.0) {
                        name = "Тернопільська область";
                    }
                    else if (lat > 48.3 && lng > 37.0) {
                        name = "Донецька область";
                    }
                    else if (lat > 47.8 && lng > 34.0) {
                        name = "Дніпропетровська область";
                    }
                    else if (lat > 47.5 && lng > 31.0) {
                        name = "Запорізька область";
                    }
                    else if (lat > 47.0 && lng > 29.0) {
                        name = "Миколаївська область";
                    }
                    else if (lat > 46.8 && lng > 30.0) {
                        name = "Одеська область";
                    }
                    else if (lat > 48.0 && lng < 24.0) {
                        name = "Закарпатська область";
                    }
                    else if (lat > 48.5 && lng < 25.0) {
                        name = "Івано-Франківська область";
                    }
                    else if (lat > 49.0 && lng < 24.0) {
                        name = "Львівська область";
                    }
                    else if (lat > 48.5 && lng < 23.0) {
                        name = "Волинська область";
                    }
                    else if (lat > 47.5 && lng < 28.0) {
                        name = "Вінницька область";
                    }
                    else if (lat > 47.0 && lng < 28.0) {
                        name = "Кіровоградська область";
                    }
                    else {
                        name = "Україна";
                    }
                }


                layer.bindTooltip(name, {
                    permanent: true,
                    direction: "center",
                    className: "region-label",
                    opacity: 1
                });


                layer.on("mouseover", function() {

                    layer.setStyle({
                        weight: 3,
                        fillOpacity: 0.85
                    });

                });


                layer.on("mouseout", function() {

                    regions.resetStyle(layer);

                });


                layer.on("click", function() {

                    openRegionInfo(name);

                });

            }

        }).addTo(map);


        map.fitBounds(
            regions.getBounds(),
            {
                padding: [10, 10]
            }
        );


        map.setMinZoom(map.getZoom());

    });


function openRegionInfo(name) {

    const overlay =
        document.getElementById("infoOverlay");

    const title =
        document.getElementById("regionTitle");

    const info =
        document.getElementById("regionInfo");


    if (regionInfo[name]) {

        title.textContent =
            regionInfo[name].title;

        info.innerHTML =
            regionInfo[name].text;

    } else {

        title.textContent = name;

        info.innerHTML = `
            <p>Інформація про область поки що не додана.</p>
        `;

    }


    overlay.style.display = "flex";
}


document
    .getElementById("closeButton")
    .addEventListener("click", function() {

        document.getElementById("infoOverlay").style.display = "none";

    });


document
    .getElementById("infoOverlay")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            this.style.display = "none";

        }

    });


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        document.getElementById("infoOverlay").style.display = "none";
    }

});

