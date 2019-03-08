var canvas = document.getElementById('canvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
var context = canvas.getContext('2d');

var selectedSeason = seasons.Akhet; //the currently selected season
var selectedCity;

var building1 = document.getElementById('building1'), background = document.getElementById('bg');
//here is the images being loaded into the game

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

var goodsList = [
    new tradeGoods('Flax', 3),
    new tradeGoods('Copper', 1),
    new tradeGoods('Antelope skin', 2)
];

var cityList = [
    new city(new point(100, 0), 'Giza', building1, cityType.SMALL, goodsList, true),
    new city(new point(100, 350), 'Memphis', building1, cityType.METROPOLIS, goodsList, true)
];

//var egyptianReligion = new religions('Egyptian Pantheon', [
//    new deities('Ra', new uniqueGoods('Sun disk pottery', 'Sun disk'), //redo all deities
//    new deities('Shu', undefined, 'the Ostrich feather'),
//    new deities('Tefnut', ['Moisture', 'Moist Air', 'Dew', 'Rain'], 'Lioness'),
//    new deities('Nut', ['Sky', 'Stars', 'Cows']),
//    new deities('Geb', ['Geese', 'Snakes', 'Bulls', 'Barley']),
//    new deities('Isis', undefined, 'Tyet'),
//    new deities('Nephtys', undefined, 'House and basket'),
//    new deities('Set', ['Desert', 'Storms', 'Disorder', 'Violence', 'Foriegners'], ['Was-sceptre', 'Set animal']),
//    new deities('Osiris', ['Dead', 'Rebirth'], ['Crook and flail', 'Atef crown', 'Ostrich feathers', 'Fish', 'Gauze', 'Djed']),
//    new deities('Anubis', 'Protector', ['Fetish', 'Flail']),
//    new deities('Horus', 'Patron', 'Eye of Horus')
//]);