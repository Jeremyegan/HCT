
module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory({}).then(items => {
            res.status(200).send(items)
        }).catch(err => {
            res.status(505).send(err)
        })
    },

    createInventory: (req, res) => {
        const db = req.app.get('db');
        const { gender, color, size, style } = req.body;
        console.log(req.body)

        db.create_inventory([ gender, color, size, style ]).then(item => {
            res.status(200).send(item)
        }).catch(err => {
            // res.status(505).send(err)
            if(err) throw err
        })
    },

    updateInventory: (req, res) => {
        const db = req.app.get('db')

        db.update_inventory({}).then(item => {
            res.status(200).send(item)
        }).catch(err => {
            res.status(505).send(err)
        })
    },

    getTasks: (req, res) => {
        const db = req.app.get('db')

        db.get_tasks({}).then(tasks => {
            res.status(200).send(tasks)
        }).catch(err => {
            // res.status(505).send(err)
            if(err) throw err
        })
    },

    updateTask: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params;
        const { task, completed, notes } = req.body;

        db.update_task({ id, task, completed, notes }).then(task => {
            res.status(200).send(task)
        }).catch(err => {
            if(err) throw err
            // res.status(505).send(err)
        })
    },

    updateItem: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params;
        const { item, color } = req.body;
        console.log(req.body)

        db.update_item({ id, item, color }).then(item => {
            res.status(200).send(item)
        }).catch(err => {
            if(err) throw err
        })
    },

    updateShow: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params;
        const { show } = req.body;

        db.update_show({ id, show }).then(item => {
            res.status(200).send(item)
        }).catch(err => {
            if(err) throw err
        })

    },

    updateEmployee: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params;
        const { first_name, last_name } = req.body;

        db.update_employee({ id, first_name, last_name }).then(item => {
            res.status(200).send(item)
        }).catch(err => {
            if(err) throw err
        })
    },

    deleteTask: (req, res ) => {
        const db = req.app.get('db')
        const { id } = req.params;
        
        db.delete_task({ id }).then(item => {
            res.status(200).send(item)
        }).catch(err => {
            if(err) throw err
        })
    }
}