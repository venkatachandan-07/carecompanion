function saveInstructions() {

    // Get values from the form
    let patientName =
        document.getElementById("patientName").value;

    let dischargeDate =
        document.getElementById("dischargeDate").value;

    let doctorName =
        document.getElementById("doctorName").value;

    let followupDate =
        document.getElementById("followupDate").value;

    let specialInstructions =
        document.getElementById("specialInstructions").value;


    // Check patient name
    if (patientName === "") {

        alert("Please enter patient name.");

        return;
    }


    // Save information in browser
    localStorage.setItem(
        "patientName",
        patientName
    );

    localStorage.setItem(
        "dischargeDate",
        dischargeDate
    );

    localStorage.setItem(
        "doctorName",
        doctorName
    );

    localStorage.setItem(
        "followupDate",
        followupDate
    );

    localStorage.setItem(
        "specialInstructions",
        specialInstructions
    );


    // Show success message
    document.getElementById("message").style.display =
        "block";


    // Hide message after 3 seconds
    setTimeout(function () {

        document.getElementById("message").style.display =
            "none";

    }, 3000);
}