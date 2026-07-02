const petsPerPage = 6;
let currentPage = 1;
let currentType = "all";
let currentSearch = "";

const pets = [
  {id:"leo", name:"Leo", type:"cat", img:"images/li.jfif", age: "1 Year", gender: "Male"},
  {id:"havenperiwinkle", name:"Haven Periwinkle", type:"dog", img:"dog Haven Periwinkle.jpeg", age: "2 Years", gender: "Male"},
  {id:"snowball", name:"Snowball", type:"hamster", img:"images/sno.jpg", age: "6 Months", gender: "Female"},
  {id:"coco", name:"Coco", type:"dog", img:"images/coco.png", age: "3 Years", gender: "Female"},
    {id:"sky", name:"Sky", type:"bird", img:"images/sk.jpg", age: "1 Year", gender: "Female"},
        {id:"shell", name:"Shell", type:"turtle", img:"images/shee.jfif", age: "5 Years", gender: "Female"},
  {id:"angel", name:"Angel", type:"bird", img:"images/an.jpg", age: "2 Years", gender: "Female"},
  {id:"odin", name:"Odin", type:"dog", img:"images/od.jpeg", age: "4 Years", gender: "Male"},
  {id:"oscar", name:"Oscar", type:"cat", img:"images/oc.jfif", age: "2 Years", gender: "Male"},
  {id:"maverick", name:"Maverick", type:"bird", img:"images/mav.jpg", age: "1 Year", gender: "Male"},
  {id:"pumpkin", name:"Pumpkin", type:"dog", img:"images/pu.png", age: "3 Years", gender: "Female"},
  {id:"piper", name:"Piper", type:"cat", img:"images/pi.jpg", age: "2 Years", gender: "Female"},
  {id:"daisy", name:"Daisy", type:"dog", img:"images/da.jpg", age: "4 Years", gender: "Female"},
  {id:"butterscotch", name:"Butterscotch", type:"hamster", img:"images/butt.jpg", age: "8 Months", gender: "Male"},
  {id:"toby", name:"Toby", type:"cat", img:"images/tob.jpg", age: "3 Years", gender: "Male"},
  {id:"tiny", name:"Tiny", type:"turtle", img:"images/ti.jpg", age: "10 Years", gender: "Male"},
  {id:"pickles", name:"Pickles", type:"dog", img:"images/pic.jpg", age: "2 Years", gender: "Male"},
  {id:"shine", name:"Shine", type:"dog", img:"shi.jpeg", age: "3 Years", gender: "Female"},
  {id:"simba", name:"Simba", type:"cat", img:"images/si.jpg", age: "4 Years", gender: "Male"},
  {id:"phoenix", name:"Phoenix", type:"dog", img:"images/ph.jpg", age: "2 Years", gender: "Male"},
  {id:"cookie", name:"Cookie", type:"dog", img:"images/cookie.jpeg", age: "1 Year", gender: "Female"},
  {id:"rio", name:"Rio", type:"bird", img:"images/ri.jpg", age: "2 Years", gender: "Male"},
  {id:"bunny", name:"Bunny", type:"rabbit", img:"images/bu.jpg", age: "1 Year", gender: "Female"},
  {id:"nibbles", name:"Nibbles", type:"hamster", img:"images/ni.jpg", age: "5 Months", gender: "Male"},
  {id:"muffin", name:"Muffin", type:"dog", img:"images/mu.jpg", age: "3 Years", gender: "Female"},
  {id:"maple", name:"Maple", type:"dog", img:"images/ma.jpg", age: "2 Years", gender: "Female"},
  {id:"biscuit", name:"Biscuit", type:"dog", img:"images/bis.jpg", age: "4 Years", gender: "Male"},
  {id:"peanut", name:"Peanut", type:"dog", img:"images/pe.jpg", age: "1 Year", gender: "Male"},
  {id:"oliver", name:"Oliver", type:"cat", img:"images/li.jpg", age: "3 Years", gender: "Male"},
  {id:"charlie", name:"Charlie", type:"cat", img:"images/ch.jpg", age: "2 Years", gender: "Male"},
  {id:"cleo", name:"Cleo", type:"cat", img:"images/cl.jpg", age: "4 Years", gender: "Female"},
  {id:"willow", name:"Willow", type:"cat", img:"images/wil.jpg", age: "2 Years", gender: "Female"},
  {id:"henry", name:"Henry", type:"cat", img:"images/he.jpg", age: "5 Years", gender: "Male"},
  {id:"snow", name:"Snow", type:"rabbit", img:"images/ow.jpg", age: "1 Year", gender: "Female"},
  {id:"milo", name:"Milo", type:"cat", img:"images/mi.jpg", age: "2 Years", gender: "Male"},
  {id:"rocky", name:"Rocky", type:"dog", img:"WhatsApp Image 2026-02-10 at 7.04.04 PM.jpeg", age: "3 Years", gender: "Male"},
  {id:"chaz", name:"Chaz", type:"cat", img:"images/chaz.jpg", age: "4 Years", gender: "Male"},
  {id:"tundra", name:"Tundra", type:"dog", img:"tundra.jpeg", age: "9 Years", gender: "Male"}
];

function getFilteredPets() {
  return pets.filter(pet => {
    const typeMatch = currentType === "all" || pet.type === currentType;
    const searchMatch =
      pet.name.toLowerCase().includes(currentSearch) ||
      pet.type.toLowerCase().includes(currentSearch);
    return typeMatch && searchMatch;
  });
}

function displayPets() {
  const grid = document.getElementById("petsGrid");
  if (!grid) return; 
  grid.innerHTML = "";

  const filtered = getFilteredPets();
  const start = (currentPage - 1) * petsPerPage;
  const pagePets = filtered.slice(start, start + petsPerPage);

  pagePets.forEach(pet => {
    const card = document.createElement("div");
    card.className = "pet-card";

    card.innerHTML = `
      <div class="img-box">
        <img src="${pet.img}" alt="${pet.name}">
      </div>
      <h3>${pet.name}</h3>
      <p style="color:#666; font-size:0.9em; margin-bottom:10px;">${pet.age} • ${pet.gender}</p>
      <button onclick="openPetStory('${pet.id}')">Read Story</button>
    `;

    grid.appendChild(card);
  });

  setupPagination(filtered.length);
}

function setupPagination(total) {
  const pages = Math.ceil(total / petsPerPage);
  const container = document.getElementById("pagination");
  if (!container) return;
  container.innerHTML = "";

  for (let i = 1; i <= pages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => {
      currentPage = i;
      displayPets();
    };
    container.appendChild(btn);
  }
}

function filterPets() {
  currentType = document.getElementById("typeFilter").value;
  currentPage = 1;
  displayPets();
}

function searchPets() {
  currentSearch = document.getElementById("searchInput").value.toLowerCase();
  currentPage = 1;
  displayPets();
}

function openPetStory(id) {
  const selectedPet = pets.find(p => p.id === id);
  if (selectedPet) {
      localStorage.setItem("selectedPet", JSON.stringify(selectedPet));
  }
  window.location.href = "pet-story.html?pet=" + id;
}

document.addEventListener('DOMContentLoaded', displayPets);



