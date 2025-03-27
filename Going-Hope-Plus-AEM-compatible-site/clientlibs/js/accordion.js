/**
 * AEM-compatible JavaScript for accordion functionality
 * This would be included in an AEM client library
 */
;(() => {
  // Initialize when DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    initAccordion()
  })

  function initAccordion() {
    // Find all section buttons
    var sectionButtons = document.querySelectorAll(".cmp-going-home-plus__section-button")

    // Add click event listeners
    sectionButtons.forEach((button) => {
      button.addEventListener("click", function () {
        var sectionId = this.getAttribute("data-section-id")
        toggleSection(this, sectionId)
      })
    })
  }

  function toggleSection(button, sectionId) {
    // Find the content associated with this button
    var content = button.parentNode.querySelector(".cmp-going-home-plus__section-content")
    var icon = button.querySelector(".cmp-going-home-plus__section-icon")

    // Toggle display
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block"
      icon.classList.add("cmp-going-home-plus__section-icon--open")
    } else {
      content.style.display = "none"
      icon.classList.remove("cmp-going-home-plus__section-icon--open")
    }
  }
})()

