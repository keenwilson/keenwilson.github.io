$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  //=======================================================================
  // Toggle About Me (Modal)
  $(document).on("click", ".launch-about-me-modal", function(e) {
    e.preventDefault();
    $("#about-me-modal").addClass("is-active");
  });
  $(".about-me-delete").click(function(e) {
    e.preventDefault();
    $("#about-me-modal").removeClass("is-active");
  });

  // Click handle for 'my-recent-work' button
  $(document).on("click", "#my-recent-work", function(e) {
    e.preventDefault();
    $("#about-me-modal").removeClass("is-active");
    window.location = "#portfolio";
  });

  // Click handle for 'say-hello' button
  // Toggle Contact (Modal)
  $(document).on("click", "#say-hello", function(e) {
    e.preventDefault();
    $("#about-me-modal").removeClass("is-active");
    $("#contact-modal").addClass("is-active");
  });
  $(".contact-modal-close").click(function(e) {
    e.preventDefault();
    $("#contact-modal").removeClass("is-active");
  });

  //=======================================================================
  // Toggle Portfolio Image (Modal)
  $(document).on("click", ".launch-image-modal", function(e) {
    e.preventDefault();
    var imageSrc = $(this).attr("src");
    var imageAlt = $(this).attr("alt");
    console.log(imageSrc);
    $("#portfolio-image-display").attr({
      src: imageSrc,
      alt: imageAlt
    });
    $("#image-modal").addClass("is-active");
  });
  $(".image-modal-close").click(function(e) {
    e.preventDefault();
    $("#image-modal").removeClass("is-active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
