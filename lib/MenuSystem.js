const inquirer = require('inquirer');
const client = require('../db/connection');
const Query = require('./Query');

class MenuSystem {
    static async showAllEmployees() {
        const sql = `
            SELECT 
                e.id AS employees_id,
                CONCAT(e.first_name, ' ', e.last_name) AS full_name,
                r.jobTitle AS jobTitle,
                CONCAT(managers.first_name, ' ', managers.last_name) AS managers_name
            FROM employees AS e
            LEFT JOIN employees AS managers ON e.manager_id = managers.id
            LEFT JOIN roles AS r ON e.jobTitle_id = r.id;
        `;

        const data = await client.query(sql);
        console.table(data.rows);
    }

    // Function to prompt user to add a new employee
    static async showAddEmployeePrompt() {
        const { rows: roles } = await client.query('SELECT * FROM roles');

        const answerObj = await inquirer.prompt([
            {
                name: 'first_name',
                message: 'Please enter the employee first name:'
            },
            {
                name: 'last_name',
                message: 'Please enter the employee last name:'
            },
            {
                name: 'jobTitle_id',
                message: 'Please enter the jobTitle ID for the employee:',
                type: 'list',
                choices: roles.map(rolesObj => {
                    return {
                        name: rolesObj.jobTitle,
                        value: rolesObj.id
                    }
                })
            },
            {
                name: 'manager_id',
                message: 'Please enter the Manager ID for the employee:'
            }
        ]);

        await Query.showAddEmployeePrompt(answerObj);
    }

    // Function to display all roles
    static async showAllRoles() {
        const sql = `SELECT * FROM roles;`;
        const data = await client.query(sql);
        console.table(data.rows);
    }

    // Function to prompt user to add a new role
    static async showAddRolePrompt() {
        const { rows: departments } = await client.query(`SELECT id AS department_id, department_name FROM departments`);
        
        const answerObj = await inquirer.prompt([
            {
                name: 'jobTitle',
                message: 'What is the position you would like to add?'
            },
            {
                name: 'salary',
                message: 'How much does the position make a year?'
            },
            {
                name: 'department_id',
                message: 'What department does the position belong to?',
                type: 'list',
                choices: departments.map(departmentsObj => {
                    return {
                        name: departmentsObj.department_name,
                        value: departmentsObj.department_id
                    }
                })
            }
        ]);
        await Query.showAddRolePrompt(answerObj);
    }

    // Function to display all departments
    static async showAllDepartments() {
        const sql = `SELECT * FROM departments;`;
        const data = await client.query(sql);
        console.table(data.rows);
    }

    // Function to prompt user to add a new department
    static async showAddDepartmentPrompt() {
        const answerObj = await inquirer.prompt([
            {
                name: 'department_name',
                message: 'Please enter the department name'
            }
        ]);
        await Query.showAddDepartmentPrompt(answerObj);
    }
}

module.exports = MenuSystem;