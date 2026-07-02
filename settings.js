document.addEventListener("DOMContentLoaded", () => {
    const userNameInput = document.getElementById("userName");
    const userEmailInput = document.getElementById("userEmail");
    const fontSizeSelect = document.getElementById("fontSizeSelect");
    const animToggle = document.getElementById("animToggle");
    const soundToggle = document.getElementById("soundToggle");
    const mainAvatar = document.getElementById("mainAvatar");
    const navAvatar = document.getElementById("navAvatar");

    const savedName = localStorage.getItem("userName") || "";
    const savedEmail = localStorage.getItem("userEmail") || "";
    const savedFontSize = localStorage.getItem("fontSize") || "16px";
    const savedAnim = localStorage.getItem("animations") !== "false"; // default true
    const savedSound = localStorage.getItem("sound") === "true";
    const savedImg = localStorage.getItem("userAvatar");

    userNameInput.value = savedName;
    userEmailInput.value = savedEmail;
    fontSizeSelect.value = savedFontSize;
    document.body.style.fontSize = savedFontSize;
    animToggle.checked = savedAnim;
    soundToggle.checked = savedSound;

    if (savedImg) {
        mainAvatar.style.backgroundImage = `url(${savedImg})`;
        mainAvatar.style.backgroundSize = "cover";
        mainAvatar.textContent = "";
        navAvatar.style.backgroundImage = `url(${savedImg})`;
        navAvatar.style.backgroundSize = "cover";
        navAvatar.textContent = "";
    }

    fontSizeSelect.addEventListener("change", (e) => {
        const size = e.target.value;
        document.body.style.fontSize = size;
        localStorage.setItem("fontSize", size);
    });

    document.getElementById("uploadInput").addEventListener("change", function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgUrl = e.target.result;
                mainAvatar.style.backgroundImage = `url(${imgUrl})`;
                mainAvatar.textContent = "";
                navAvatar.style.backgroundImage = `url(${imgUrl})`;
                navAvatar.textContent = "";
                localStorage.setItem("userAvatar", imgUrl);
            }
            reader.readAsDataURL(file);
        }
    });

    document.querySelector(".save-btn").addEventListener("click", () => {
        localStorage.setItem("userName", userNameInput.value);
        localStorage.setItem("userEmail", userEmailInput.value);
        localStorage.setItem("animations", animToggle.checked);
        localStorage.setItem("sound", soundToggle.checked);

        if (soundToggle.checked) {
            new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3").play();
        }

        alert("Settings Saved Successfully! ✨");
    });
});