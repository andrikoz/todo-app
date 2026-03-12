const db = require('../persistence');

module.exports = async (req, res) => {
    const items = await db.getItems();
    console.log('[GET /items] list items', { count: items.length });
    res.send(items);
};
