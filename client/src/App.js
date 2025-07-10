import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Optional for custom CSS

function App() {
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(false);

  const getEmoji = (score) => {
    if (score <= 1.5) return '😡';
    if (score <= 2.5) return '😕';
    if (score <= 3.5) return '😐';
    if (score <= 4.5) return '🙂';
    return '😍';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRating(null);
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/feedback', { message });
      setRating(res.data.rating);
    } catch (err) {
      alert('Error: ' + err.response?.data?.error || 'Failed to get rating');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h2>💬 Feedback Form with AI Rating</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your feedback here..."
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Analyzing...' : 'Submit Feedback'}
          </button>
        </form>

        {rating !== null && (
          <div className="rating-result">
            <h3>
              AI Rating: {rating.toFixed(1)} / 5 {getEmoji(rating)}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
