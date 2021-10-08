const inquirer = require('inquirer');
const fs = require('fs');

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
        name: 'office number',
        message: "What is the Manager's office number?",
    }])
    .then(function(answers) {
        console.log(answers);

        mainMenu();
    })
}
function addEngineer() {
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
        name: 'github',
        message: "What is the GitHub username?",
    }])
    .then(function(answers) {
        console.log(answers);

        mainMenu();
    })
}
function addIntern() {
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
        name: 'school',
        message: "What school did the intern go to?",
    }])
    .then(function(answers) {
        console.log(answers);

        mainMenu();
    })
}
mainMenu();