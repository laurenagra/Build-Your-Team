const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const inquirer = require('inquirer');
const { listenerCount } = require('process');


const employees = [];

function initApp() {
    startHtml();
    addEmployee();
}

function addEmployee() {
    inquirer.prompt([
        { 
            type: "input",
            message: "Enter Employee Name:",
            name: "name"
        },
        {
            type: "list",
            message: "Select New Team Member's Role:",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ],
            name: "role"
        },
        {
            type: "input",
            message: "Please register Employee ID Number:",
            name: "id",
        },
        {
            type: "input",
            message: "Enter Employee Email:",
            name: "email",
        }])
}