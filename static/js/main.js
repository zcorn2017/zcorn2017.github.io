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

  // Close the mobile menu after choosing a section so it does not cover it.
  const navigation = document.getElementById('navbarToggle');
  const toggle = document.querySelector('.navbar-toggler');
  if (navigation && toggle) {
    navigation.addEventListener('click', function(event) {
      if (event.target.closest('a') && toggle.getAttribute('aria-expanded') === 'true') {
        toggle.click();
      }
    });
  }
});

