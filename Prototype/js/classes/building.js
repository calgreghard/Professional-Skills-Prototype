class buildings {
    constructor(type, produce) {
        this.type = type;
        this.produce = produce;
        this.perHundred;
        this.seasonal;

        if (this.type === buildingType.FARM) {
            this.seasonal = seasons.Shemu;
        }
        else {
            this.perHundred = buildingType.properties[type].perHundred;
        }
    }

    harvest() {
        if (this.seasonal) {
            console.log('This ' + buildingType.properties[this.type].name + ' produced ' + this.produce.name);
        }
        else if (this.perHundred) {
            console.log(buildingType.properties[this.type].name + ' produced ' + this.produce.name);
        }
    }
}