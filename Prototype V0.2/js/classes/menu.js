class menu {
    constructor(point, size, bgcolour, midcolour, fgcolour, tabs) {
        this.point = point;
        this.size = size;
        this.bgColour = bgcolour;
        this.unselectedTabColour = midcolour;
        this.selectedTabColour = fgcolour;
        this.tabs = tabs;
        this.tabIndex = 0;
        this.visible = false;
    }

    update(context, city) {
        if (this.visible) {
            context.fillStyle = this.bgColour;
            context.rect(this.point.x, this.point.y, this.size.x, this.size.y); //this is building the background of the menu
            context.fill();

            context.fillStyle = 'rgb(0,0,0)';
            context.font = '15px Arial';
            context.fillText(city.name, this.point.x, this.point.y);

            let shape;
            let startPoint;
            let savedPoint = new point();

            for (var i = 0; i < this.tabs.length; i++) {
                if (i !== this.tabIndex) {
                    startPoint = new point(this.point.x + 2 * (this.size.x / 10), this.point.y + this.size.y / 10);

                    shape = new simplePolygon([startPoint], this.selectedTabColour);

                    savedPoint.x = startPoint.x, savedPoint.y = startPoint.y;

                    savedPoint.x += this.size.x / 10;
                    polygonEnum.properties[0]
                    shape.points.push(polygonEnum.properties[polygonEnum.LINETO].name + savedPoint.x + '_' + savedPoint.y); //move right
                    savedPoint.y += this.size.y / 20;
                    shape.points.push(polygonEnum.properties[polygonEnum.LINETO].name + savedPoint.x + '_' + savedPoint.y); //move down
                    savedPoint.x = this.point.x + this.size.x - (this.size.x / 10);
                    shape.points.push(polygonEnum.properties[polygonEnum.LINETO].name + savedPoint.x + '_' + savedPoint.y); //move right
                    savedPoint.y = this.point.y + this.size.y - 10;
                    shape.points.push(polygonEnum.properties[polygonEnum.LINETO].name + savedPoint.x + '_' + savedPoint.y); //move down
                    savedPoint.x = this.point.x + this.size.x / 10;
                    shape.points.push(polygonEnum.properties[polygonEnum.LINETO].name + savedPoint.x + '_' + savedPoint.y); //move left
                    savedPoint.y = startPoint.y + this.size.y / 20;
                    shape.points.push(polygonEnum.properties[polygonEnum.LINETO].name + savedPoint.x + '_' + savedPoint.y); //move up
                    savedPoint.x = startPoint.x;
                    shape.points.push(polygonEnum.properties[polygonEnum.LINETO].name + savedPoint.x + '_' + savedPoint.y); //move right
                }
                else {
                    startPoint = new point(this.point.x + this.size.x / 10, this.point.y + this.size.y / 10);

                    shape = new simplePolygon([startPoint], this.unselectedTabColour);

                    savedPoint.x = startPoint.x, savedPoint.y = startPoint.y;

                    savedPoint.x += this.size.x / 10;
                    shape.points.push(polygonEnum.properties[polygonEnum.LINETO].name + savedPoint.x + '_' + savedPoint.y); //move right
                    savedPoint.y += (this.size.y / 20);
                    shape.points.push(polygonEnum.properties[polygonEnum.LINETO].name + savedPoint.x + '_' + savedPoint.y);  //move down
                    savedPoint.x = startPoint.x;
                    shape.points.push(polygonEnum.properties[polygonEnum.LINETO].name + savedPoint.x + '_' + savedPoint.y); //move left

                    shape.points.push(startPoint);//back to start
                }
                shape.draw(context);

                context.fillStyle = 'rgb(0,0,0)';
                context.fillText(this.tabs[i].name, startPoint.x, startPoint.y + 5);
            }

            switch (this.tabs[this.tabIndex].style) {
                case menuType.TRADE:
                    startPoint = new point(this.point.x + 1.5 * (this.size.x / 10), this.point.y + this.size.y / 9);


                    break;
                case menuType.INFO:

                    break;
            }
        }
    }
}