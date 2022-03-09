//Engineer extends Employee
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //The super keyword is used to access and call functions on an object's parent.
        //When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. 
        //The super keyword can also be used to call functions on a parent object.
        //super() is called to avoid duplicating the constructor parts' that are common between Engineer & Employee
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;