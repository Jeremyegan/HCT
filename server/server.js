require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massvie = require('massive');
const app = express();
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env
const dc = require('./controllers/dataCtrl');
const ac = require('./controllers/authCtrl');

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

massvie( CONNECTION_STRING ).then(db => {
    app.set('db', db)
    console.log('DB Set!', db.listTables())
    app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))
})


app.get('/auth/inventory', dc.getInventory)
app.post('/auth/inventory', dc.createInventory)

app.get('/auth/tasks', dc.getTasks)
// app.put('/auth/tasks/:id', dc.updateTask)
// app.post('/auth/task', dc.createTask)
// app.delete('/auth/tasks/:id', dc.deleteTask)


app.post('/auth/login', ac.login)
app.post('/auth/register', ac.register)
app.delete('/auth/logout', ac.logout)
app.get('/user/user-data', ac.userData)