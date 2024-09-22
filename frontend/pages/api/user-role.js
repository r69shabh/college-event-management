// frontend/pages/api/user-role.js
import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/api/user-role', {
      headers: req.headers,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.response?.data?.error || 'Failed to fetch user role' });
  }
};