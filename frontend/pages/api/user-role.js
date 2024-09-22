import authenticate from '../../middleware/auth';

export default async (req, res) => {
  try {
    await authenticate(req, res, () => {});
    res.status(200).json({ role: req.user.role });
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate.' });
  }
};