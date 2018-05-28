document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      var targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          block: 'start',
          inline: 'nearest',
          behavior: 'smooth'
        });
        window.history.pushState(null, '', href);
      }
    });
  });
});
