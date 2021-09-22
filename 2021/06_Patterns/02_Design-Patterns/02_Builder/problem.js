console.log(`Message from Problem.js`);

class Address {
    constructor(street, zipCode) {
        this.street = street;
        this.zipCode = zipCode;
    }


}

class User {
    constructor(name) {
        this.name = name;
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name);
    }

    setAge(age) {
        this.user.age = age;
        return this;
    }

    setPhone(phone) {
        this.user.phone = phone;
        return this;
    }

    setAddress(address) {
        this.user.address = address;
        return this;
    }

    build() {
        return this.user
    }
}

const abbyBuilder = new UserBuilder(`Abby`)

// const abby = new User(`Abby`, 25, 1234, new Address(`Principal Ave`, 44500));

const abby = abbyBuilder
    .setAge(25)
    .setPhone(1234)
    .setAddress(new Address(`Principal Ave`, 44099))
    .build();

console.log(abby);

const panchoBuilder = new UserBuilder(`Pancho`)
const pancho = panchoBuilder.setPhone(12334).build();

console.log(pancho);