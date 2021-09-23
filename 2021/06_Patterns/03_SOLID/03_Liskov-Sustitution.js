
// Sin Principio

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    setWidth(value) {
        this.width = value;
    }

    setHeight(value) {
        this.height = value;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return this.width * 2 + this.height * 2;
    }
}

// No funcionaria porque se le esta campiando las propiedades originales
class Square extends Rectangle {
    setWidth(value) {
        this.width = value;
        this.height = value;
    }

    setHeight(value) {
        this.width = value;
        this.height = value;
    }
}


// Aplicando Principio

class Shape {
    setColor(color) {
        this.color = color;
    }

    render(area) {
        return `Rendering shape with ${area} area`
    }
}

// Si funciona porque las clases de Figuras extienden de clase mas grande
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    setWidth(value) {
        this.width = value;
    }

    setHeight(value) {
        this.height = value;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return this.width * 2 + this.height * 2;
    }
}

class Square extends Shape {
    setWidth(value) {
        this.width = value;
        this.height = value;
    }

    setHeight(value) {
        this.width = value;
        this.height = value;
    }
}