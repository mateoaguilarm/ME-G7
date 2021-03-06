console.log(`Message from Console π»`);

// Sin Principio:

class Square {
    constructor() {
        this.side = side;
    }

    calculateArea() {
        return this.side * this.side;
    }

    calculatePerimeter() {
        return this.side * 4;
    }

    draw(reso) {
        if (reso == `HD`) {
            console.log(`I'm a HD Square β»οΈ`);
        } else {
            console.log(`I'm just a Normal Square`);
        }
    }

    rotate(degrees = 0) {
        console.log(`I'm a Square rotating ${degrees}ΒΊ degrees`);
    }
}


// Aplicandose el Principio:

class Square {
    constructor(side) {
        this.side = side;
    }

    calculateArea() {
        return this.side * this.side;
    }

    calculatePerimeter() {
        return this.side * 4;
    }
}

class SquareUI {
    draw(resolution = 'HD') {
        if (resolution === 'HD') {
            console.log('Dibujando un cuadrado de alta HD π');
        } else {
            console.log('Dibujando un cuadrado π₯');
        }
    }

    rotate(degrees = 0) {
        console.log(`Rotando el cuadrado ${degrees} grados π`);
    }
}