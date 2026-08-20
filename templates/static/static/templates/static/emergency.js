document.addEventListener("DOMContentLoaded", function () {

    loadContact();

});


function saveContact() {

    const name =
        document.getElementById("contactName").value;

    const number =
        document.getElementById("contactNumber").value;


    if (name === "" || number === "") {

        alert("Please enter contact details.");

        return;
    }


    localStorage.setItem("emergencyName", name);

    localStorage.setItem("emergencyNumber", number);


    alert("Emergency contact saved.");
}


function loadContact() {

    const name =
        localStorage.getItem("emergencyName");

    const number =
        localStorage.getItem("emergencyNumber");


    if (name) {

        document.getElementById("contactName").value =
            name;

    }


    if (number) {

        document.getElementById("contactNumber").value =
            number;

    }

}


function activateSOS() {

    const name =
        localStorage.getItem("emergencyName");

    const number =
        localStorage.getItem("emergencyNumber");


    localStorage.setItem("sosAlert", "true");


    const result =
        document.getElementById("sosResult");


    result.innerHTML = `
        <div class="danger sos-message">

            <h2>🚨 SOS ACTIVATED</h2>

            <p>
                Emergency assistance has been requested.
            </p>

            <p>
                Caregiver notification has been triggered.
            </p>

            ${
                number
                ?
                `<a href="tel:${number}">
                    <button class="danger-button">
                        📞 Call ${name || "Emergency Contact"}
                    </button>
                </a>`
                :
                `<p>
                    Please add an emergency contact number.
                </p>`
            }

        </div>
    `;


    if ("Notification" in window) {

        if (Notification.permission === "granted") {

            new Notification("🚨 Emergency SOS", {

                body: "Patient has activated Emergency SOS."

            });

        } else {

            Notification.requestPermission();

        }

    }

}