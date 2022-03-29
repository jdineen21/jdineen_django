
var canvas = document.getElementById("matrix_canvas");
var ctx = canvas.getContext("2d");

var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890|!£$%^&*()-=[]{};:#~<>/?";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function getRandSymbol() {
    return symbols.charAt(Math.floor(Math.random() * symbols.length - 1));
}

class Snake {
    constructor() {
        this.snakePosition = getRndInteger(-100, 0);
        this.snakeLength = getRndInteger(25, 46);
        this._snakeLayer = "";
        this._snakeLayerTwo = "";
    }

    get snakeLayer() {
        return this._snakeLayer;
    }

    set snakeLayer(x) {
        this._snakeLayer = this._snakeLayer.concat(x);
        if (this._snakeLayer.length > this.snakeLength) {
            this._snakeLayer = this._snakeLayer.substring(1, this._snakeLayer.length);
        }

        this.snakePosition += 1;
        if (this.snakePosition > 50 + this.snakeLength) {
            this.snakePosition = getRndInteger(-40, 0);
        }
    }

    get snakeLayerTwo() {
        return this._snakeLayerTwo;
    }

    set snakeLayerTwo(x) {
        this._snakeLayerTwo = this._snakeLayerTwo.concat(x);
        if (this._snakeLayerTwo.length > this.snakeLength) {
            this._snakeLayerTwo = this._snakeLayerTwo.substring(1, this._snakeLayerTwo.length);
        }
    }
}

var snakeArr = [];

for (i = 0; i < 100; i++) {
    snakeArr.push(new Snake());
}

var width = 2000;
var height = 1500;

var columns = 100;
var frequency = 20;
var timeout = Math.floor(1000/frequency);
var seperation = Math.floor(width/columns);

var timeoutInstance;

function redraw() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.font = "20px Courier";
    ctx.fillStyle = "#008f11";

    for (i = 0; i < 100; i++) {
        snakeArr[i].snakeLayer = getRandSymbol();
        snakeArr[i].snakeLayerTwo = getRandSymbol();
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var x = 0; x < width; x += seperation) {
        for (var y = 0; y < height; y += seperation) {
            if (Math.floor(y/seperation) < snakeArr[Math.floor(x/seperation)].snakePosition) {
                if (snakeArr[Math.floor(x/seperation)].snakeLayer[snakeArr[Math.floor(x/seperation)].snakePosition-Math.floor(y/seperation)] != undefined) {
                    ctx.fillText(snakeArr[Math.floor(x/seperation)].snakeLayer[snakeArr[Math.floor(x/seperation)].snakePosition-Math.floor(y/seperation)], x, y);
                    ctx.fillText(snakeArr[Math.floor(x/seperation)].snakeLayerTwo[snakeArr[Math.floor(x/seperation)].snakePosition-Math.floor(y/seperation)], x, y);
                }
            }
        }
    }

    setTimeout(redraw, timeout);
}

redraw();