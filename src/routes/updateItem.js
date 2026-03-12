const db = require('../persistence');

module.exports = async (req, res) => {
    const { id } = req.params;
    console.log('[PUT /items/:id] update item', { id, body: req.body });
    await db.updateItem(id, {
        name: req.body.name,
        completed: req.body.completed,
    });
    const item = await db.getItem(id);
    res.send(item);
};
