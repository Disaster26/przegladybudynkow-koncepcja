// menu, pasek na telefonie, galeria przesuwana palcem i myszą
(function () {
  var top = document.getElementById('top'), b = top.querySelector('.burger');
  b.addEventListener('click', function () {
    var o = top.classList.toggle('menu-otw');
    b.setAttribute('aria-expanded', o); b.setAttribute('aria-label', o ? 'Zamknij menu' : 'Otwórz menu');
    document.body.style.overflow = o ? 'hidden' : '';
  });
  top.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { top.classList.remove('menu-otw'); b.setAttribute('aria-expanded', false); document.body.style.overflow = ''; });
  });

  var mob = document.getElementById('mob'), cel = document.querySelector('.hero .btn');
  if (mob && cel && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { mob.classList.toggle('widac', !e[0].isIntersecting && e[0].boundingClientRect.top < 0); }).observe(cel);
  }

  document.querySelectorAll('.tasma').forEach(function (t) {
    var x0, s0, ruch = false;
    t.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; x0 = e.clientX; s0 = t.scrollLeft; ruch = true; t.classList.add('ciag'); });
    window.addEventListener('pointermove', function (e) { if (ruch) t.scrollLeft = s0 - (e.clientX - x0); });
    window.addEventListener('pointerup', function () { if (ruch) { ruch = false; t.classList.remove('ciag'); } });
    var sek = t.closest('section');
    sek && sek.querySelectorAll('.strz button').forEach(function (k) {
      k.addEventListener('click', function () {
        var f = t.querySelector('figure');
        t.scrollBy({ left: (+k.dataset.k) * (f.offsetWidth + 20) * 2, behavior: 'smooth' });
      });
    });
  });

  var r = document.getElementById('rok'); if (r) r.textContent = new Date().getFullYear();
})();
