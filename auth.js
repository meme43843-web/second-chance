function showToast(msg){
const toast=document.getElementById("toast");
toast.textContent=msg;
toast.classList.add("show");

setTimeout(()=>{
toast.classList.remove("show");
},2500);
}

function register(){

const username=document.getElementById("username").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

if(!username||!email||!password){
showToast("Fill all fields");
return;
}

const user={username,email,password};
localStorage.setItem("user",JSON.stringify(user));

showToast("Account created 🎉");

setTimeout(()=>{
window.location.href="login.html";
},1200);
}

function login(){

const email=document.getElementById("loginEmail").value;
const password=document.getElementById("loginPassword").value;
const savedUser=JSON.parse(localStorage.getItem("user"));

if(!savedUser){
showToast("No account found");
return;
}

if(email===savedUser.email && password===savedUser.password){

localStorage.setItem("username", savedUser.username); 

localStorage.setItem("loggedIn","true");

showToast("Welcome "+savedUser.username);

setTimeout(()=>{
window.location.href="index.html";
},1200);

}else{
showToast("Wrong data");
}
}


