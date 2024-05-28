
export default function scrollTo(y, duration) {
  let distance = Math.abs(y - window.scrollY)
  duration = duration || ((200 + distance / 3) / 1000 * 1.5)

  const start = window.scrollY
  const startTime = performance.now()

  function animate(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / (duration * 1000), 1)
    
    // Easing function (easeInOutQuad)
    const easeProgress = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2
    
    const currentY = start + (y - start) * easeProgress
    
    window.scrollTo(0, currentY)
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}
