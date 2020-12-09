function Shape(w, h) {
    if (this.constructor == Shape) throw "Can't Create object of this type";
    this.width = w || 0;
    this.height = h || 0;
    this.area = function () {
        return h * w;
    };
    /*this.perimeter = function () {
        return 2 * (w + h);
    };*/
    this.displayInfo = function () {
        debugger
        for (var item in this) {
            if (item != "displayInfo" && item!= "constructor") {
                if (typeof this[item] != "function") {
                    console.log(item + ": " + this[item]);
                } else {
                    console.log(item + ": " + this[item]());
                }
            }
        }
    };
}



function Rectangle(w, h) {
    if(Rectangle.count == 1 && this.constructor==Rectangle) throw "max number of instances reached";
    if(this.constructor == Rectangle) Rectangle.count++;
    Shape.call(this, w, h);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.height);
};

Rectangle.count = 0;

function Square(l) {
    if(Square.count == 1 && this.constructor==Square) throw "max number of instances reached";
    if(this.constructor == Square) Square.count++;
    Rectangle.call(this, l, l);
}

Square.prototype = Object.create(Rectangle.prototype);;
Square.prototype.constructor = Square;

Square.count = 0;


Square.prototype.perimeter = function () {
    return 4 * this.height;
}
