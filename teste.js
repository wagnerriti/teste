var modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

if (btn) {
  btn.addEventListener('click', () => {
    modal.style.display = "block";
  });
};

if (btn) {
  span.addEventListener('click', () => {
    modal.style.display = "none";
  });
};

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

