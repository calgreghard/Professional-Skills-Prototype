var canvas = document.getElementById('canvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
var context = canvas.getContext('2d');

var selectedSeason = seasons.Akhet; //the currently selected season
var selectedCity;

var dragVelocity = 0.4; //this is the velocity multiplier which affects the dragging functionality
var mouseLocation = new point(0, 0), downLocation = new point(0, 0), //constant location of the mouse & the location of where you pressed down on the mouse
    visualLocation = new point(0, 0), newLocation = new point(0, 0), //the represented location of the images && the location that you placing objects after moving
    mouseDown = false;

var tradeTab = new tab('Trade', menuType.TRADE);
var infoTab = new tab('Info', menuType.INFO);

var cityMenu = new menu(new point(canvas.width / 10, canvas.height / 10),
    new point(canvas.width - (2 * (canvas.width / 10)), canvas.height - (2 * (canvas.height / 10))),
    'rgb(0, 0, 0, 0.75)', 'rgb(139,69,19,0.5)', 'rgb(160,82,45)',
    [tradeTab, infoTab]
);

var moveScreen = true;
var paused = false;

var cityList = [
    new city(new point(canvas.width / 2, 100), 'Heliopolis', cityType.TOWN, [new buildings(buildingType.TEMPLE, scripture)], egyptianReligion, ra),
    new city(new point(350, 50), 'Memphis', cityType.CITY, [new buildings(buildingType.FARM, flax)], egyptianReligion)
];

var randomCityList = [
    new city(new point(RNG(canvas.width), RNG(canvas.height)), 'Saqqara', cityType.MASTABA),
    new city(new point(RNG(canvas.width), RNG(canvas.height)), 'Meydum', RNG(Object.size(cityType) - 1)),
    new city(new point(RNG(canvas.width), RNG(canvas.height)), 'Dashur', RNG(Object.size(cityType) - 1)),
    new city(new point(RNG(canvas.width), RNG(canvas.height)), 'Helwan', RNG(Object.size(cityType) - 1)),
    new city(new point(RNG(canvas.width), RNG(canvas.height)), 'Herakleopolis', RNG(Object.size(cityType)) - 1),
    new city(new point(RNG(canvas.width), RNG(canvas.height)), 'Giza', cityType.PYRAMID),
    new city(new point(RNG(canvas.width), RNG(canvas.height)), 'Meydum', RNG(Object.size(cityType)))
];

function addCity() {
    var bool = false;

    if (randomCityList.length > 0) {
        while (!bool) {
            var x = RNG(randomCityList.length);
            if (!cityList.includes(randomCityList[x])) {
                cityList.push(randomCityList[x]);

                delete randomCityList[x];

                randomCityList.length--;
                bool = true;
            }
        }
    }
}

function startTradeRoute() {
    var bool = false;
    var moveOn = false;
    var cancel = false;
    var x = 0;
    var y = 0;

    for (var i = 0; i < cityList.length; i++) {
        for (var j = 0; j < cityList[i].playerCaravans.length; j++) {
            x++;
            if (cityList[i].playerCaravans[j].active) {
                y++;
            }
        }
    }

    if (x === y)
        cancel = true;

    while (!bool && !cancel) {
        x = RNG(cityList.length);
        y = RNG(cityList[x].playerCaravans.length);

        if (!cityList[x].playerCaravans[y].active) {
            while (!moveOn) {
                var k = RNG(cityList.length);
                if (k !== x) {
                    cityList[x].playerCaravans[y].newRoute(cityList[k]);

                    bool = true;
                    moveOn = true;
                }
            }
        }
    }
}

function RNG(max, min) {
    let x;
    if (!min) {
        x = Math.floor(Math.random() * max);
    } else {
        x = Math.floor(Math.random() * max + min);
    }

    return x;
}

function switchVar(a, b) {
    var c = a;
    a = b;
    b = c;

    return a, b;
}