import React, { useState } from 'react';
import './EmailForm.css'; // move the styles there

function EmailForm() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');

  const generateReply = async () => {
    if (!input.trim()) {
      alert("Please enter an email first.");
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/generate-reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setReply(data.reply || 'Error: No reply generated');
    } catch (err) {
      setReply('❌ Failed to get reply from server.');
    }
  };

  return (
    <div className="container">
      <h1>📧 AI Email Reply Generator</h1>
      <label>Paste Customer Email:</label>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter or paste the customer's email here..."
      />
      <button onClick={generateReply}>Generate Reply</button>
      {reply && <div className="output">{reply}</div>}
    </div>
  );
}

export default EmailForm;
