async function checkRecovery() {

    const symptoms = document.getElementById("symptoms").value.trim();
    const result = document.getElementById("result");

    if (symptoms === "") {
        result.innerHTML = `
            <div class="warning">
                Please describe your symptoms first.
            </div>
        `;
        return;
    }

    result.innerHTML = "Checking...";

    try {

        const response = await fetch("/api/recovery", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                symptoms: symptoms
            })

        });

        const data = await response.json();

        if (data.level === "emergency") {

            result.innerHTML = `
                <div class="danger">
                    <h3>🚨 Urgent Attention</h3>
                    <p>${data.message}</p>

                    <a href="/emergency">
                        <button class="danger-button">
                            Open SOS
                        </button>
                    </a>
                </div>
            `;

        } else if (data.level === "warning") {

            result.innerHTML = `
                <div class="warning">
                    <h3>⚠️ Warning Sign</h3>
                    <p>${data.message}</p>
                </div>
            `;

        } else {

            result.innerHTML = `
                <div class="success">
                    <h3>✅ Recovery Guidance</h3>
                    <p>${data.message}</p>
                </div>
            `;

        }

    } catch (error) {

        result.innerHTML = `
            <div class="danger">
                Unable to connect to the recovery assistant.
            </div>
        `;

        console.error(error);
    }
}