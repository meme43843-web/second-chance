window.onload = function() {
    const dataString = localStorage.getItem("adoptionData");
    
    if (dataString) {
        const data = JSON.parse(dataString);
        
        document.getElementById("name").innerText = data.name || "N/A";
        document.getElementById("age").innerText = data.age || "N/A";
        document.getElementById("email").innerText = data.email || "N/A";
        document.getElementById("phone").innerText = data.phone || "N/A";
        document.getElementById("reason").innerText = data.reason || "N/A";
        document.getElementById("notes").innerText = data.notes || "N/A";
    } else {
        console.error("لم يتم العثور على بيانات في localStorage");
    }
};

document.querySelector(".edit").onclick = function() {
    window.location.href = "adoption.html";
};

document.querySelector(".confirm").onclick = () => {
  window.location.href = "thankyou.html";
};




