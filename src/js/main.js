const button = document.getElementById("myButton");

// Add click event to the button
button.addEventListener("click", function (event) {
  // Prevent the event from bubbling up to the document
  event.stopPropagation();
  // Toggle 'active' class to rotate the icon
  button.classList.toggle("active");
});

// Remove the active class when clicking outside the button
document.addEventListener("click", function () {
  button.classList.remove("active");
});
