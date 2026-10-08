(() => {
  const launcher = document.getElementById('nameRevealLauncher');
  const dialog = document.getElementById('nameRevealDialog');
  const days = document.getElementById('nameRevealDays');
  const label = document.getElementById('nameRevealCountdownLabel');
  const revealDate = Date.UTC(2026, 10, 1);

  function updateCountdown() {
    const today = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(new Date());
    const part = type => Number(today.find(value => value.type === type).value);
    const remaining = Math.max(0, Math.ceil((revealDate - Date.UTC(part('year'), part('month') - 1, part('day'))) / 86400000));
    days.textContent = remaining > 0 ? String(remaining) : '💕';
    label.textContent = remaining > 0
      ? `${remaining === 1 ? 'day' : 'days'} until her name reveal`
      : 'Our name reveal date has arrived!';
  }

  launcher.addEventListener('click', () => {
    updateCountdown();
    dialog.showModal();
    document.body.classList.add('name-reveal-open');
  });
  dialog.querySelector('.name-reveal-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('name-reveal-open');
    launcher.focus();
  });
  updateCountdown();
  window.setInterval(updateCountdown, 60000);
})();
