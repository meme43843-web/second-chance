const pets = [
{id:"leo", name:"Leo", img:"images/1.jfif", profile:{energy:"medium",space:"small",training:"low",noise:"low",bond:"independent"}},
{id:"odin", name:"Odin", img:"images/2bb.jfif", profile:{energy:"high",space:"large",training:"high",noise:"medium",bond:"attached"}},
{id:"oscar", name:"Oscar", img:"images/3cc.jfif", profile:{energy:"medium",space:"small",training:"low",noise:"low",bond:"independent"}},
{id:"maverick", name:"Maverick", img:"images/4.jpeg", profile:{energy:"high",space:"small",training:"medium",noise:"high",bond:"balanced"}},
{id:"pumpkin", name:"Pumpkin", img:"images/5.jfif", profile:{energy:"medium",space:"medium",training:"medium",noise:"medium",bond:"attached"}},
{id:"piper", name:"Piper", img:"images/6.jfif", profile:{energy:"medium",space:"small",training:"low",noise:"low",bond:"independent"}},
{id:"havenperiwinkle", name:"Havenperiwinkle", img:"images/7.jfif", profile:{energy:"medium",space:"medium",training:"medium",noise:"low",bond:"balanced"}},
{id:"daisy", name:"Daisy", img:"images/8.jpeg", profile:{energy:"high",space:"large",training:"medium",noise:"medium",bond:"attached"}},
{id:"coco", name:"Coco", img:"images/9.jfif", profile:{energy:"medium",space:"medium",training:"medium",noise:"low",bond:"attached"}},
{id:"pickles", name:"Pickles", img:"images/10.jfif", profile:{energy:"high",space:"large",training:"high",noise:"high",bond:"attached"}},
{id:"shine", name:"Shine", img:"images/11-.jfif", profile:{energy:"high",space:"medium",training:"medium",noise:"high",bond:"attached"}},
{id:"phoenix", name:"Phoenix", img:"images/12.jfif", profile:{energy:"high",space:"large",training:"high",noise:"medium",bond:"balanced"}},
{id:"cookie", name:"Cookie", img:"images/13.jfif", profile:{energy:"medium",space:"small",training:"low",noise:"low",bond:"attached"}},
{id:"muffin", name:"Muffin", img:"images/14.jfif", profile:{energy:"low",space:"small",training:"low",noise:"low",bond:"attached"}},
{id:"maple", name:"Maple", img:"images/15.jfif", profile:{energy:"medium",space:"medium",training:"medium",noise:"low",bond:"balanced"}},
{id:"biscuit", name:"Biscuit", img:"images/16.jfif", profile:{energy:"medium",space:"medium",training:"medium",noise:"low",bond:"attached"}},
{id:"peanut", name:"Peanut", img:"images/17.jfif", profile:{energy:"high",space:"medium",training:"medium",noise:"medium",bond:"attached"}},
{id:"oliver", name:"Oliver", img:"images/18.jfif", profile:{energy:"medium",space:"small",training:"low",noise:"low",bond:"independent"}},
{id:"simba", name:"Simba", img:"images/18-.jfif", profile:{energy:"high",space:"medium",training:"low",noise:"low",bond:"balanced"}},
{id:"charlie", name:"Charlie", img:"images/19.jfif", profile:{energy:"medium",space:"small",training:"low",noise:"low",bond:"independent"}},
{id:"cleo", name:"Cleo", img:"images/20.jfif", profile:{energy:"low",space:"small",training:"low",noise:"low",bond:"independent"}},
{id:"willow", name:"Willow", img:"images/22.jfif", profile:{energy:"low",space:"small",training:"low",noise:"low",bond:"balanced"}},
{id:"toby", name:"Toby", img:"images/23.jfif", profile:{energy:"medium",space:"small",training:"low",noise:"low",bond:"independent"}},
{id:"henry", name:"Henry", img:"images/24.jfif", profile:{energy:"medium",space:"small",training:"low",noise:"low",bond:"balanced"}},
{id:"sky", name:"Sky", img:"images/25.jfif", profile:{energy:"high",space:"small",training:"medium",noise:"high",bond:"balanced"}},
{id:"rio", name:"Rio", img:"images/26.jfif", profile:{energy:"high",space:"small",training:"medium",noise:"high",bond:"balanced"}},
{id:"nibbles", name:"Nibbles", img:"images/27.jfif", profile:{energy:"high",space:"large",training:"high",noise:"medium",bond:"balanced"}},
{id:"butterscotch", name:"Butterscotch", img:"images/28.jfif", profile:{energy:"medium",space:"large",training:"high",noise:"medium",bond:"balanced"}},
{id:"snow", name:"Snow", img:"images/29.jfif", profile:{energy:"low",space:"small",training:"low",noise:"low",bond:"balanced"}},
{id:"shell", name:"Shell", img:"images/30.jfif", profile:{energy:"low",space:"small",training:"low",noise:"low",bond:"independent"}},
{id:"milo", name:"Milo", img:"images/31.jfif", profile:{energy:"medium",space:"small",training:"low",noise:"low",bond:"independent"}},
{id:"rocky", name:"Rocky",  img:"images/32.jfif", profile:{energy:"high",space:"large",training:"medium",noise:"medium",bond:"attached"}},
{id:"chaz", name:"Chaz", img:"images/33.jfif", profile:{energy:"medium",space:"small",training:"low",noise:"low",bond:"independent"}},
{id:"tundra", name:"Tundra", img:"34.jfif", profile:{energy:"high",space:"large",training:"high",noise:"medium",bond:"attached"}},
{id:"angel", name:"Angel", img:"images/35.jpeg", profile:{energy:"medium",space:"small",training:"medium",noise:"high",bond:"balanced"}},
{id:"snowball", name:"Snowball", img:"images/36.jfif", profile:{energy:"medium",space:"large",training:"high",noise:"medium",bond:"balanced"}},
{id:"bunny", name:"Bunny", img:"images/37.jfif", profile:{energy:"low",space:"small",training:"low",noise:"low",bond:"balanced"}},
{id:"tiny", name:"Tiny", img:"images/38.jfif", profile:{energy:"low",space:"small",training:"low",noise:"low",bond:"independent"}}
];

