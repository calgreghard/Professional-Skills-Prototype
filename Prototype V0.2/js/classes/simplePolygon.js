var polygonEnum = {
    MOVETO: 0,
    LINETO: 1,
    properties: {
        0: { name: 'MOVETO' },
        1: { name: 'LINETO' }
    }
};

class simplePolygon {
    constructor(points, fillcolour) {
        this.points = points;
        this.fillColour = fillcolour;
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = this.fillColour;
        for (var i = 0; i < this.points.length; i++) {
            switch (i) {
                case 0:
                    context.moveTo(this.points[i].x, this.points[i].y);
                    break;
                default:
                    console.log(this);
                    if (isNaN(this.points[i])) {
                        console.log(this.points[i]);
                        if (this.points[i].includes("MOVETO"))
                            context.moveTo(this.points[i].substring(5, this.points[i].search('_') - 1), this.points[i].substring(this.points[i].search('_') + 1));
                        else if (this.points[i].includes('LINETO'))
                            context.moveTo(this.points[i].substring(5, this.points[i].search('_') - 1), this.points[i].substring(this.points[i].search('_') + 1));
                    }
                    else {
                        context.lineTo(this.points[i].x, this.points[i].y);
                    }
                    break;
            }
        }
        context.closePath();
        context.fill();
    }
}