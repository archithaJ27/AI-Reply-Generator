document.getElementById('generateBtn').addEventListener('click', async () => {
  const input = document.getElementById('emailInput').value;
  const output = document.getElementById('output');

  if (!input) {
    alert('Please enter email text');
    return;
  }

  try {
    const res = await fetch('http://localhost:5000/api/generate-reply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailContext: input })
    });

    const data = await res.json();
    output.innerText = 'Reply: ' + data.reply;
  } catch (err) {
    output.innerText = 'Error generating reply.';
  }
});
