# Build-Your-Team
 
## Table of Contents
- [User Story](#user-story)
- [General Information](#general-information)
- [Website](#website)
- [Screenshots](#screenshots)
- [Code Used](#technology-used)
- [Api Used](#api-used)
- [Status](#status)
- [Inspired By](#inspired-by)
- [Acceptance Criteria](#acceptance-criteria)
- [Testing](#set-up-to-run-tests)
- [Instructions](#running-this-app)

## User Story 
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## General Information
A simple application designed to make building your team profile a smoother, simpler process.


## Screenshots
![This is how your page could look](./assets/images/team-profile.png)

## Technoloy Used
- HTML
- CSS
- Javascript
- Node.js 
- Inquirer 
- fs


## Status
- This project is complete as of March 20th

## Inspired By 
- GT Coding Bootcamp Team Profile Generator Homework
- Personal Coding Preference

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Set Up to Run Tests:
- open your integrated terminal
- run npm i to initialize dependences (dependencies include inquirer, fs, and jest)
- run npm install --save-dev jest to install our tester
- npm run test to check that it works properly!


![Successful Testing](./assets/images/Testing.png)



## Running This App
- open index.js in your terminal!
- run npm i to initialize dependencies if you haven't already done so 
- run node index to prompt the generator for questions
- fill out information and the app will create your team profile!

[Application running video can be found here!](https://drive.google.com/file/d/1rqkfoXw6VCy9-XqckANZA8yYJdsNreh9/view?usp=sharing)

