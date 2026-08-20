function saveHealthCheck() {

    // Get form values
    let date =
        document.getElementById("checkDate").value;

    let temperature =
        document.getElementById("temperature").value;

    let painLevel =
        document.getElementById("painLevel").value;

    let sleepQuality =
        document.getElementById("sleepQuality").value;

    let appetite =
        document.getElementById("appetite").value;

    let energyLevel =
        document.getElementById("energyLevel").value;

    let symptoms =
        document.getElementById("symptoms").value;

    let notes =
        document.getElementById("notes").value;


    // Get selected health status
    let healthStatus =
        document.querySelector(
            'input[name="healthStatus"]:checked'
        );


    // Check date
    if (date === "") {

        alert("Please select the date.");

        return;
    }


    // Check health status
    if (healthStatus === null) {

        alert("Please select your overall health status.");

        return;
    }


    // Save data in browser
    localStorage.setItem(
        "healthCheckDate",
        date
    );

    localStorage.setItem(
        "temperature",
        temperature
    );

    localStorage.setItem(
        "painLevel",
        painLevel
    );

    localStorage.setItem(
        "sleepQuality",
        sleepQuality
    );

    localStorage.setItem(
        "appetite",
        appetite
    );

    localStorage.setItem(
        "energyLevel",
        energyLevel
    );

    localStorage.setItem(
        "symptoms",
        symptoms
    );

    localStorage.setItem(
        "healthNotes",
        notes
    );

    localStorage.setItem(
        "healthStatus",
        healthStatus.value
    );


    // Show success message
    document.getElementById(
        "healthMessage"
    ).style.display = "block";


    // Hide message after 3 seconds
    setTimeout(function () {

        document.getElementById(
            "healthMessage"
        ).style.display = "none";

    }, 3000);
}