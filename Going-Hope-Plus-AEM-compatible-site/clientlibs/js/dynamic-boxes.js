/**
 * AEM-compatible JavaScript for dynamic boxes hover effects
 * This would be included in an AEM client library
 */
;(() => {
  // Initialize when DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    initDynamicBoxes()
  })

  function initDynamicBoxes() {
    // Find all dynamic boxes
    var boxes = document.querySelectorAll(".cmp-going-home-plus__box")

    // Add hover effect with mouse position tracking
    boxes.forEach((box) => {
      box.addEventListener("mousemove", function (e) {
        handleMouseMove(e, this)
      })

      box.addEventListener("mouseleave", function () {
        resetBoxEffects(this)
      })

      // Add click event for mobile devices
      box.addEventListener("click", (e) => {
        // If it's a link, let the browser handle it
        // Otherwise, we could add additional functionality here
      })
    })
  }

  function handleMouseMove(e, box) {
    // Calculate mouse position relative to the box
    var rect = box.getBoundingClientRect()
    var x = e.clientX - rect.left // x position within the box
    var y = e.clientY - rect.top // y position within the box

    // Calculate percentage for the gradient effect
    var percentX = Math.floor((x / rect.width) * 100)
    var percentY = Math.floor((y / rect.height) * 100)

    // Apply subtle gradient effect based on mouse position
    box.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(254, 153, 32, 0.1), rgba(255, 248, 230, 0.9) 50%)`

    // Add subtle shadow direction based on mouse position
    var shadowX = (percentX - 50) / 10
    var shadowY = (percentY - 50) / 10
    box.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.1)`
  }

  function resetBoxEffects(box) {
    // Reset the background and shadow when mouse leaves
    box.style.background = ""
    box.style.boxShadow = ""
  }
})()

