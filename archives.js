(() => {
  const dialog = document.getElementById('archiveLightbox');
  const photo = document.getElementById('lightboxPhoto');
  const caption = document.getElementById('lightboxCaption');
  const close = document.getElementById('closeLightbox');
  const previous = document.getElementById('previousPhoto');
  const next = document.getElementById('nextPhoto');
  let collection = [];
  let index = 0;
  let savedOverflow;
  function renderPhoto() {
    const link = collection[index];
    photo.src = link.href;
    photo.alt = link.querySelector('img').alt;
    caption.textContent = `${link.dataset.title} (${index + 1} / ${collection.length})`;
    previous.disabled = index === 0;
    next.disabled = index === collection.length - 1;
  }
  document.querySelectorAll('[data-lightbox]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
      event.preventDefault();
      collection = [...document.querySelectorAll('[data-lightbox]')].filter(item => item.dataset.lightbox === link.dataset.lightbox);
      index = collection.indexOf(link);
      renderPhoto();
      savedOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
      close.focus();
    });
  });
  previous.addEventListener('click', () => { if (index > 0) { index--; renderPhoto(); } });
  next.addEventListener('click', () => { if (index < collection.length - 1) { index++; renderPhoto(); } });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { document.body.style.overflow = savedOverflow; });
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); previous.click(); }
    if (event.key === 'ArrowRight') { event.preventDefault(); next.click(); }
  });

  const music = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-btn');
  const updateMusic = () => {
    musicBtn.textContent = music.paused ? 'Play Music' : 'Pause Music';
    musicBtn.setAttribute('aria-pressed', String(!music.paused));
  };
  musicBtn.addEventListener('click', async () => {
    if (!music.paused) music.pause();
    else {
      document.querySelector('.video-banner__media').pause();
      try { await music.play(); }
      catch { musicBtn.textContent = 'Unable to play. Try again'; return; }
    }
    updateMusic();
  });
  music.addEventListener('play', updateMusic);
  music.addEventListener('pause', updateMusic);
  document.querySelector('.video-banner__media').addEventListener('play', () => music.pause());
  updateMusic();
})();
