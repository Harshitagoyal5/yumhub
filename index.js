
// JavaScript function to redirect to a new webpage
function redirectToOrderPage() {
    // Change the URL to the desired destination
    window.location.href = "Login-Register-Template/register.html";
  }


  function moveToFood(){
    window.location.href="order food/order.html";
  }

  // Get the button element by its ID
  var button = document.getElementById("update");

  // Add a click event listener to the button
  button.addEventListener("click", function() {
    // Display an alert when the button is clicked
    alert("Button pressed!");
  });