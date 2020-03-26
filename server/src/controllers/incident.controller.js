const db = require('../database');

module.exports = {
  async index(req, res) {
    const { page = 1, perPage = 20 } = req.query;
    const incidents = await db('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(perPage)
      .offset(perPage * (page - 1))
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    const [count] = await db('incidents').count();

    res.header('X-Total-Count', count['count(*)']);

    return res.json(incidents);
  },
  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await db('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  },
  async destroy(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await db('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (!incident || incident.ong_id !== ong_id) {
      return res.status(401).json();
    }

    await db('incidents')
      .where('id', id)
      .delete();

    return res.status(204).json();
  },
};
