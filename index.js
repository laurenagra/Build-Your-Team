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
        roleInfo = "school";
      } else if (role === "Manager") {
        roleInfo = "Office Number";
      }
      //new inquirer prompt for further details from specfic roles
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
            choices: ["yes", "no"],
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

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body style= "background-color:#16697A">
    <nav class="navbar mb-5" style="background-color:#FFA62B">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./dist/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

//Actual employee profile card styling and html

function addHtml(employee) {
    return new Promise ((resolve, reject) => {
        const name = employee.getName();
        const id = employee.getId();
        const email = employee.getEmail();
        const role = employee.getRole();

        let data = "";
        if (role === "Engineer"){
            const github = employee.getGithub();
            data = `<div class= "col-6">
            <div class="card mx-auto mb-3" style="width: 16rem">
            <h5 style="background-color: #EDE7E3;" class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush"> 
                <li class="list-group-item"style="background-color:#FFA62B">ID: ${id} </li>
                <li class="list-group-item"style="background-color:#82C0CC"> Email: ${email}</li>
                <li class="list-group-item"style="background-color: #489fB5"><a href="https://github.com/${github}" style="color:black;">GitHub: ${github}</a></li>
            </ul>
            </div>
          </div>`;
        } else if(role=== "Intern" ){
            const school = employee.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 16rem">
            <h5 style="background-color: #EDE7E3;"class="card-header">${name}<br /> <br /> Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"style="background-color:#FFA62B">ID: ${id} </li>
                <li class="list-group-item"style="background-color:#82C0CC">Email: ${email} </li>
                <li class="list-group-item"style="background-color: #489fB5">School: ${school}</li>
            </ul>
            </div>
           </div>`;
        } else if (role === "Manager"){
            const officeNumber = employee.getOfficeNumber();
            data = `<div class= "col-6">
            <div class="card mx-auto mb-3" style="width: 16rem">
            <h5 style="background-color: #EDE7E3;"class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush"> 
                <li class="list-group-item"style="background-color:#FFA62B">ID: ${id} </li>
                <li class="list-group-item"style="background-color:#82C0CC"> Email: ${email}</li>
                <li class="list-group-item"style="background-color: #489fB5">Office Number: ${officeNumber}</li>
            </ul>
            </div>
          </div>`;
        }
          console.log("adding team member");
          fs.appendFile("./dist/team.html", data, function (err) {
              if (err) {
                  return reject(err);
              };
              return resolve();
          });
      });
};

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

// addMember();
// startHtml();
// addHtml("hi")
// .then(function() {
// finishHtml();
// });
initApp();