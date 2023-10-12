// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika album di klik
document.querySelector("#album").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const album = document.querySelector("#album");

document.addEventListener("click", function (e) {
  if (!album.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
