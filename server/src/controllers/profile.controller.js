const db = require('../database');

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    if (!ong_id) {
      return res.status(401).send();
    }

    const incidents = await db('incidents')
      .where('ong_id', ong_id)
      .select('*');
    return res.json(incidents);
  },
};
