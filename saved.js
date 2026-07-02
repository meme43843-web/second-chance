const petsContainer = document.getElementById("petsContainer");
const emptyState = document.getElementById("emptyState");

let savedPets = JSON.parse(localStorage.getItem("savedPets")) || [];

const data = {
  max: { 
    title: "Max’s Rescue Story", 
    image: "images/do.jpg", 
    page: "story.html" 
  },
  bella: { 
    title: "Bella’s Rescue Story", 
    image: "images/bella.jpg", 
    page: "story.html" 
  },
  thumper: { 
    title: "Thumper’s Rescue Story", 
    image: "images/thumper.jpg", 
    page: "story.html" 
  },

  leo: { 
    title: "Leo’s Rescue Story", 
    image: "images/leo.jpg", 
    page: "pet-story.html" 
  },
  
odin:{  
title:"Odin’s Rescue Story",  
image:"images/odin.jpeg",  
    page: "pet-story.html" 

  },

  oscar: { title: "Oscar’s Rescue Story", image: "images/oscar.jpg", page: "pet-story.html" },
  maverick: { title: "Maverick’s Rescue Story", image: "images/maverick.jpg", page: "pet-story.html" },
  pumpkin: { title: "Pumpkin’s Rescue Story", image: "images/pumpkin.jpg", page: "pet-story.html" },
  piper: { title: "Piper’s Rescue Story", image: "images/piper.jpg", page: "pet-story.html" },
  havenperiwinkle: { title: "Havenperiwinkle’s Rescue Story", image: "images/dog Haven Periwinkle.jpeg", page: "pet-story.html" },
  daisy: { title: "Daisy’s Rescue Story", image: "images/daisy.jpg", page: "pet-story.html" },
  coco: { title: "Coco’s Rescue Story", image: "images/coco.jpg", page: "pet-story.html" },
  pickles: { title: "Pickles’s Rescue Story", image: "images/pickles.jpg", page: "pet-story.html" },
  shine: { title: "Shine’s Rescue Story", image: "images/shi.jpeg", page: "pet-story.html" },
  phoenix: { title: "Phoenix’s Rescue Story", image: "images/phoenix.jpg", page: "pet-story.html" },
  cookie: { title: "Cookie’s Rescue Story", image: "images/cookie.jpg", page: "pet-story.html" },
  muffin: { title: "Muffin’s Rescue Story", image: "images/muffin.jpg", page: "pet-story.html" },
  maple: { title: "Maple’s Rescue Story", image: "images/maple.jpg", page: "pet-story.html" },
  biscuit: { title: "Biscuit’s Rescue Story", image: "images/biscuit.jpg", page: "pet-story.html" },
  peanut: { title: "Peanut’s Rescue Story", image: "images/peanut.jpg", page: "pet-story.html" },
  oliver: { title: "Oliver’s Rescue Story", image: "images/oliver.jpg", page: "pet-story.html" },
  simba: { title: "Simba’s Rescue Story", image: "images/simba.jpg", page: "pet-story.html" },
  charlie: { title: "Charlie’s Rescue Story", image: "images/charlie.jpg", page: "pet-story.html" },
  cleo: { title: "Cleo’s Rescue Story", image: "images/cleo.jpg", page: "pet-story.html" },
  willow: { title: "Willow’s Rescue Story", image: "images/willow.jpg", page: "pet-story.html" },
  toby: { title: "Toby’s Rescue Story", image: "images/toby.jpg", page: "pet-story.html" },
  henry: { title: "Henry’s Rescue Story", image: "images/henry.jpg", page: "pet-story.html" },
  sky: { title: "Sky’s Rescue Story", image: "images/sky.jpg", page: "pet-story.html" },
  rio: { title: "Rio’s Rescue Story", image: "images/rio.jpg", page: "pet-story.html" },
  snowball: { title: "Snowball’s Rescue Story", image: "images/snowball.jpg", page: "pet-story.html" },
  nibbles: { title: "Nibbles’ Rescue Story", image: "images/nibbles.jpg", page: "pet-story.html" },
  snow: { title: "Snow’s Rescue Story", image: "images/snow.jpg", page: "pet-story.html" },
  shell: { title: "Shell’s Rescue Story", image: "images/shell.jpg", page: "pet-story.html" },
  milo: { title: "Milo’s Rescue Story", image: "images/milo.jpg", page: "pet-story.html" },
  rocky: { title: "Rocky’s Rescue Story", image: "images/rocky.jpg", page: "pet-story.html" },
  chaz: { title: "Chaz’s Rescue Story", image: "images/chaz.jpg", page: "pet-story.html" },
  tundra: { title: "Tundra’s Rescue Story", image: "images/tundra.jpg", page: "pet-story.html" },
  angel: { title: "Angel’s Rescue Story", image: "images/angel.jpg", page: "pet-story.html" },
  butterscotch: { title: "Butterscotch’s Rescue Story", image: "images/butterscotch.jpg", page: "pet-story.html" },
  bunny: { title: "Bunny’s Rescue Story", image: "images/bunny.jpg", page: "pet-story.html" },
  tiny: { title: "Tiny’s Rescue Story", image: "images/tiny.jpg", page: "pet-story.html" }
};


function displayPets() {
  petsContainer.innerHTML = "";

if (savedPets.length === 0) {
    petsContainer.style.display = "none";
    emptyState.style.display = "flex";
    return;
}

  emptyState.style.display = "none";
  petsContainer.style.display = "grid";

  savedPets.forEach(petKey => {
    const key = petKey.toLowerCase();
    const pet = data[key];

    if (!pet) {
      console.log("❌ Pet data not found for:", key);
      return;
    }

    const card = document.createElement("div");
    card.classList.add("pet-card");

    card.innerHTML = `
      <div class="card-image">
        <img src="${pet.image}">
        <div class="heart">❤️</div>
      </div>

      <div class="card-content">
        <h3>${pet.title}</h3>
        <p>Saved pet 💚</p>

        <div class="card-actions">
          <button onclick="viewPet('${key}', '${pet.page}')">View</button>
          <button class="remove" onclick="removePet('${key}')">Remove</button>
        </div>
      </div>
    `;

    petsContainer.appendChild(card);
  });
}

function viewPet(petKey, pageName) {
  window.location.href = `${pageName}?pet=${petKey}`;
}

function removePet(petKey) {
  savedPets = savedPets.filter(p => p !== petKey);
  localStorage.setItem("savedPets", JSON.stringify(savedPets));
  displayPets();
}

displayPets();



