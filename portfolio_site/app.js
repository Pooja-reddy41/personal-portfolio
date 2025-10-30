// Portfolio interactivity: theme toggle + resume download (placeholder)
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const downloadResume = document.getElementById('downloadResume');

// load saved theme
if(localStorage.getItem('theme')==='light') body.classList.add('light');

themeToggle.addEventListener('click', ()=>{
  body.classList.toggle('light');
  const isLight = body.classList.contains('light');
  themeToggle.textContent = isLight ? '🌞' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Resume download placeholder - creates a simple resume on the fly
downloadResume.addEventListener('click', (e)=>{
  e.preventDefault();
  const resume = `Pooja Reddy\nFull Stack Developer\n\nEmail: poojareddy7386@gmail.com\nLinkedIn: https://www.linkedin.com/in/pooja-reddy-4b9b571ab/\n\nSummary:\nPassionate developer with experience in React, Node.js, and full-stack projects.\n\nExperience:\n- Web Development Intern, Unified Mentor\n\nProjects:\n- ShopEase: E-commerce demo (HTML/CSS/JS)\n- Music Player: Browser audio player`;
  const blob = new Blob([resume], {type:'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'Pooja_Reddy_Resume.txt';
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
});
