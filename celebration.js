(() => {
  const balloon = document.getElementById('scrollBalloon');
  const canvas = document.getElementById('celebrationCanvas');
  const status = document.getElementById('celebrationStatus');
  const celebration = document.getElementById('baby-hand-celebration');
  if (!balloon || !canvas || !status || !celebration) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let popped = false;
  let scrollFrame = 0;

  function burstConfetti(origin) {
    if (reducedMotion.matches) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.hidden = false;
    const colors = ['#ee71a7', '#ffd166', '#a78bfa', '#66c9b1', '#f79077', '#74b9ef'];
    let width, height;
    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Confetti bursts from the balloon over the baby-hand photo.
    const particles = Array.from({ length: 220 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 250 + Math.random() * 550;
      return {
        x: origin.x,
        y: origin.y,
        vx: Math.cos(angle) * speed,
        vy: -Math.sin(angle) * speed,
        size: 5 + Math.random() * 7,
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - .5) * 12,
        color: colors[i % colors.length]
      };
    });
    let start, previous;
    function finish() {
      canvas.hidden = true;
      ctx.clearRect(0, 0, width, height);
      window.removeEventListener('resize', resizeCanvas);
    }
    function animate(time) {
      if (start === undefined) start = previous = time;
      const elapsed = (time - start) / 1000;
      const step = Math.min((time - previous) / 1000, .04);
      previous = time;
      if (elapsed > 5 || reducedMotion.matches) {
        finish();
        return;
      }
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = Math.min(1, (5 - elapsed) / 1.2);
      for (const particle of particles) {
        particle.vy += 440 * step;
        particle.vx *= Math.exp(-.35 * step);
        particle.x += particle.vx * step;
        particle.y += particle.vy * step;
        particle.rotation += particle.spin * step;
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.fillStyle = particle.color;
        ctx.fillRect(-particle.size / 2, -particle.size / 4, particle.size, particle.size / 2);
        ctx.restore();
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  function updateBalloon() {
    scrollFrame = 0;
    if (popped) return;
    const photo = celebration.querySelector('img').getBoundingClientRect();
    const targetY = photo.top + photo.height / 2;
    const targetScroll = Math.max(0, window.scrollY + targetY - window.innerHeight * .55);
    const progress = targetScroll > 0 ? Math.max(0, Math.min(1, window.scrollY / targetScroll)) : 1;
    const top = Math.min(100, window.innerHeight * .2);
    const bottom = Math.max(top, window.innerHeight - balloon.offsetHeight - 16);
    const y = reducedMotion.matches ? top : top + (bottom - top) * progress;
    balloon.style.transform = `translateY(${y}px)`;
    if (targetY <= window.innerHeight * .55 && photo.bottom > 0) {
      popped = true;
      const x = photo.left + photo.width / 2;
      const y = Math.max(0, targetY - balloon.querySelector('.balloon-body').offsetHeight / 2);
      balloon.style.left = `${x - balloon.offsetWidth / 2}px`;
      balloon.style.right = 'auto';
      balloon.style.transform = `translateY(${y}px)`;
      balloon.classList.add('scroll-balloon--popped');
      status.textContent = 'Celebrating our baby girl!';
      burstConfetti({ x, y: targetY });
      window.setTimeout(() => { balloon.hidden = true; }, 300);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    }
  }
  function scheduleUpdate() {
    if (!scrollFrame && !popped) scrollFrame = requestAnimationFrame(updateBalloon);
  }
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate, { once: true });
  updateBalloon();
})();
