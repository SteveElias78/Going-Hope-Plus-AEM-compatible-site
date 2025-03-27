/**
 * AEM-compatible JavaScript for Going Home Plus menu functionality
 * This would be included in an AEM client library
 */
;(() => {
  // Initialize when DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    initMenuButtons()
  })

  function initMenuButtons() {
    // Find all menu buttons
    var menuButtons = document.querySelectorAll(".cmp-going-home-plus__menu-button")

    // Add click event listeners
    menuButtons.forEach((button) => {
      button.addEventListener("click", function () {
        var isExpanded = this.getAttribute("aria-expanded") === "true"

        // Toggle expanded state
        this.setAttribute("aria-expanded", !isExpanded)

        // You would typically toggle a dropdown menu here
        // For the screenshot match, we're just toggling the button state
      })
    })
  }
})()

