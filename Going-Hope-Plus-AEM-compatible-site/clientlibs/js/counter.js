/**
 * AEM-compatible JavaScript for counter animation
 * This would be included in an AEM client library
 */
;(() => {
  // Initialize when DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    initCountAnimation()
  })

  function initCountAnimation() {
    var countElement = document.querySelector(".cmp-going-home-plus__count-number")
    if (!countElement) return

    // Use Intersection Observer to trigger animation when element is in view
    var observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(countElement, 0, 749, 2500)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(countElement)
  }

  function animateCount(element, start, end, duration) {
    var startTimestamp = null
    var step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      var progress = Math.min((timestamp - startTimestamp) / duration, 1)
      var easeProgress = easeOutQuad(progress)
      var currentCount = Math.floor(easeProgress * (end - start) + start)
      element.textContent = currentCount

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }

  function easeOutQuad(t) {
    return t * (2 - t)
  }
})()

