const inquirer = require('inquirer');
const client = require('./db/connection');
const MenuSystem = require('./lib/MenuSystem');

async function showMainMenu() {
    const answerObj = await inquirer.prompt({

        name: 'choice',
        message: 'Please select an option from the menu',
        type: 'list',
        choices: [
            'View All Employess',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department'
        ]
    });

    switch (answerObj.choice) {
        case 'View All Employees':
            await MenuSystem.showAllEmployees();
            showMainMenu();
            break;
        case 'Add Employee':
            await MenuSystem.showAddEmployeePrompt();
            showMainMenu();
            break;
        case 'View All Roles':
            await MenuSystem.showAllRoles();
            showMainMenu();
            break;
        case 'Add Role':
            await MenuSystem.showAddRolePrompt();
            showMainMenu();
            break;
        case 'View All Departments':
            await MenuSystem.showAllDepartments();
            showMainMenu();
            break;
        case 'Add Department':
            await MenuSystem.showAddDepartmentPrompt();
            showMainMenu();
            break;
    }
}

async function init() {
    await client.connect();

    console.log(`
  .---------------------------------------.
  |                                       |
  | Welcome To The Employee Roster Manager|
  |                                       |
  .---------------------------------------.  
  `)

    showMainMenu();
}

init();

