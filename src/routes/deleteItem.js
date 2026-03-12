const db = require('../persistence');

module.exports = async (req, res) => {
    const { id } = req.params;
    console.log('[DELETE /items/:id] remove item', { id });
    await db.removeItem(id);
    res.sendStatus(200);
};
