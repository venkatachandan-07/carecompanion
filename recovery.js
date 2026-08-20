function loadRecoveryDashboard() {

    // Get saved information
    let healthStatus =
        localStorage.getItem("healthStatus");

    let temperature =
        localStorage.getItem("temperature");

    let checkDate =
        localStorage.getItem("healthCheckDate");

    let painLevel =
        localStorage.getItem("painLevel");

    let sleepQuality =
        localStorage.getItem("sleepQuality");

    let energyLevel =
        localStorage.getItem("energyLevel");

    let symptoms =
        localStorage.getItem("symptoms");


    // Display health status
    document.getElementById("healthStatus")
        .textContent =
        healthStatus || "Not Available";


    // Display temperature
    if (temperature) {

        document.getElementById("temperature")
            .textContent =
            temperature + " °F";

        document.getElementById("tempInfo")
            .textContent =
            temperature + " °F";

    }


    // Display date
    document.getElementById("lastCheck")
        .textContent =
        checkDate || "None";


    // Display pain
    document.getElementById("painInfo")
        .textContent =
        painLevel || "Not Available";


    // Display sleep
    document.getElementById("sleepInfo")
        .textContent =
        sleepQuality || "Not Available";


    // Display energy
    document.getElementById("energyInfo")
        .textContent =
        energyLevel || "Not Available";


    // Display symptoms
    document.getElementById("symptoms")
        .textContent =
        symptoms || "No symptoms recorded.";


    // Calculate recovery progress
    let progress = 0;


    if (healthStatus === "Good") {

        progress = 100;

    }
    else if (healthStatus === "Average") {

        progress = 60;

    }
    else if (healthStatus === "Poor") {

        progress = 30;

    }
    else {

        progress = 0;

    }


    // Update progress bar
    document.getElementById("progress")
        .style.width =
        progress + "%";


    document.getElementById("progressText")
        .textContent =
        progress + "%";

}


// Run when page opens
loadRecoveryDashboard();