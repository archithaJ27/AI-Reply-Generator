import React, { useState } from 'react';

export default function EmailReplyGenerator() {
  const [emailInput, setEmailInput] = useState('');
  const [reply, setReply] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/generate-reply', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: emailInput }),
});


      const data = await response.json();

      if (data.reply) {
        setReply(data.reply);
      } else {
        console.error('No reply generated', data);
        setReply('⚠️ Error: No reply generated');
      }
    } catch (err) {
      console.error('Failed to fetch reply:', err);
      setReply('⚠️ Server error');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>AI Email Reply Generator</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows={10}
          style={{ width: '100%', padding: '1rem', marginBottom: '1rem' }}
          placeholder="Paste your email here..."
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Generate Reply
        </button>
      </form>

      {reply && (
        <div style={{ marginTop: '2rem' }}>
          <h3>AI Reply:</h3>
          <div style={{ whiteSpace: 'pre-wrap', background: '#f4f4f4', padding: '1rem' }}>
            {reply}
          </div>
        </div>
      )}
    </div>
  );
}
