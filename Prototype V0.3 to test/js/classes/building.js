class buildings {
    constructor(type, produce) {
        this.type = type;
        this.produce = produce;
        this.perHundred = (buildingType.properties[type].perHundred !== undefined) ? buildingType.properties[type].perHundred : undefined;
        this.seasonal = (buildingType.properties[type].perHundred === undefined) ? seasons.Shemu : undefined;
    }

    harvest(city) {
        if (this.seasonal) {
            if (city.cityGoods.key.includes(this.produce)) {
                city.cityGoods.changeValue(this.produce, '+100');
            }
            console.log(city.name + ' produced ' + this.produce.name);
        }
        else if (this.perHundred) {
            if (city.cityGoods.key.includes(this.produce)) {
                city.cityGoods.changeValue(this.produce, '+1');
            }
            console.log(city.name + ' produced ' + this.produce.name);
        }
    }
}