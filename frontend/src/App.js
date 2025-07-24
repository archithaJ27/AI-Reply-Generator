import React from 'react';
import EmailForm from './components/EmailForm';
import EmailReplyGenerator from './EmailReplyGenerator';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>AI Email Reply Generator</h1>
      <EmailForm />
    </div>
  );
}

export default App;
