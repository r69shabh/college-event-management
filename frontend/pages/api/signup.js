// frontend/pages/api/signup.js
import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.post('http://localhost:5000/signup', req.body);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.response?.data?.error || 'Signup failed' });
  }
};