const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super (name, id, email)
        this.github = github;
    }

    getGithub()
    
    getRole() {
        const newRole = "Engineer"
        return newRole;
    }
}

const engineer = new Engineer (`${answers.name}, ${answers.id}, ${answers.email}, ${answers.github}`)