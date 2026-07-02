document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("adoptionForm");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); 

            const selectedPet = JSON.parse(localStorage.getItem("selectedPet")) || { name: "Unknown", type: "Unknown", age: "Unknown" };

            const data = {
                name: document.getElementById("nameInput").value,
                email: document.getElementById("emailInput").value,
                phone: document.getElementById("phoneInput").value,
                reason: document.getElementById("reasonInput").value,
                notes: document.getElementById("notesInput").value,
                petName: selectedPet.name,
                petType: selectedPet.type,
                petAge: selectedPet.age,
                status: "Pending Review",
                date: new Date().toLocaleString() 
            };

            let allRequests = JSON.parse(localStorage.getItem("adoptionRequests")) || [];
            allRequests.push(data);
            localStorage.setItem("adoptionRequests", JSON.stringify(allRequests));

            console.log("تم حفظ الطلب بنجاح وربطه بالحيوان:", selectedPet.name);

            setTimeout(function() {
                window.location.href = "confirmation.html";
            }, 100);
        });
    }
});




