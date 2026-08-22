// ============================================
// CARECOMPANION PROFILE JAVASCRIPT
// USER-SPECIFIC VERSION
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

const profileName =
    document.getElementById("profileName");

const profileEmail =
    document.getElementById("profileEmail");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const phoneInput =
    document.getElementById("phone");

const userId =
    document.getElementById("userId");

const editBtn =
    document.getElementById("editBtn");

const saveBtn =
    document.getElementById("saveBtn");

const backBtn =
    document.getElementById("backBtn");


// ============================================
// LOAD CURRENT USER DATA
// ============================================

function loadProfile() {

    const name =
        localStorage.getItem(
            userKey("name")
        ) ||
        localStorage.getItem("currentUserName") ||
        "User";


    const email =
        localStorage.getItem(
            userKey("email")
        ) ||
        localStorage.getItem("currentUserEmail") ||
        "";


    const phone =
        localStorage.getItem(
            userKey("phone")
        ) ||
        localStorage.getItem("currentUserPhone") ||
        "";


    // ----------------------------------------
    // DISPLAY PROFILE HEADER
    // ----------------------------------------

    if (profileName) {

        profileName.textContent =
            name;

    }


    if (profileEmail) {

        profileEmail.textContent =
            email;

    }


    // ----------------------------------------
    // DISPLAY FORM DATA
    // ----------------------------------------

    if (nameInput) {

        nameInput.value =
            name;

    }


    if (emailInput) {

        emailInput.value =
            email;

    }


    if (phoneInput) {

        phoneInput.value =
            phone;

    }


    // ----------------------------------------
    // DISPLAY ACCOUNT ID
    // ----------------------------------------

    if (userId) {

        userId.textContent =
            currentUserId;

    }


    // ----------------------------------------
    // INPUTS READ-ONLY BY DEFAULT
    // ----------------------------------------

    setEditing(false);

}


// ============================================
// ENABLE / DISABLE EDITING
// ============================================

function setEditing(editing) {

    if (nameInput) {

        nameInput.disabled =
            !editing;

    }


    if (emailInput) {

        emailInput.disabled =
            !editing;

    }


    if (phoneInput) {

        phoneInput.disabled =
            !editing;

    }


    if (editBtn) {

        editBtn.style.display =
            editing
                ? "none"
                : "inline-block";

    }


    if (saveBtn) {

        saveBtn.style.display =
            editing
                ? "inline-block"
                : "none";

    }

}


// ============================================
// EDIT PROFILE
// ============================================

if (editBtn) {

    editBtn.addEventListener(
        "click",
        function () {

            setEditing(true);

            if (nameInput) {

                nameInput.focus();

            }

        }
    );

}


// ============================================
// SAVE PROFILE
// ============================================

if (saveBtn) {

    saveBtn.addEventListener(
        "click",
        function () {

            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim()
                    .toLowerCase();

            const phone =
                phoneInput.value.trim();


            // --------------------------------
            // VALIDATION
            // --------------------------------

            if (name === "") {

                alert(
                    "Please enter your full name."
                );

                return;

            }


            if (email === "") {

                alert(
                    "Please enter your email address."
                );

                return;

            }


            // --------------------------------
            // SAVE USER-SPECIFIC DATA
            // --------------------------------

            localStorage.setItem(
                userKey("name"),
                name
            );


            localStorage.setItem(
                userKey("email"),
                email
            );


            localStorage.setItem(
                userKey("phone"),
                phone
            );


            // --------------------------------
            // UPDATE CURRENT SESSION
            // --------------------------------

            localStorage.setItem(
                "currentUserName",
                name
            );


            localStorage.setItem(
                "currentUserEmail",
                email
            );


            localStorage.setItem(
                "currentUserPhone",
                phone
            );


            // --------------------------------
            // UPDATE DISPLAY
            // --------------------------------

            if (profileName) {

                profileName.textContent =
                    name;

            }


            if (profileEmail) {

                profileEmail.textContent =
                    email;

            }


            // --------------------------------
            // EXIT EDIT MODE
            // --------------------------------

            setEditing(false);


            // --------------------------------
            // SUCCESS MESSAGE
            // --------------------------------

            alert(
                "Profile updated successfully!"
            );

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

loadProfile();