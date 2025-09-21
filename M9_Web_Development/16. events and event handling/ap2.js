// script.js

document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key === '1' || key === '2' || key === '3') {
    const section = document.getElementById(`s${key}`);
    if (section) {
      // Synchronous scroll to the top of the section
      section.scrollIntoView({ block: 'start', inline: 'nearest' });
    }
  } else if (key === 't') {
    // Instant scroll to top
    window.scrollTo(0, 0);
  } else if (key === 'b') {
    // Instant scroll to bottom
    window.scrollTo(0, document.body.scrollHeight);
  }
});

