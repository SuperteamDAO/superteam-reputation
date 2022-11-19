export default async function handler(req, res) {
  const { query } = req.query;

  switch (query) {
    case 'stackxp':
      break;
    case 'xp':
      break;
    default:
      res.status(404).json({ message: 'Not found' });
  }
}
