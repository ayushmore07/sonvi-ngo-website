const form = document.getElementById("supportForm");
const careOption = document.getElementById("careOption");
const dynamicFields = document.getElementById("dynamicFields");

// Show Dynamic Fields Based on Selection
careOption.addEventListener("change", function () {

    dynamicFields.innerHTML = "";

    if (this.value === "food") {
        dynamicFields.innerHTML = `
            <div class="form-group">
                <label>Food Quantity (in kg)</label>
                <input type="number" id="foodQty" required>
            </div>
        `;
    }

    else if (this.value === "clothes") {
        dynamicFields.innerHTML = `
            <div class="form-group">
                <label>Number of Clothes</label>
                <input type="number" id="clothQty" required>
            </div>
        `;
    }

    else if (this.value === "medical") {
        dynamicFields.innerHTML = `
            <div class="form-group">
                <label>Medical Items Details</label>
                <input type="text" id="medicalDetails" placeholder="Enter medicine/equipment name" required>
            </div>
        `;
    }

    else if (this.value === "financial") {
        dynamicFields.innerHTML = `
            <div class="form-group">
                <label>Donation Amount (₹)</label>
                <input type="number" id="financialAmount" required>
            </div>
        `;
    }
});


// Form Submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");

    const fullName = inputs[0].value.trim();
    const address = inputs[1].value.trim();
    const contact = inputs[2].value.trim();
    const email = inputs[3].value.trim();
    const state = inputs[4].value.trim();
    const city = inputs[5].value.trim();
    const pincode = inputs[6].value.trim();
    const supportType = careOption.value;

    if (!supportType) {
        alert("Please select support type.");
        return;
    }

    let supportDetails = "";

    if (supportType === "food") {
        supportDetails = document.getElementById("foodQty").value;
        if (!supportDetails) return alert("Enter food quantity.");
    }

    else if (supportType === "clothes") {
        supportDetails = document.getElementById("clothQty").value;
        if (!supportDetails) return alert("Enter clothes quantity.");
    }

    else if (supportType === "medical") {
        supportDetails = document.getElementById("medicalDetails").value.trim();
        if (!supportDetails) return alert("Enter medical details.");
    }

    else if (supportType === "financial") {
        supportDetails = document.getElementById("financialAmount").value;
        if (!supportDetails) return alert("Enter donation amount.");
    }

    const formData = {
        name: fullName,
        address: address,
        contact: contact,
        email: email,
        state: state,
        city: city,
        pincode: pincode,
        supportType: supportType,
        supportValue: supportDetails,
        date: new Date().toLocaleString()
    };

    // Get existing data
    let oldageData = JSON.parse(localStorage.getItem("oldageSupport")) || [];
    oldageData.push(formData);

    // Save
    localStorage.setItem("oldageSupport", JSON.stringify(oldageData));

    alert("✅ Support request submitted successfully!");

    form.reset();
    dynamicFields.innerHTML = "";
});