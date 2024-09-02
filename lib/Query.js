const client = require('../db/connection');

class Query {
    static async showAddEmployeePrompt({ first_name, last_name, jobTitle_id, manager_id }) {
        const sql = `INSERT INTO employees (first_name, last_name, jobTitle_id, manager_id) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [first_name, last_name, jobTitle_id, manager_id]);

        console.log('\nNew Employee Added!');
    }

    static async showAddRolePrompt({ jobTitle, salary, department_id }) {
        const sql = `INSERT INTO roles (jobTitle, salary, department_id) VALUES ($1, $2, $3)`;
        await client.query(sql, [jobTitle, salary, department_id]);

        console.log('\nPosition Added Successfully!');
    }

    static async showAddDepartmentPrompt({ department_name }) {
        const sql = `INSERT INTO departments (department_name) VALUES ($1)`;
        await client.query(sql, [department_name]);

        console.log('\nDepartment successfully added!');
    }
}

module.exports = Query;