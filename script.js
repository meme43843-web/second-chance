

function openStory(petName) {
  window.location.href = "story.html?pet=" + petName;
}

function goHome() {
  const hero = document.getElementById("hero");
  hero.scrollIntoView({ behavior: "smooth" });
}
function goToAdoptPage() {
  window.location.href = "stories.html";
}






document.addEventListener("DOMContentLoaded", function () {

  const loginBtn = document.getElementById("loginBtn");
  const profileBox = document.getElementById("profileBox");
  const avatar = document.getElementById("avatarLetter");
  const dropdown = document.getElementById("dropdownMenu");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!loginBtn) return; 

  let username = localStorage.getItem("username");

  if (username) {
    loginBtn.style.display = "none";
    profileBox.style.display = "block";
    avatar.textContent = username.charAt(0).toUpperCase();
  } else {
    loginBtn.style.display = "block";
    profileBox.style.display = "none";
  }

  avatar.addEventListener("click", () => {
    dropdown.style.display =
      dropdown.style.display === "flex" ? "none" : "flex";
  });

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("username");
    window.location.href = "Index.html";
  });

  window.addEventListener("click", function (e) {
    if (!profileBox.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });

});
window.addEventListener("DOMContentLoaded", () => {

const savedImage = localStorage.getItem("profileImage");
const navAvatar = document.getElementById("avatarLetter");

if(savedImage && navAvatar){
navAvatar.innerHTML = `<img src="${savedImage}">`;
}

});
function requireLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}
  
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});



