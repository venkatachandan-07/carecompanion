let medicines = [];


// Get HTML elements
const form = document.getElementById("medicineForm");
const medicineList = document.getElementById("medicineList");


// Add medicine
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values from form
    const name =
        document.getElementById("medicineName").value;

    const dosage =
        document.getElementById("dosage").value;

    const time =
        document.getElementById("medicineTime").value;

    const frequency =
        document.getElementById("frequency").value;


    // Create medicine object
    const medicine = {

        name: name,

        dosage: dosage,

        time: time,

        frequency: frequency,

        taken: false
    };


    // Add medicine to array
    medicines.push(medicine);


    // Save to browser
    saveMedicines();


    // Display medicines
    displayMedicines();


    // Clear form
    form.reset();
});


// Display medicines
function displayMedicines() {

    medicineList.innerHTML = "";


    // If there are no medicines
    if (medicines.length === 0) {

        medicineList.innerHTML = `
            <div class="empty-message">
                No medicines added yet.
            </div>
        `;

        return;
    }


    // Display each medicine
    medicines.forEach(function(medicine, index) {

        const medicineCard =
            document.createElement("div");

        medicineCard.className = "medicine-card";


        medicineCard.innerHTML = `

            <h3>💊 ${medicine.name}</h3>

            <div class="medicine-details">

                <div class="medicine-detail">
                    <span>Dosage</span>
                    <strong>${medicine.dosage}</strong>
                </div>

                <div class="medicine-detail">
                    <span>Time</span>
                    <strong>${medicine.time}</strong>
                </div>

                <div class="medicine-detail">
                    <span>Frequency</span>
                    <strong>${medicine.frequency}</strong>
                </div>

            </div>


            <div class="medicine-actions">

                <button
                    class="taken-button"
                    onclick="markTaken(${index})"
                >
                    ${medicine.taken ? "✓ Taken" : "Mark as Taken"}
                </button>


                <button
                    class="delete-medicine-button"
                    onclick="deleteMedicine(${index})"
                >
                    Delete
                </button>

            </div>
        `;


        medicineList.appendChild(medicineCard);

    });
}


// Mark medicine as taken
function markTaken(index) {

    medicines[index].taken = true;

    saveMedicines();

    displayMedicines();
}


// Delete medicine
function deleteMedicine(index) {

    const confirmDelete =
        confirm("Are you sure you want to delete this medicine?");

    if (confirmDelete) {

        medicines.splice(index, 1);

        saveMedicines();

        displayMedicines();
    }
}


// Save medicines in localStorage
function saveMedicines() {

    localStorage.setItem(
        "medicines",
        JSON.stringify(medicines)
    );
}


// Load medicines from localStorage
function loadMedicines() {

    const savedMedicines =
        localStorage.getItem("medicines");

    if (savedMedicines) {

        medicines =
            JSON.parse(savedMedicines);

        displayMedicines();
    }
}


// Load saved medicines when page opens
loadMedicines();