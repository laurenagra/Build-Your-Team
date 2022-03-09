const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const inquirer = require("inquirer");

const employees = [];

function initApp() {
  startHtml();
  addEmployee();
}

function addEmployee() {
  //initialize employee prompt
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Employee Name:",
        name: "name",
      },
      {
        type: "list",
        message: "Select New Team Member's Role:",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role",
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
      },
    ])
    //then response
    .then(function ({ name, role, id, email }) {
      let roleInfo = "";
      if (role === "Engineer") {
        roleInfo = "Github Username";
      } else if (role === "Intern") {
        let roleInfo = "school";
      } else {
        roleInfo = "Office Number";
      }
      //new inquirer prompt for further details from specfici roles
      inquirer
        .prompt([
          {
            type: "input",
            message: `Enter Employee ${roleInfo}`,
            name: "roleInfo",
          },
          {
            type: "list",
            message: "Would you like to add more team members?",
            choice: ["yes", "no"],
            name: "moreEmployees",
          },
        ])
        .then(function ({ roleInfo, moreEmployees }) {
          let newEmployee;
          if (role === "Engineer") {
            newEmployee = new Engineer(name, id, email, roleInfo);
          } else if (role === "Intern") {
            newEmployee = new Intern(name, id, email, roleInfo);
          } else {
            newEmployee = new Manager(name, id, email, roleInfo);
          }
          employees.push(newEmployee);
          addHtml(newEmployee).then(function () {
            if (moreEmployees === "yes") {
              addEmployee();
            } else {
              finishHtml();
            }
          });
        });
    });
}
