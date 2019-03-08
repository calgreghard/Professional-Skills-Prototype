//timer
var x = 0;
console.log('frame: ' + x + ' season: ' + seasons.properties[selectedSeason].name);
createListeners();
render();

console.log(cityList[0].cityGoods);
function createListeners() {
    document.addEventListener('mousemove', function (e) {
        mouseLocation.x = e.screenX, mouseLocation.y = e.screenY;
        if (moveScreen)
            move();
    });
    document.addEventListener('touchmove', function (e) {
        mouseLocation.x = e.touches[0].clientX, mouseLocation.y = e.touches[0].clientY;
        if (moveScreen)
            move();
    });
    document.addEventListener('mousedown', down);
    document.addEventListener('touchstart', down);
    document.addEventListener('mouseup', up);
    document.addEventListener('touchend', up);

    document.addEventListener('keypress', pause);

    function pause(e) {
        switch (e.which) {
            case 112: //p
                if (moveScreen) {
                    paused = true;
                    moveScreen = false;
                } else {
                    paused = false;
                    moveScreen = true;
                }
                break;
        }
    }

    function move() {
        if (mouseDown) {
            newLocation.x = (visualLocation.x === 0) ?
                mouseLocation.x - downLocation.x : visualLocation.x + mouseLocation.x - downLocation.x;
            newLocation.y = (visualLocation.y === 0) ?
                mouseLocation.y - downLocation.y : visualLocation.y + mouseLocation.y - downLocation.y;
        }
    }

    function down(e) {
        mouseDown = true;
        downLocation.x = mouseLocation.x, downLocation.y = mouseLocation.y;
    }

    function up(e) {
        mouseDown = false;

        if (moveScreen) {
            if (mouseLocation.x === downLocation.x && mouseLocation.y === downLocation.y) {
                for (var i = 0; i < cityList.length; i++) {
                    cityList[i].point.x = cityList[i].location.x + (newLocation.x * dragVelocity);
                    cityList[i].point.y = cityList[i].location.y + (newLocation.y * dragVelocity);

                    if (checkBetween(mouseLocation, cityList[i].point,
                        new point(cityList[i].point.x + cityList[i].image.width, cityList[i].point.y + cityList[i].image.height))) {
                        selectedCity = cityList[i];
                        cityMenu.visible = true;
                        moveScreen = false;
                        break;
                    }
                    else {
                        visualLocation.x = newLocation.x, visualLocation.y = newLocation.y;
                    }
                }
            }
        } else {
            if (mouseLocation.x === downLocation.x && mouseLocation.y === downLocation.y
                && !checkBetween(mouseLocation, cityMenu.point,
                    new point(cityMenu.point.x + cityMenu.size.x, cityMenu.point.y + cityMenu.size.y))) {
                cityMenu.visible = false;
                moveScreen = true;
            }
        }
    }
}

function seasonChange() {
    if (selectedSeason === 2) {
        selectedSeason = 0;
    }
    else {
        selectedSeason++;
    }

    for (var i = 0; i < cityList.length; i++) {
        for (var j = 0; j < cityList[i].playerProperties.length; j++) {
            if (ownedBuildings[i].seasonal === selectedSeason)
                ownedBuildings[i].harvest();
        }
    }
    //console.log('frame: ' + x + ' season: ' + seasons.properties[selectedSeason].name);
}

function perHundredHarvest(type) {
    for (var i = 0; i < cityList.length; i++) {
        for (var j = 0; j < cityList[i].playerProperties.length; j++) {
            if (cityList[i].playerProperties[j].type === type)
                cityList[i].playerProperties[i].harvest();
        }
    }
}

function render() {
    if (!paused) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        if (moveScreen)
            timerRender();

        context.drawImage(background, 0 - canvas.width + (newLocation.x * dragVelocity),
            0 - canvas.height + (newLocation.y * dragVelocity),
            canvas.width * 3, canvas.height * 3);

        for (var i = 0; i < cityList.length; i++) {
            cityList[i].update(context, newLocation.x, newLocation.y);
        }

        cityMenu.update(context, selectedCity);

    }
    else {
        context.font = "30px Arial";
        context.fontStyle = 'rgb(0, 0, 0, 0.01)';
        context.fillText('Pause', canvas.width / 2 - canvas.width / 7, canvas.height / 2);
    }
    requestAnimationFrame(render);
}

function timerRender() {
    x++;
    if (x % 100 === 0)
        seasonChange();
    if (x % buildingType.properties[buildingType.HUNTER].perHundred === 0)
        perHundredHarvest(buildingType.HUNTER);
    if (x % buildingType.properties[buildingType.WEAVER].perHundred === 0)
        perHundredHarvest(buildingType.WEAVER);
    if (x % buildingType.properties[buildingType.SMITH].perHundred === 0)
        perHundredHarvest(buildingType.SMITH);
    if (x % buildingType.properties[buildingType.POTTER].perHundred === 0)
        perHundredHarvest(buildingType.POTTER);
    if (x % buildingType.properties[buildingType.MINER].perHundred === 0)
        perHundredHarvest(buildingType.MINER);
}

function checkBetween(check, point1, point2) {
    if (point1.x < point2.x && point1.y < point2.y) {
        if (check.x > point1.x && check.x < point2.x && check.y > point1.y && check.y < point2.y)
            return true;
        else
            return false;
    }
    else {
        if (check.x > point2.x && check.x < point1.x && check.y > point2.y && check.y < point1.y)
            return true;
        else
            return false;
    }
}