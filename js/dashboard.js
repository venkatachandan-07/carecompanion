// ============================================
// CARECOMPANION DASHBOARD
// MEMBER 1 - MULTI-USER VERSION
// ============================================


// ============================================
// CURRENT USER
// ============================================

const currentUserId =
    localStorage.getItem("currentUserId");


// ============================================
// LOGIN PROTECTION
// ============================================

if (!currentUserId) {

    window.location.replace("login.html");

}


// ============================================
// USER-SPECIFIC STORAGE KEY
// ============================================

function userKey(key) {

    return currentUserId + "_" + key;

}


// ============================================
// LOAD USER DARK MODE
// ============================================

const darkModeEnabled =
    localStorage.getItem(
        userKey("darkModeEnabled")
    );


if (darkModeEnabled === "true") {

    document.body.classList.add(
        "dark-mode"
    );

} else {

    document.body.classList.remove(
        "dark-mode"
    );

}


// ============================================
// GET USER NAME
// ============================================

const userName =
    localStorage.getItem(
        userKey("name")
    ) ||
    localStorage.getItem(
        "currentUserName"
    ) ||
    "User";


// ============================================
// GET DASHBOARD ELEMENTS
// ============================================

const userNameElement =
    document.getElementById("userName");

const recoveryStatus =
    document.getElementById("recoveryStatus");

const recoveryStatusText =
    document.getElementById("recoveryStatusText");

const healthCheckStatus =
    document.getElementById("healthCheckStatus");

const dailyHealthStatus =
    document.getElementById("dailyHealthStatus");

const healthCheckBtn =
    document.getElementById("healthCheckBtn");

const progressPercentage =
    document.getElementById("progressPercentage");

const progressBar =
    document.getElementById("progressBar");

const aiRecoveryMessage =
    document.getElementById("aiRecoveryMessage");

const aiRecoveryBtn =
    document.getElementById("aiRecoveryBtn");

const progressHistory =
    document.getElementById("progressHistory");


// ============================================
// LOGOUT BUTTON
// ============================================

const logoutBtn =
    document.getElementById("logoutBtn");


// ============================================
// DISPLAY USER NAME
// ============================================

if (userNameElement) {

    userNameElement.textContent =
        userName;

}


// ============================================
// LOAD HEALTH CHECK
// ============================================

let healthCheckCompleted =
    localStorage.getItem(
        userKey("healthCheckCompleted")
    ) === "true";


// ============================================
// CALCULATE PROGRESS
// ============================================

function calculateProgress() {

    if (healthCheckCompleted) {

        return 100;

    }

    return 0;

}


// ============================================
// UPDATE PROGRESS
// ============================================

function updateProgress() {

    const progress =
        calculateProgress();


    // Percentage

    if (progressPercentage) {

        progressPercentage.textContent =
            progress + "%";

    }


    // Progress bar

    if (progressBar) {

        progressBar.style.width =
            progress + "%";

    }


    // Recovery status

    if (recoveryStatus) {

        recoveryStatus.textContent =
            progress === 100
                ? "Completed"
                : "In Progress";

    }


    // Recovery description

    if (recoveryStatusText) {

        recoveryStatusText.textContent =
            progress === 100

                ? "Today's health check has been completed."

                : "Complete today's health check to continue your recovery.";

    }

}


// ============================================
// UPDATE HEALTH CHECK
// ============================================

function updateHealthCheck() {

    if (healthCheckCompleted) {


        if (healthCheckStatus) {

            healthCheckStatus.textContent =
                "Completed";

        }


        if (dailyHealthStatus) {

            dailyHealthStatus.textContent =
                "Completed";

        }


        if (healthCheckBtn) {

            healthCheckBtn.textContent =
                "Completed";

            healthCheckBtn.disabled =
                true;

        }

    } else {


        if (healthCheckStatus) {

            healthCheckStatus.textContent =
                "Pending";

        }


        if (dailyHealthStatus) {

            dailyHealthStatus.textContent =
                "Pending";

        }


        if (healthCheckBtn) {

            healthCheckBtn.textContent =
                "Start Health Check";

            healthCheckBtn.disabled =
                false;

        }

    }

}


// ============================================
// HEALTH CHECK BUTTON
// ============================================

if (healthCheckBtn) {

    healthCheckBtn.addEventListener(
        "click",
        function () {


            healthCheckCompleted =
                true;


            // USER-SPECIFIC STORAGE

            localStorage.setItem(
                userKey("healthCheckCompleted"),
                "true"
            );


            // SAVE HISTORY

            saveHistory(
                "Daily health check completed"
            );


            // UPDATE DASHBOARD

            updateHealthCheck();

            updateProgress();

            updateAIMessage();

        }
    );

}


// ============================================
// AI RECOVERY MESSAGE
// ============================================

function updateAIMessage() {

    if (!aiRecoveryMessage) {

        return;

    }


    const progress =
        calculateProgress();


    if (progress === 100) {

        aiRecoveryMessage.textContent =
            "Excellent! Today's health check is complete. Keep following your recovery plan.";

    } else {

        aiRecoveryMessage.textContent =
            "Complete today's health check to receive personalized recovery guidance.";

    }

}


// ============================================
// AI BUTTON
// ============================================

if (aiRecoveryBtn) {

    aiRecoveryBtn.addEventListener(
        "click",
        function () {

            updateAIMessage();

        }
    );

}


// ============================================
// SAVE RECOVERY HISTORY
// ============================================

function saveHistory(activity) {

    let history =
        JSON.parse(
            localStorage.getItem(
                userKey("recoveryHistory")
            )
        ) || [];


    history.unshift({

        activity: activity,

        date:
            new Date().toLocaleDateString(),

        time:
            new Date().toLocaleTimeString()

    });


    localStorage.setItem(
        userKey("recoveryHistory"),
        JSON.stringify(history)
    );


    displayHistory();

}


// ============================================
// DISPLAY RECOVERY HISTORY
// ============================================

function displayHistory() {

    if (!progressHistory) {

        return;

    }


    const history =
        JSON.parse(
            localStorage.getItem(
                userKey("recoveryHistory")
            )
        ) || [];


    // NO HISTORY

    if (history.length === 0) {

        progressHistory.innerHTML = `

            <div class="history-empty">

                <span>✓</span>

                <p>
                    No recovery activity recorded yet.
                </p>

            </div>

        `;

        return;

    }


    // CLEAR HISTORY

    progressHistory.innerHTML = "";


    // SHOW LATEST 10

    history
        .slice(0, 10)
        .forEach(function (item) {


            const historyItem =
                document.createElement("div");


            historyItem.className =
                "history-item";


            historyItem.innerHTML = `

                <div class="history-icon">
                    ✓
                </div>

                <div class="history-content">

                    <strong>
                        ${item.activity}
                    </strong>

                    <span>
                        ${item.date} · ${item.time}
                    </span>

                </div>

            `;


            progressHistory.appendChild(
                historyItem
            );

        });

}


// ============================================
// LOGOUT
// ============================================

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            // --------------------------------
            // REMOVE CURRENT LOGIN SESSION
            // --------------------------------

            localStorage.removeItem(
                "currentUserId"
            );

            localStorage.removeItem(
                "currentUserEmail"
            );

            localStorage.removeItem(
                "currentUserName"
            );


            // --------------------------------
            // GO TO LOGIN PAGE
            // --------------------------------

            window.location.replace(
                "login.html"
            );

        }
    );

}


// ============================================
// INITIALIZE DASHBOARD
// ============================================

updateHealthCheck();

updateProgress();

updateAIMessage();

displayHistory();