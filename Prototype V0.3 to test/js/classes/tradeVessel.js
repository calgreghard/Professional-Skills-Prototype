class tradeVessel {
    constructor(city) {
        this.location = new point(city.location.x, city.location.y);
        this.active = false;
        this.image = caravanImage;
        this.route = {
            HOME: city,
            DESTINATION: undefined
        };

        this.onReturn = false;
    }

    draw(context, x, y) {
        if (this.active) {
            context.drawImage(this.image, this.location.x + (x * dragVelocity), this.location.y + (y * dragVelocity), canvas.width / 10, canvas.height / 10);
            this.move();
        }
    }

    move() {
        if (this.active) {
            if (this.route.DESTINATION.location.x > this.location.x)
                this.location.x++;
            else if (this.route.DESTINATION.location.x < this.location.x)
                this.location.x--;

            if (this.route.DESTINATION.location.y > this.location.y)
                this.location.y++;
            else if (this.route.DESTINATION.location.y < this.location.y)
                this.location.y--;
        }

        if (this.location.x === this.route.DESTINATION.location.x && this.location.y === this.route.DESTINATION.location.y) {
            if (this.onReturn) {
                this.route.HOME = this.route.DESTINATION;
                this.route.DESTINATION = undefined;
                this.endRoute();
            } else {
                this.onReturn = true;
                var c = this.route.HOME;
                this.route.HOME = this.route.DESTINATION;
                this.route.DESTINATION = c;
                //switchVar(this.route.HOME, this.route.DESTINATION);
            }
        }
    }

    newRoute(city) {
        this.route.DESTINATION = city;
        this.active = true;
    }

    endRoute() {
        this.active = false;
    }

}