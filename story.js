window.onload = function() {
    const status = localStorage.getItem("loggedIn");
    console.log("Current Login Status:", status); 
};


const pet = new URLSearchParams(window.location.search).get("pet");


const data = {
  max: {
    title: "Max’s Rescue Story",
    image: "images/do.jpg",
    rescue: "Max was found injured and alone on the street late at night.",
    medical: "He received surgery, medication, and constant medical supervision.",
    recovery: "Day by day, Max learned how to walk again and trust people.",
    adoption: "Max is now fully healed and ready for a loving home.",
    story:
`Max was found lying on cold pavement after being hit by a car.
He was injured, frightened, and completely alone, unable to move or escape the danger around him.

When rescuers approached, Max didn’t try to run away.
Despite the pain, he stayed still—as if he sensed that help had finally come.

Max required urgent medical care and several surgeries.
Through weeks of treatment, rest, and patient rehabilitation, he slowly regained his strength.
Each day brought small improvements, and with them, his trust in people grew.

Today, Max enjoys gentle walks, calm environments, and affectionate belly rubs.
He is relaxed, friendly, and ready to bond with a family who will offer him the safety he once lacked.

Max’s past no longer defines him.
He is defined by resilience, kindness, and a well-deserved second chance.`
  },

  bella: {
    title: "Bella’s Rescue Story",
    image: "images/be1.jpeg",
    rescue: "Bella was found hiding behind a building during winter.",
    medical: "She was treated for dehydration and fear.",
    recovery: "With warmth and love, Bella learned to trust again.",
    adoption: "Bella is calm, gentle, and ready for adoption.",
    story:
`Bella spent several days alone after suffering neglect and abuse.
She had been exposed to burns that left her weak, frightened, and unsure of the world around her.
Because of what she went through, she feared sudden sounds and avoided human touch.

After being rescued, Bella received the medical care she needed and was placed in a safe, quiet environment.
Her recovery took time, but with patience, gentle handling, and consistency, she slowly began to feel secure again.
As her injuries healed, so did her confidence.

Today, Bella enjoys warmth, comfort, and calm affection.
She is gentle, quiet, and learning to trust once more.
Bella is ready to leave her past behind and begin a new chapter with a loving family.`
  },

  thumper: {
    title: "Thumper’s Rescue Story",
    image: "images/thumper.jpeg",
    rescue: "Thumper was rescued from unsafe living conditions.",
    medical: "He received gentle medical care and proper nutrition.",
    recovery: "Thumper regained his strength and playful energy.",
    adoption: "He is ready for a safe and loving home.",
    story:
`Before his rescue, Thumper lived in constant fear.
He was weak, malnourished, and unfamiliar with kindness.
Every sudden movement startled him, and he kept his distance from people, unsure of their intentions.

When Thumper was finally rescued, he needed time, patience, and gentle care.
Through consistent feeding, medical attention, and a calm environment, he slowly began to recover.
As his strength returned, so did his curiosity and confidence.

Today, Thumper is healthy, active, and alert.
He enjoys hopping around, exploring safely, and interacting with humans he trusts.
He is no longer frightened—he is ready for a loving home.

A small life changed by compassion, now waiting for a second chance.`
  }
};

if (!data[pet]) {
  document.getElementById("title").textContent = "Story Not Found";
} else {
  const p = data[pet];
  document.getElementById("title").textContent = p.title;
  document.getElementById("petImage").src = p.image;
  document.getElementById("rescue").textContent = p.rescue;
  document.getElementById("medical").textContent = p.medical;
  document.getElementById("recovery").textContent = p.recovery;
  document.getElementById("adoption").textContent = p.adoption;
  document.getElementById("story").textContent = p.story;
}





function requireLogin() {
    const loggedIn = localStorage.getItem("loggedIn");
    
    console.log("قيمة تسجيل الدخول الحالية هي: ", loggedIn);

    if (loggedIn === "true") {
        alert("أهلاً بك! تم تنفيذ العملية بنجاح.");
    } else {
        const modal = document.getElementById("loginModal");
        if (modal) {
            modal.style.display = "flex";
        } else {
            alert("خطأ: لم نجد عنصر loginModal في الصفحة!");
        }
    }
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

function loginFromModal() {
    const email = document.getElementById("modalEmail").value;
    const password = document.getElementById("modalPassword").value;
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        alert("No account found. Please register first.");
        window.location.href = "register.html";
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", savedUser.username);
        
        document.getElementById("loginModal").style.display = "none";
        alert("Welcome back, " + savedUser.username + "! You can now save or share.");
    } else {
        alert("Wrong email or password.");
    }
}

function requireLogin() {
    let loggedIn = localStorage.getItem("loggedIn");

    if (String(loggedIn).toLowerCase() === "true") {
        
        const pet = new URLSearchParams(window.location.search).get("pet");

        let savedPets = JSON.parse(localStorage.getItem("savedPets")) || [];

        if (!savedPets.includes(pet)) {
            savedPets.push(pet);
            localStorage.setItem("savedPets", JSON.stringify(savedPets));

            alert("✅ Pet saved successfully!");
        } else {
            alert("⚠️ This pet is already saved!");
        }

    } else {
        const modal = document.getElementById("loginModal");
        modal.style.display = "flex";
    }
}

function handleShare() {
    let loggedIn = localStorage.getItem("loggedIn");

    if (String(loggedIn).toLowerCase() === "true") {
        
        const petKey = new URLSearchParams(window.location.search).get("pet");
        const petData = data[petKey];

        if (!petData) return;

        if (navigator.share) {
            navigator.share({
                title: petData.title,
                text: `Check out this amazing rescue story: ${petData.title}`,
                url: window.location.href
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        } else {
            alert("Copy this link to share: " + window.location.href);
        }

    } else {
        const modal = document.getElementById("loginModal");
        if (modal) {
            modal.style.display = "flex";
        }
    }
}

function handleMessage() {
    let loggedIn = localStorage.getItem("loggedIn");

    if (String(loggedIn).toLowerCase() === "true") {
        
        const petKey = new URLSearchParams(window.location.search).get("pet");
        const petData = data[petKey];

        if (!petData) return;

        const email = "hello@secondchance.com";
        const subject = encodeURIComponent(`Inquiry about ${petData.title}`);
        const body = encodeURIComponent(`Hello Team,\n\nI am interested in learning more about ${petData.title}. Can you please provide more details?\n\nBest regards,`);

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    } else {
        const modal = document.getElementById("loginModal");
        if (modal) {
            modal.style.display = "flex";
        }
    }
}


