setTimeout(() => {
  const toolbar = document.querySelector('div[aria-label="More"]');
  if (toolbar) {
    const btn = document.createElement('button');
    btn.innerText = 'AI Reply';
    btn.style.marginLeft = '10px';
    btn.onclick = () => alert('Coming soon: AI reply integration!');
    toolbar.parentElement.appendChild(btn);
  }
}, 3000);

