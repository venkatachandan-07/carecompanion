// ============================================
// CARECOMPANION SETTINGS
// MEMBER 1 - MULTI USER SETTINGS
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

    window.location.href = "login.html";

}


// ============================================
// USER-SPECIFIC STORAGE KEY
// ============================================

function userKey(key) {

    return currentUserId + "_" + key;

}


// ============================================
// GET ELEMENTS
// ============================================

const notificationToggle =
    document.getElementById("notificationToggle");

const medicationToggle =
    document.getElementById("medicationToggle");

const darkModeToggle =
    document.getElementById("darkModeToggle");

const saveSettings =
    document.getElementById("saveSettings");

const saveMessage =
    document.getElementById("saveMessage");

const accountEmail =
    document.getElementById("accountEmail");

const backBtn =
    document.getElementById("backBtn");


// ============================================
// USER EMAIL
// ============================================

const currentUserEmail =
    localStorage.getItem("currentUserEmail");

if (accountEmail) {

    accountEmail.textContent =
        currentUserEmail || "Not available";

}


// ============================================
// LOAD SETTINGS
// ============================================

function loadSettings() {

    // -------------------------------
    // Notifications
    // -------------------------------

    const notifications =
        localStorage.getItem(
            userKey("notificationsEnabled")
        );

    if (notificationToggle) {

        if (notifications === null) {

            notificationToggle.checked = true;

        } else {

            notificationToggle.checked =
                notifications === "true";

        }

    }


    // -------------------------------
    // Medication reminders
    // -------------------------------

    const medications =
        localStorage.getItem(
            userKey("medicationReminders")
        );

    if (medicationToggle) {

        if (medications === null) {

            medicationToggle.checked = true;

        } else {

            medicationToggle.checked =
                medications === "true";

        }

    }


    // -------------------------------
    // Dark mode
    // -------------------------------

    const darkMode =
        localStorage.getItem(
            userKey("darkModeEnabled")
        );

    if (darkModeToggle) {

        if (darkMode === "true") {

            darkModeToggle.checked = true;

            document.body.classList.add(
                "dark-mode"
            );

        } else {

            darkModeToggle.checked = false;

            document.body.classList.remove(
                "dark-mode"
            );

        }

    }

}


// ============================================
// APPLY DARK MODE
// ============================================

function applyDarkMode() {

    if (!darkModeToggle) {
        return;
    }

    if (darkModeToggle.checked) {

        document.body.classList.add(
            "dark-mode"
        );

    } else {

        document.body.classList.remove(
            "dark-mode"
        );

    }

}


// ============================================
// DARK MODE TOGGLE
// ============================================

if (darkModeToggle) {

    darkModeToggle.addEventListener(
        "change",
        function () {

            applyDarkMode();

        }
    );

}


// ============================================
// SAVE SETTINGS
// ============================================

if (saveSettings) {

    saveSettings.addEventListener(
        "click",
        function () {


            // -------------------------------
            // Notifications
            // -------------------------------

            if (notificationToggle) {

                localStorage.setItem(
                    userKey("notificationsEnabled"),
                    notificationToggle.checked
                );

            }


            // -------------------------------
            // Medication reminders
            // -------------------------------

            if (medicationToggle) {

                localStorage.setItem(
                    userKey("medicationReminders"),
                    medicationToggle.checked
                );

            }


            // -------------------------------
            // Dark mode
            // -------------------------------

            if (darkModeToggle) {

                localStorage.setItem(
                    userKey("darkModeEnabled"),
                    darkModeToggle.checked
                );

            }


            // Apply immediately

            applyDarkMode();


            // -------------------------------
            // Success message
            // -------------------------------

            if (saveMessage) {

                saveMessage.textContent =
                    "✓ Settings saved successfully";

                setTimeout(
                    function () {

                        saveMessage.textContent = "";

                    },
                    3000
                );

            }

        }
    );

}


// ============================================
// BACK TO DASHBOARD
// ============================================

if (backBtn) {

    backBtn.addEventListener(
        "click",
        function () {

            window.location.href =
                "dashboard.html";

        }
    );

}


// ============================================
// INITIALIZE
// ============================================

loadSettings();