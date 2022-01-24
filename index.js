const inquirer = require('inquirer');
const Manager =  require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const createTeam = require('./src/team.js');

const employees = [];

const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "managername"
    },
    {
        type: "input",
        message: "What is their employee ID?",
        name: "managerid"
    },
    {
        type: "input",
        message: "What is their email address?",
        name: "manageremail"
    },
    {
        type: "number",
        message: "What is their office number?",
        name: "officenum"
    },
]

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineername"
    },
    {
        type: "input",
        message: "What is their employee ID?",
        name: "engineerid"
    },
    {
        type: "input",
        message: "What is their email address?",
        name: "engineeremail"
    },
    {
        type: "input",
        message: "What is their github username?",
        name: "github"
    },
]

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internname"
    },
    {
        type: "input",
        message: "What is their employee ID?",
        name: "internid"
    },
    {
        type: "input",
        message: "What is their email address?",
        name: "internemail"
    },
    {
        type: "input",
        message: "What school do they attend?",
        name: "school"
    },
]

const menuQuestion = [
    
    {
        type: "list",
        message: "Would you like to add an employee",
        choices: ["Add Engineer", "Add Intern", "Finish List"],
        name: "menu"
    }
]

    function askManager(){
       inquirer.prompt(managerQuestions).then((res)=>{
        const manager = new Manager(res.managername, res.managerid, res.manageremail, res.officenum);
        employees.push(manager)
        buildTeam()
       })
    }

    function buildTeam(){
        inquirer.prompt(menuQuestion).then(res => {
            switch(res.menu){
                case "Add Engineer":
                askEngineer()
                break;

                case "Add Intern":
                askIntern()
                break;

                default:
                createHTML()

            }
        })
    }

    function askEngineer(){
        inquirer.prompt(engineerQuestions).then(res => {
            const engineer = new Engineer(res.engineername, res.engineerid, res.engineeremail, res.github);
            employees.push(engineer)
            buildTeam()
        })
    }

    function askIntern(){
        inquirer.prompt(internQuestions).then(res => {
            const intern = new Intern(res.internname, res.internid, res.internemail, res.school);
            employees.push(intern)
            buildTeam()
        })
    }

    function createHTML(){
        fs.writeFileSync("index.html", createTeam(employees), 'utf-8')

    }


askManager()