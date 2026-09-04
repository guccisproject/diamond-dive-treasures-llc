/* ============================================================
   Diamond Dive Treasures LLC — main.js
   Mobile nav, decorative bubbles, active-link highlight,
   product filters, and the contact form submit handler.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  /* ---- Highlight current page in nav ---- */
  var here = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here) a.classList.add('active');
  });

  /* ---- Decorative rising bubbles (hero only) ---- */
  var bubbleField = document.querySelector('.bubbles');
  if (bubbleField) {
    for (var i = 0; i < 14; i++) {
      var b = document.createElement('span');
      b.className = 'bubble';
      var size = 6 + Math.random() * 22;
      b.style.width = size + 'px';
      b.style.height = size + 'px';
      b.style.left = Math.random() * 100 + '%';
      b.style.animationDuration = (7 + Math.random() * 8) + 's';
      b.style.animationDelay = (Math.random() * 8) + 's';
      bubbleField.appendChild(b);
    }
  }

  /* ---- Product category filters (gallery page) ---- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length) {
    var cards = document.querySelectorAll('.product-card');
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.getAttribute('data-filter');
        cards.forEach(function (card) {
          var match = cat === 'all' || card.getAttribute('data-category') === cat;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  /* ---- Contact form (Formspree AJAX submit) ---- */
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var action = form.getAttribute('action');

      if (!action || action.indexOf('YOUR_FORM_ID') !== -1) {
        status.textContent = 'Contact form isn’t connected yet — please email us directly using the address above, or the site owner needs to add a Formspree form ID in contact.html. See README.md.';
        status.className = 'error';
        return;
      }

      status.textContent = 'Sending your message...';
      status.className = '';

      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          status.textContent = 'Thanks for reaching out! We’ll dive back into your inbox soon. 🐚';
          status.className = 'success';
          form.reset();
        } else {
          response.json().then(function (data) {
            var msg = (data && data.errors) ? data.errors.map(function (er) { return er.message; }).join(', ') : 'Something went wrong. Please try again or email us directly.';
            status.textContent = msg;
            status.className = 'error';
          }).catch(function () {
            status.textContent = 'Something went wrong. Please try again or email us directly.';
            status.className = 'error';
          });
        }
      }).catch(function () {
        status.textContent = 'Network hiccup — please try again or email us directly.';
        status.className = 'error';
      });
    });
  }
});
