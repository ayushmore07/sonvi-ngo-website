// // Load Data From localStorage
// let educationData = JSON.parse(localStorage.getItem("educationSupport")) || [];
// let oldageData = JSON.parse(localStorage.getItem("oldageSupport")) || [];
// let organData = JSON.parse(localStorage.getItem("organSupport")) || [];

// // Update Cards Count
// document.getElementById("eduCount").innerText = educationData.length;
// document.getElementById("oldageCount").innerText = oldageData.length;
// document.getElementById("organCount").innerText = organData.length;


// // ===============================
// // EDUCATION TABLE
// // ===============================
// function loadEducationTable() {

//     const table = document.getElementById("educationTable");

//     if (educationData.length === 0) {
//         table.innerHTML = "<tr><td>No Education Data Found</td></tr>";
//         return;
//     }

//     table.innerHTML = `
//         <tr>
//             <th>Name</th>
//             <th>Contact</th>
//             <th>Type</th>
//             <th>Value</th>
//             <th>Date</th>
//             <th>Action</th>
//         </tr>
//     `;

//     educationData.forEach((data, index) => {
//         table.innerHTML += `
//             <tr>
//                 <td>${data.name}</td>
//                 <td>${data.contact}</td>
//                 <td>${data.donation.type}</td>
//                 <td>${data.donation.value}</td>
//                 <td>${data.date}</td>
//                 <td><button onclick="deleteEducation(${index})">Delete</button></td>
//             </tr>
//         `;
//     });
// }

// function deleteEducation(index) {
//     educationData.splice(index, 1);
//     localStorage.setItem("educationSupport", JSON.stringify(educationData));
//     location.reload();
// }


// // ===============================
// // OLD AGE TABLE
// // ===============================
// function loadOldageTable() {

//     const table = document.getElementById("oldageTable");

//     if (oldageData.length === 0) {
//         table.innerHTML = "<tr><td>No Old Age Data Found</td></tr>";
//         return;
//     }

//     table.innerHTML = `
//         <tr>
//             <th>Name</th>
//             <th>Contact</th>
//             <th>Support Type</th>
//             <th>Details</th>
//             <th>Date</th>
//             <th>Action</th>
//         </tr>
//     `;

//     oldageData.forEach((data, index) => {
//         table.innerHTML += `
//             <tr>
//                 <td>${data.name}</td>
//                 <td>${data.contact}</td>
//                 <td>${data.supportType}</td>
//                 <td>${data.supportValue}</td>
//                 <td>${data.date}</td>
//                 <td><button onclick="deleteOldage(${index})">Delete</button></td>
//             </tr>
//         `;
//     });
// }

// function deleteOldage(index) {
//     oldageData.splice(index, 1);
//     localStorage.setItem("oldageSupport", JSON.stringify(oldageData));
//     location.reload();
// }


// // ===============================
// // ORGAN TABLE
// // ===============================
// function loadOrganTable() {

//     const table = document.getElementById("organTable");

//     if (organData.length === 0) {
//         table.innerHTML = "<tr><td>No Organ Registrations Found</td></tr>";
//         return;
//     }

//     table.innerHTML = `
//         <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Organ</th>
//             <th>Date</th>
//             <th>Action</th>
//         </tr>
//     `;

//     organData.forEach((data, index) => {
//         table.innerHTML += `
//             <tr>
//                 <td>${data.name}</td>
//                 <td>${data.email}</td>
//                 <td>${data.phone}</td>
//                 <td>${data.organ}</td>
//                 <td>${data.date}</td>
//                 <td><button onclick="deleteOrgan(${index})">Delete</button></td>
//             </tr>
//         `;
//     });
// }

// function deleteOrgan(index) {
//     organData.splice(index, 1);
//     localStorage.setItem("organSupport", JSON.stringify(organData));
//     location.reload();
// }


// // ===============================
// // INITIAL LOAD
// // ===============================
// loadEducationTable();
// loadOldageTable();
// loadOrganTable();
// ===============================
// LOAD DATA FROM LOCAL STORAGE
// ===============================

let educationData = JSON.parse(localStorage.getItem("educationSupport")) || [];
let oldageData = JSON.parse(localStorage.getItem("oldageSupport")) || [];
let organData = JSON.parse(localStorage.getItem("organDonations")) || [];

// ===============================
// UPDATE CARD COUNTS
// ===============================

document.getElementById("eduCount").innerText = educationData.length;
document.getElementById("oldageCount").innerText = oldageData.length;
document.getElementById("organCount").innerText = organData.length;


// ===============================
// EDUCATION TABLE
// ===============================

function loadEducationTable() {

    const table = document.getElementById("educationTable");

    if (educationData.length === 0) {
        table.innerHTML = "<tr><td colspan='6'>No Education Data Found</td></tr>";
        return;
    }

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Type</th>
            <th>Value</th>
            <th>Date</th>
            <th>Action</th>
        </tr>
    `;

    educationData.forEach((data, index) => {
        table.innerHTML += `
            <tr>
                <td>${data.name}</td>
                <td>${data.contact}</td>
                <td>${data.donation?.type || "-"}</td>
                <td>${data.donation?.value || "-"}</td>
                <td>${data.date || "-"}</td>
                <td><button onclick="deleteEducation(${index})">Delete</button></td>
            </tr>
        `;
    });
}

function deleteEducation(index) {
    educationData.splice(index, 1);
    localStorage.setItem("educationSupport", JSON.stringify(educationData));
    location.reload();
}


// ===============================
// OLD AGE TABLE
// ===============================

function loadOldageTable() {

    const table = document.getElementById("oldageTable");

    if (oldageData.length === 0) {
        table.innerHTML = "<tr><td colspan='6'>No Old Age Data Found</td></tr>";
        return;
    }

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Support Type</th>
            <th>Details</th>
            <th>Date</th>
            <th>Action</th>
        </tr>
    `;

    oldageData.forEach((data, index) => {
        table.innerHTML += `
            <tr>
                <td>${data.name}</td>
                <td>${data.contact}</td>
                <td>${data.supportType || "-"}</td>
                <td>${data.supportValue || "-"}</td>
                <td>${data.date || "-"}</td>
                <td><button onclick="deleteOldage(${index})">Delete</button></td>
            </tr>
        `;
    });
}

function deleteOldage(index) {
    oldageData.splice(index, 1);
    localStorage.setItem("oldageSupport", JSON.stringify(oldageData));
    location.reload();
}


// ===============================
// ORGAN TABLE
// ===============================

function loadOrganTable() {

    const table = document.getElementById("organTable");

    if (organData.length === 0) {
        table.innerHTML = "<tr><td colspan='7'>No Organ Registrations Found</td></tr>";
        return;
    }

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Blood Group</th>
            <th>Organs</th>
            <th>Submitted On</th>
            <th>Action</th>
        </tr>
    `;

    organData.forEach((data, index) => {
        table.innerHTML += `
            <tr>
                <td>${data.name}</td>
                <td>${data.email}</td>
                <td>${data.phone}</td>
                <td>${data.bloodGroup || "-"}</td>
                <td>${data.organs ? data.organs.join(", ") : "-"}</td>
                <td>${data.dateSubmitted || "-"}</td>
                <td><button onclick="deleteOrgan(${index})">Delete</button></td>
            </tr>
        `;
    });
}

function deleteOrgan(index) {
    organData.splice(index, 1);
    localStorage.setItem("organDonations", JSON.stringify(organData));
    location.reload();
}


// ===============================
// INITIAL LOAD
// ===============================

loadEducationTable();
loadOldageTable();
loadOrganTable();