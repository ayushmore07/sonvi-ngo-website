// Get all input fields
const inputs = document.querySelectorAll(".form-section input");
const message = document.getElementById("message");
const amountSection = document.getElementById("amountSection");
const materialSection = document.getElementById("materialSection");
const address = document.getElementById("address");

// Show Amount Section
function showAmount() {
    amountSection.style.display = "block";
    materialSection.style.display = "none";
}

// Show Material Section
function showMaterial() {
    materialSection.style.display = "block";
    amountSection.style.display = "none";
}

// Show NGO Address
function showAddress() {
    address.style.display = "block";
}

// Payment Done Alert
function paymentDone() {
    alert("✅ Payment Successful! Thank you for your contribution.");
}

// Submit Form
function submitForm() {

    const fullName = inputs[0].value.trim();
    const age = inputs[1].value.trim();
    const userAddress = inputs[2].value.trim();
    const contact = inputs[3].value.trim();

    const donateType = document.querySelector('input[name="donateType"]:checked');

    if (!fullName || !age || !userAddress || !contact || !donateType) {
        message.style.color = "red";
        message.innerText = "⚠ Please fill all required details.";
        return;
    }

    let donationDetails = {};

    if (donateType.parentElement.innerText.includes("Amount")) {
        const amount = inputs[4].value.trim();
        if (!amount) {
            message.style.color = "red";
            message.innerText = "⚠ Please enter donation amount.";
            return;
        }

        donationDetails = {
            type: "Amount",
            value: amount
        };
    } else {
        const quantity = inputs[5].value.trim();
        if (!quantity) {
            message.style.color = "red";
            message.innerText = "⚠ Please enter material quantity.";
            return;
        }

        donationDetails = {
            type: "Material",
            value: quantity
        };
    }

    // Create Object
    const formData = {
        name: fullName,
        age: age,
        address: userAddress,
        contact: contact,
        donation: donationDetails,
        date: new Date().toLocaleString()
    };

    // Get existing data or create new array
    let educationData = JSON.parse(localStorage.getItem("educationSupport")) || [];
    educationData.push(formData);

    // Store back
    localStorage.setItem("educationSupport", JSON.stringify(educationData));

    // Success Message
    message.style.color = "green";
    message.innerText = "🎉 Thank you! Your support has been submitted successfully.";

    // Clear form
    document.querySelector(".form-section").querySelectorAll("input").forEach(input => {
        if (input.type !== "radio") {
            input.value = "";
        } else {
            input.checked = false;
        }
    });

    amountSection.style.display = "none";
    materialSection.style.display = "none";
    address.style.display = "none";
}