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

const mateo = new User(1, 'Mateo');
const pedro = new User(2, 'Pedro');
const users = [mateo, pedro]

function getUser(id) {
    return users.find(user => user.id === id);
}

function printUser(id) {
    const user = getUser(id);

    if (user != null && user.hasAccess != null && user.hasAccess()) {
        console.log(`Welcome ${user.name}`);
    } else {
        console.log(`No Access`);
    }
}

function PrintFancyUser(id) {
    const user = getUser(id);

    if (user.hasAccess()) {
        console.log(`Welcome awesome ${user.name}`);
    } else {
        console.log(`You do not have access awesome ${user.name}`);
    }
}

function PrintWarningUser() {
    
}

printUser(1)
printUser(2)