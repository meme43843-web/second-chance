const imageUpload = document.getElementById("imageUpload");
const profileImage = document.getElementById("profileImage");

imageUpload.addEventListener("change", function(){

const file = this.files[0];

if(file){

const reader = new FileReader();

reader.onload = function(e){

profileImage.src = e.target.result;

}

reader.readAsDataURL(file);

}

});



const form = document.getElementById("profileForm");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Profile Updated Successfully!");

});





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