document.getElementById("adoptionForm").addEventListener("submit",function(e){
e.preventDefault();

const answers={
energy:document.getElementById("q3").value,
space:document.getElementById("q2").value,
training:document.getElementById("q6").value,
noise:document.getElementById("q8").value,
bond:document.getElementById("q15").value
};

let bestPet=null;
let bestScore=-1;

pets.forEach(pet=>{
let score=0;
Object.keys(pet.profile).forEach(key=>{
if(pet.profile[key]===answers[key]) score++;
});
if(score>bestScore){
bestScore=score;
bestPet=pet;
}
});

const percent=Math.round((bestScore/5)*100);
const result=document.getElementById("result");

result.innerHTML=`
<div class="result-card">
<img src="${bestPet.img}" alt="${bestPet.name}">
<h2>${bestPet.name}</h2>

<div>Compatibility: ${percent}%</div>
<div class="match-bar"><div class="match-fill" id="fillBar"></div></div>

<div class="highlight">
Based on your lifestyle, personality, and emotional expectations — we believe ${bestPet.name} aligns with you on a deep level.
</div>

<div class="highlight">
This recommendation was calculated using 15 lifestyle and personality factors. Adoption is about harmony, not randomness.
</div>

<div class="action-buttons">
<button class="view-btn">View Full Story</button>
<button class="request-btn">Request Adoption</button>
</div>
</div>
`;

const requestBtn = document.querySelector(".request-btn");

requestBtn.addEventListener("click", () => {
const data = {
  name: bestPet.name,
  img: bestPet.img,
  type: "Dog", 
  age: "2 years", 
  match: percent
};

localStorage.setItem("selectedPet", JSON.stringify(data));
  window.location.href = "adoption.html";
});


result.classList.add("show");
const viewBtn = document.querySelector(".view-btn");

viewBtn.addEventListener("click", () => {
  const petKey = bestPet.name.toLowerCase().replace(/\s+/g, "");
  window.location.href = `pet-story.html?pet=${petKey}&from=smart`;
});
result.scrollIntoView({behavior:"smooth"});

setTimeout(()=>{
document.getElementById("fillBar").style.width=percent+"%";
},300);
});

