document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("organForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const dob = document.getElementById("dob").value;
        const bloodGroup = document.getElementById("bloodGroup").value;
        const medicalInfo = document.getElementById("medicalInfo").value.trim();

        // Get selected organs
        const organCheckboxes = document.querySelectorAll(".organs input[type='checkbox']");
        let selectedOrgans = [];

        organCheckboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                selectedOrgans.push(checkbox.value);
            }
        });

        // Validation: At least one organ selected
        if (selectedOrgans.length === 0) {
            alert("Please select at least one organ to donate.");
            return;
        }

        // Create object
        const donorData = {
            name: name,
            email: email,
            phone: phone,
            dob: dob,
            bloodGroup: bloodGroup,
            organs: selectedOrgans,
            medicalInfo: medicalInfo,
            dateSubmitted: new Date().toLocaleString()
        };

        // Get existing data
        let donors = JSON.parse(localStorage.getItem("organDonations")) || [];

        // Add new donor
        donors.push(donorData);

        // Save back to localStorage
        localStorage.setItem("organDonations", JSON.stringify(donors));

        // Success message
        alert("Thank you for registering as an organ donor! ❤️");

        // Reset form
        form.reset();
    });

});