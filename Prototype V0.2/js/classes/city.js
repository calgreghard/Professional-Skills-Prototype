class city {
    constructor(point, name, image, multiplier, goods, port, religion, deity, properties) {
        this.location = point;
        this.point = point;
        this.name = name;
        this.image = image;
        this.multiplier = multiplier.multiplier;
        this.properties = properties;
        this.playerProperties = [];
        this.cityGoods = new dictionary(goods);
        for (var i = 0; i < goodsList.length; i++) {
            this.cityGoods.addValue(i, 0);
        }
        this.playerGoods = [];
        this.port = (port !== undefined) ? true : false;
        this.religion = (religion !== undefined) ? true : false;
        this.patronDeity = (deity !== undefined) ? true : false;
        this.playerShips = 0;
        this.playerCaravans = 0;
        this.camp = false;
        this.upgrades = undefined;
    }

    update(context, x, y) {
        context.drawImage(this.image, this.location.x + (x * dragVelocity), this.location.y + (y * dragVelocity), canvas.width/10, canvas.width/10);
        context.stroke();
    }
}