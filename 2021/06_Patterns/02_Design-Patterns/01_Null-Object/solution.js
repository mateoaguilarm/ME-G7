console.log('console msg ✉️');

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    hasAccess() {
        return this.name === 'Mateo'
    }
}

class NullUser {
    constructor() {
        this.id = -1;
        this.name = `Guest`
    }

    hasAccess() {
        return false
    }
}

const mateo = new User(1, 'Mateo');
const pedro = new User(2, 'Pedro');
const users = [mateo, pedro]

function getUser(id) {
    const user = users.find(user => user.id === id);

    if (user === null) {
        return new NullUser()
    } else {
        return user;
    }
}

function printUser(id) {
    const user = getUser(id);

    

    if (user != null && user.hasAccess != null && user.hasAccess()) {
        console.log(`Welcome ${user.name}`);
    } else {
        console.log(`No Access`);
    }
}

// printUser(1)
// printUser(2)