// Main JavaScript functionality

function showPubs(mode) {
  // Mode 0: by date, Mode 1: by topic
  const pubsByDate = document.getElementById('pubs_by_date');
  const pubsByTopic = document.getElementById('pubs_by_topic');
  
  if (mode === 0) {
    if (pubsByDate) pubsByDate.style.display = 'block';
    if (pubsByTopic) pubsByTopic.style.display = 'none';
  } else {
    if (pubsByDate) pubsByDate.style.display = 'none';
    if (pubsByTopic) pubsByTopic.style.display = 'block';
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  showPubs(0);
});

