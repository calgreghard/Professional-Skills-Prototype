class label {
    constructor() {

    }

    update(context) {
        context.fillStyle = 'rgb(211,211,211)';
        context.rect(canvas.width - (canvas.width / 20), canvas.height/50, 10, 10);
        context.fill();
    }
}