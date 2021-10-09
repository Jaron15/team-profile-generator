const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const htmlGenerator = require('./dist/htmlGenerator');

const teamArray = [];

function mainMenu() {
    inquirer
    .prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['Add a manager', 'Add an intern', 'Add an engineer', 'Build a team']
    })
    .then(function(answers) {
        const choice = answers.action;

        if (choice === "Add a manager") {
            addManager();
        } else if (choice === "Add an engineer") {
            addEngineer();
        } else if (choice === "Add an intern") {
            addIntern();
        } else {
            buildTeam();
        }
    })
}
function addManager() {
    inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: "What is the Manager's name?",
    },
    {
        type: 'input',
        name: 'ID',
        message: "What is the Manager's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Manager's email?",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Manager's office number?",
    }])
    .then(function(answers) {
        const manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber);

        teamArray.push(manager);

        mainMenu();
    })
}
function addEngineer() {
    inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name?",
    },
    {
        type: 'input',
        name: 'ID',
        message: "What is the Engineer's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is their GitHub username?",
    }])
    .then(function(answers) {
        const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.github);

        teamArray.push(engineer);

        mainMenu();
    })
}
function addIntern() {
    inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: "What is the Intern's name?",
    },
    {
        type: 'input',
        name: 'ID',
        message: "What is the Intern's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Intern's email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What school did the Intern go to?",
    }])
    .then(function(answers) {
        const intern = new Intern(answers.name, answers.ID, answers.email, answers.school);

        teamArray.push(intern);
        console.log(teamArray);
        mainMenu();
    })
};

function buildTeam() {
    fs.writeFileSync('./dist/team.html', htmlGenerator(teamArray))
} 
mainMenu();