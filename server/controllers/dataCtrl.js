
module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory({}).then(items => {
            res.status(200).send(items)
        }).catch(err => {
            res.status(505).send(err)
        })
    },

    getTasks: (req, res) => {
        const db = req.app.get('db')

        db.get_tasks({}).then(tasks => {
            res.status(200).send(tasks)
        }).catch(err => {
            res.status(505).send(err)
        })
    }

    // updateTask: (req, res) => {
    //     const db = req.app.get('db')

    //     db.
    // }
}