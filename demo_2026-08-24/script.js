window.addEventListener('DOMContentLoaded', () => {
  if (!window.gsap || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.call-button').forEach((button) => {
    const settle = () => gsap.to(button, { scale: 1, duration: 0.18, ease: 'power2.out', overwrite: 'auto' });
    button.addEventListener('pointerdown', () => {
      gsap.to(button, { scale: 0.985, duration: 0.12, ease: 'power2.out', overwrite: 'auto' });
    });
    button.addEventListener('pointerup', settle);
    button.addEventListener('pointercancel', settle);
    button.addEventListener('pointerleave', settle);
  });
});
