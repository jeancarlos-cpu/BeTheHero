const db = require('../database');

module.exports = {
  async store(req, res) {
    const { id = '' } = req.body;
    const ong = await db('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong) {
      res.status(404).json();
    }

    res.json(ong);
  },
};
