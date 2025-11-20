class Vehicle {
    constructor(owner, name, year) {
        this.owner = owner;
        this.name = name;
        this.year = year;
    }
    getDetails() {
        return `This is ${this.owner}'s ${this.year} ${this.name}`;
    }
    rev() {
        return "Vroom Vroom";
    }
}

class motorCycle extends Vehicle {
    constructor(owner, name, year, engine) {
        super(owner, name, year);
        this.engine = engine;
    }
    getDetails() {
        return `${this.super.getDetails}, with a ${this.engine}.`
    }


class Car extends Vehicle {
    constructor(owner, name, year, engine) {
        super(owner, name, year);
        this.engine = engine;
    }
    getDetails() {
        return `${this.super.getDetails}, with a ${this.engine}.`
    }
    honk() {
        return 'beep beep';
    }
}

class Boat extends Vehicle {
    constructor(owner, name, year, engine) {
        super(owner, name, year);
        this.engine = engine;
    }
    rev() {
        return `${super.rev} splash splash`
    }
    getDetails() {
        return `${this.super.getDetails}, with a ${this.engine}`
    }
    honk() {
        return 'BEEP BEEP';
    }
}

class Plane extends Vehicle {
    constructor(owner, name, year) {
        super(owner, name, year);
    }
    rev() {
        return 'hummmm humm';
    }
}
