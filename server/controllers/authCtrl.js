const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const { first_name, last_name, email, password } = req.body;
        console.log(req.body)
        const db = req.app.get('db');
        const employeeArr = await db.find_emp_email({ email })
        console.log('Email searched')
        if (employeeArr[0]) {
            return res.status(200).send({ error: 'Email is already in use. Please login.' })
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        console.log(hash, "hassssssh")
        let newEmployeeArr = await db.register([ first_name, last_name, email, hash ]);
        req.session.employee = { first_name: newEmployeeArr[0].first_name, last_name: newEmployeeArr[0].last_name, email: newEmployeeArr[0].email, employee_id: newEmployeeArr[0].employee_id };
        console.log('employee created')
        res.status(200).send({
            message: 'Logged in',
            userData: req.session.employee,
            loggedIn: true
        })
    
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        console.log(req.body, 'login checked')
        const db = req.app.get('db');
        const employeeArr = await db.find_emp_email({ email })
        if (employeeArr.length === 0) {
            return res.status(200).send({ error: 'There is no account associated with that email.' })
        }
        // console.log('password', password)
        console.log('hash', employeeArr[0].hash)
        const result = bcrypt.compareSync(password, employeeArr[0].hash);
        if (!result) {
            return res.status(401).send({ error: 'Incorrect password.'})
        }
        req.session.employee = { first_name: employeeArr[0].first_name, last_name: employeeArr[0].last_name, email: employeeArr[0].email, id: employeeArr[0].id };
        res.status(200).send({
            message: 'Log in successful',
            userData: req.session.employee,
            loggedIn: true
        })
    },

    logout(req) {
        req.session.destroy()
    },

    userData(req, res) {
        if (req.session.employee) res.status(200).send(req.session.employee)
        else res.status(401).send('Please log in');
    }

}