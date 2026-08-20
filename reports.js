function loadReport() {

    // Patient information

    let patientName =
        localStorage.getItem("patientName");

    let doctorName =
        localStorage.getItem("doctorName");

    let dischargeDate =
        localStorage.getItem("dischargeDate");

    let followupDate =
        localStorage.getItem("followupDate");


    // Health information

    let checkDate =
        localStorage.getItem("healthCheckDate");

    let temperature =
        localStorage.getItem("temperature");

    let painLevel =
        localStorage.getItem("painLevel");

    let sleepQuality =
        localStorage.getItem("sleepQuality");

    let appetite =
        localStorage.getItem("appetite");

    let energyLevel =
        localStorage.getItem("energyLevel");

    let healthStatus =
        localStorage.getItem("healthStatus");

    let symptoms =
        localStorage.getItem("symptoms");

    let notes =
        localStorage.getItem("healthNotes");


    // Discharge instructions

    let specialInstructions =
        localStorage.getItem(
            "specialInstructions"
        );


    // Display patient information

    document.getElementById(
        "patientName"
    ).textContent =
        patientName || "Not Available";


    document.getElementById(
        "doctorName"
    ).textContent =
        doctorName || "Not Available";


    document.getElementById(
        "dischargeDate"
    ).textContent =
        dischargeDate || "Not Available";


    document.getElementById(
        "followupDate"
    ).textContent =
        followupDate || "Not Available";


    // Display health information

    document.getElementById(
        "checkDate"
    ).textContent =
        checkDate || "Not Available";


    document.getElementById(
        "temperature"
    ).textContent =
        temperature
            ? temperature + " °F"
            : "Not Available";


    document.getElementById(
        "painLevel"
    ).textContent =
        painLevel || "Not Available";


    document.getElementById(
        "sleepQuality"
    ).textContent =
        sleepQuality || "Not Available";


    document.getElementById(
        "appetite"
    ).textContent =
        appetite || "Not Available";


    document.getElementById(
        "energyLevel"
    ).textContent =
        energyLevel || "Not Available";


    document.getElementById(
        "healthStatus"
    ).textContent =
        healthStatus || "Not Available";


    // Symptoms

    document.getElementById(
        "symptoms"
    ).textContent =
        symptoms || "No symptoms recorded.";


    // Notes

    document.getElementById(
        "notes"
    ).textContent =
        notes || "No additional notes recorded.";


    // Special instructions

    document.getElementById(
        "specialInstructions"
    ).textContent =
        specialInstructions ||
        "No special instructions recorded.";

}


// Print report

function printReport() {

    window.print();

}


// Clear saved data

function clearReport() {

    let confirmation =
        confirm(
            "Are you sure you want to clear all saved health data?"
        );


    if (confirmation) {

        localStorage.clear();

        alert(
            "All saved health data has been cleared."
        );

        location.reload();

    }

}


// Load report when page opens

loadReport();