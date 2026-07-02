window.addEventListener("DOMContentLoaded", () => {

const user = JSON.parse(localStorage.getItem("user"));
if(!user) return;


const avatar = document.getElementById("avatar");
const fileInput = document.getElementById("uploadImage");

const removeBtn = document.getElementById("removePhoto");
const popup = document.getElementById("deletePopup");
const confirmDelete = document.getElementById("confirmDelete");
const cancelDelete = document.getElementById("cancelDelete");


document.getElementById("name").textContent = user.username;
document.getElementById("email").textContent = user.email;

avatar.textContent = user.username.charAt(0).toUpperCase();


document.getElementById("savedCount").textContent =
localStorage.getItem("savedPetsCount") || 0;

document.getElementById("requestCount").textContent =
localStorage.getItem("requestCount") || 0;


avatar.addEventListener("click", () => {
fileInput.click();
});

fileInput.addEventListener("change", function(){

const file = this.files[0];
if(!file) return;

const reader = new FileReader();

reader.onload = function(e){

const image = e.target.result;

avatar.innerHTML = `<img src="${image}">`;

localStorage.setItem("profileImage", image);

const navAvatar = document.getElementById("avatarLetter");

if(navAvatar){
navAvatar.innerHTML = `<img src="${image}">`;
}

};

reader.readAsDataURL(file);

});


const savedImage = localStorage.getItem("profileImage");

if(savedImage){
avatar.innerHTML = `<img src="${savedImage}">`;

const navAvatar = document.getElementById("avatarLetter");

if(navAvatar){
navAvatar.innerHTML = `<img src="${savedImage}">`;
}
}


removeBtn.addEventListener("click", () => {
popup.style.display = "flex";
});

cancelDelete.addEventListener("click", () => {
popup.style.display = "none";
});

confirmDelete.addEventListener("click", () => {

localStorage.removeItem("profileImage");

avatar.textContent = user.username.charAt(0).toUpperCase();

const navAvatar = document.getElementById("avatarLetter");

if(navAvatar){
navAvatar.textContent = user.username.charAt(0).toUpperCase();
}

popup.style.display = "none";

});

});




