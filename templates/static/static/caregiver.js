document.addEventListener("DOMContentLoaded", function () {

    loadPatientData();

});


function loadPatientData() {

    const recovery =
        localStorage.getItem("recoveryProgress") || 70;

    const medicine =
        localStorage.getItem("medicineStatus") || "Taken";

    const taskProgress =
        localStorage.getItem("taskProgress") || 60;

    const sos =
        localStorage.getItem("sosAlert");


    document.getElementById("recoveryPercent").innerText =
        recovery + "%";


    document.getElementById("medicineStatus").innerText =
        medicine;


    document.getElementById("taskProgress").innerText =
        taskProgress + "%";


    document.getElementById("progressBar").style.width =
        taskProgress + "%";


    if (sos === "true") {

        document.getElementById("alerts").innerHTML = `
            <div class="danger">
                🚨 Emergency SOS has been activated!
            </div>
        `;

        document.getElementById("notifications").innerHTML = `
            <div class="danger">
                🚨 Patient has activated Emergency SOS.
            </div>
        `;

    }

}