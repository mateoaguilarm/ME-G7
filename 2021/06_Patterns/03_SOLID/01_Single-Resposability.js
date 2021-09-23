console.log(`Message from Console 💻`);

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
            console.log(`I'm a HD Square ◻️`);
        } else {
            console.log(`I'm just a Normal Square`);
        }
    }

    rotate(degrees = 0) {
        console.log(`I'm a Square rotating ${degrees}º degrees`);
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
            console.log('Dibujando un cuadrado de alta HD 😎');
        } else {
            console.log('Dibujando un cuadrado 🟥');
        }
    }

    rotate(degrees = 0) {
        console.log(`Rotando el cuadrado ${degrees} grados 🔄`);
    }
}