//timer
var x = 0;
console.log('frame: ' + x + ' season: ' + seasons.properties[selectedSeason].name);
createListeners();
render();

console.log(cityList[0].cityGoods);
function createListeners() {
    document.addEventListener('mousemove', function (e) {
        mouseLocation.x = e.screenX, mouseLocation.y = e.screenY;
        move();
    });
    document.addEventListener('touchmove', function (e) {
        mouseLocation.x = e.touches[0].clientX, mouseLocation.y = e.touches[0].clientY;
        move();
    });
    
    document.addEventListener('mousedown', down);
    document.addEventListener('touchstart', down);
    document.addEventListener('mouseup', up);
    document.addEventListener('touchend', up);

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
        console.log('mouseLocation');
        console.log(mouseLocation);
        console.log('downLocation');
        console.log(downLocation);
        console.log('visualLocation');
        console.log(visualLocation);
        console.log('newLocation');
        console.log(newLocation);
    }

    function up(e) {
        mouseDown = false;
        visualLocation.x = newLocation.x, visualLocation.x = newLocation.x;
        console.log('mouseLocation');
        console.log(mouseLocation);
        console.log('downLocation');
        console.log(downLocation);
        console.log('visualLocation');
        console.log(visualLocation);
        console.log('newLocation');
        console.log(newLocation);

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
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(background, 0 - canvas.width + (newLocation.x * dragVelocity),
        0 - canvas.height + (newLocation.y * dragVelocity),
        canvas.width * 3, canvas.height * 3);
    timerRender();
    for (var i = 0; i < cityList.length; i++) {
        cityList[i].update(context, newLocation.x, newLocation.y);
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