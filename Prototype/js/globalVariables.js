var gameOpen = true;
var selectedSeason = seasons.Akhet;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var building1 = document.getElementById('building1'), background = document.getElementById('bg');
var dragVelocity = 0.3;
var mouseLocation = new point(0, 0), downLocation = new point(0, 0),
    visualLocation = new point(0, 0), newLocation = new point(0, 0),
    mouseDown = false;

var goodsList = [
    new tradeGoods('Flax', 3),
    new tradeGoods('Copper', 1),
    new tradeGoods('Antelope skin', 2)
];

var cityList = [
    new city(new point(100, 100), 'Heliopolis', building1, cityType.METROPOLIS, goodsList, true)
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