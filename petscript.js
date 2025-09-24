// Load Header
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

// Load Footer
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

function showPopup() {
  alert("Your Appointment has been recorded!!!");
  return false; // prevent actual form submission for now
}

