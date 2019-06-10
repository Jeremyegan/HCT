
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
    }

    // updateTask: (req, res) => {
    //     const db = req.app.get('db')

    //     db.
    // }

    // getInventory: (req, res) => {
    //     const db = req.app.get('db')

    //     db.get_inventory({}).then(inventory => {
    //         res.status(200).send(inventory)
    //     }).catch(err => {
    //         res.status(505).send(err)
    //     })
    // }
}