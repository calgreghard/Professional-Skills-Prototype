class city {
    constructor(point, name, type, properties, religion, deity) {
        this.location = point;
        this.point = point;

        this.name = name;

        this.type = type;
        this.multiplier = cityType.properties[type].multiplier;
        this.image = cityType.properties[type].image;

        this.properties = (properties === undefined) ? [] : properties;
        this.cityGoods = new dictionary();
        if (this.properties.length > 0) {
            for (var i = 0; i < properties.length; i++) {
                this.cityGoods.addKey(this.properties[i].produce);
            }
        }

        this.playerProperties = [];
        this.playerGoods = new dictionary();
        if (this.properties.length > 0) {
            for (var i = 0; i < properties.length; i++) {
                this.playerGoods.addKey(this.properties[i].produce);
            }
        }

        this.religion = (religion !== undefined) ? true : false;
        this.patronDeity = (deity !== undefined) ? true : false;

        this.description = this.name;

        this.description += ' ' + cityType.properties[type].name;

        this.playerCaravans = [];

        this.selectedVessel = 0;
        this.selectedProduct = 0;
        this.selectedCity = 0;

        var x = RNG(4,1);
        for (var i = 0; i < x; i++) {
            this.addCaravan();
        }
    }

    update(context, x, y) {
        context.drawImage(this.image, this.location.x + (x * dragVelocity), this.location.y + (y * dragVelocity), canvas.width / 10, canvas.height / 5);
        context.fillStyle = 'rgb(0,0,0,0.75)';
        context.font = '15px Arial';
        context.fillText(this.name, this.location.x + (x * dragVelocity), this.location.y + (y * dragVelocity), canvas.width / 10, canvas.height / 5);
        context.stroke();
    }

    addCaravan() {
        this.playerCaravans.push(new tradeVessel(this));
    }
}