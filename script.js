
/*
document.addEventListener('DOMContentLoaded', function() {
  var contactPanel = document.getElementById('contact-panel');
  var closeBtn = document.querySelector('#contact-panel .close-btn');

  console.log(contactPanel, closeBtn); // Add this line for debugging

  if (contactPanel && closeBtn) {
    contactUsBtn.addEventListener('click', function() {
      contactPanel.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
      contactPanel.style.display = 'none';
    });
  } else {
    console.error('One or more elements not found. Check IDs in HTML and script.');
  }
});
*/ 
document.addEventListener('DOMContentLoaded', function() {
  var contactUsBtn = document.getElementById('contact-us-btn');
  var contactPanel = document.getElementById('contact-panel');
  var closeBtn = document.querySelector('#contact-panel .close-btn');

  // Initially hide the contact panel
  contactPanel.style.display = 'none';

  contactUsBtn.addEventListener('click', function() {
    // Toggle the display of the contact panel
    contactPanel.style.display = (contactPanel.style.display === 'none') ? 'block' : 'none';
  });

  closeBtn.addEventListener('click', function() {
    // Hide the contact panel when close button is clicked
    contactPanel.style.display = 'none';
  });
});

