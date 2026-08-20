// Load health information
function loadAlerts() {

    let temperature =
        localStorage.getItem("temperature");

    let painLevel =
        localStorage.getItem("painLevel");

    let healthStatus =
        localStorage.getItem("healthStatus");

    let checkDate =
        localStorage.getItem("healthCheckDate");


    let warnings = 0;

    let critical = 0;

    let alerts = [];


    // Check temperature
    if (temperature !== null &&
        temperature !== "") {

        let temp = parseFloat(temperature);


        if (temp >= 100.4 && temp < 103) {

            warnings++;

            alerts.push({
                type: "warning",
                icon: "⚠️",
                title: "High Temperature",
                message:
                    "Your recorded temperature is high. Monitor your temperature and follow medical advice."
            });

        }


        if (temp >= 103) {

            critical++;

            alerts.push({
                type: "danger",
                icon: "🚨",
                title: "Very High Temperature",
                message:
                    "Your recorded temperature is very high. Seek medical advice promptly."
            });

        }

    }


    // Check pain level
    if (painLevel !== null) {

        if (painLevel === "4-6") {

            warnings++;

            alerts.push({
                type: "warning",
                icon: "⚠️",
                title: "Moderate Pain",
                message:
                    "Moderate pain was recorded. Continue monitoring your condition."
            });

        }


        if (painLevel === "7-9" ||
            painLevel === "10") {

            critical++;

            alerts.push({
                type: "danger",
                icon: "🚨",
                title: "Severe Pain",
                message:
                    "Severe pain was recorded. Contact a healthcare professional for advice."
            });

        }

    }


    // Check overall health
    if (healthStatus === "Poor") {

        warnings++;

        alerts.push({
            type: "warning",
            icon: "⚠️",
            title: "Poor Health Status",
            message:
                "Your overall health status was marked as poor. Monitor your symptoms carefully."
        });

    }


    // If there are no alerts
    if (alerts.length === 0) {

        alerts.push({
            type: "success",
            icon: "✅",
            title: "No Warning Signs",
            message:
                "No warning signs were detected from your latest health check."
        });

    }


    // Display alerts
    let alertList =
        document.getElementById("alertList");


    alertList.innerHTML = "";


    alerts.forEach(function(alert) {

        let div =
            document.createElement("div");

        div.className =
            "alert " + alert.type;


        div.innerHTML = `

            <div class="alert-icon">
                ${alert.icon}
            </div>

            <div>

                <h3>
                    ${alert.title}
                </h3>

                <p>
                    ${alert.message}
                </p>

            </div>

        `;


        alertList.appendChild(div);

    });


    // Update summary
    document.getElementById(
        "warningCount"
    ).textContent = warnings;


    document.getElementById(
        "criticalCount"
    ).textContent = critical;


    document.getElementById(
        "healthStatus"
    ).textContent =
        healthStatus || "Not Available";


    document.getElementById(
        "lastCheck"
    ).textContent =
        checkDate || "None";

}


// Run when page loads
loadAlerts();