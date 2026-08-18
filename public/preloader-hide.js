export const preloaderScript = `
  // IMMEDIATELY hide preloader - runs before body renders
  if (document.getElementById('preloader')) {
    document.getElementById('preloader').style.display = 'none';
  }
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.style.display = 'none';
  }, 100);
`;