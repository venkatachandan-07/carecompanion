// ============================================
// CARECOMPANION LOGIN JAVASCRIPT
// ============================================


// ============================================
// GET ELEMENTS
// ============================================

const loginForm =
    document.getElementById("loginForm");

const passwordInput =
    document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");

const emailInput =
    document.getElementById("email");

const emailError =
    document.getElementById("emailError");

const passwordError =
    document.getElementById("passwordError");


// ============================================
// SHOW / HIDE PASSWORD
// ============================================

if (togglePassword && passwordInput) {

    togglePassword.addEventListener(
        "click",
        function () {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                togglePassword.textContent = "Hide";

            }

            else {

                passwordInput.type = "password";

                togglePassword.textContent = "Show";

            }

        }
    );

}


// ============================================
// LOGIN
// ============================================

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // ====================================
            // CLEAR ERRORS
            // ====================================

            if (emailError) {
                emailError.textContent = "";
            }

            if (passwordError) {
                passwordError.textContent = "";
            }


            // ====================================
            // GET LOGIN VALUES
            // ====================================

            const email =
                emailInput.value
                    .trim()
                    .toLowerCase();

            const password =
                passwordInput.value;


            // ====================================
            // VALIDATION
            // ====================================

            if (email === "") {

                if (emailError) {

                    emailError.textContent =
                        "Please enter your email.";

                }

                return;
            }


            if (password === "") {

                if (passwordError) {

                    passwordError.textContent =
                        "Please enter your password.";

                }

                return;
            }


            // ====================================
            // GET ACCOUNTS
            // ====================================

            const accounts =
                JSON.parse(
                    localStorage.getItem(
                        "careCompanionAccounts"
                    )
                ) || [];


            // ====================================
            // FIND ACCOUNT
            // ====================================

            const account =
                accounts.find(function (user) {

                    return (
                        user.email.toLowerCase() === email &&
                        user.password === password
                    );

                });


            // ====================================
            // INVALID LOGIN
            // ====================================

            if (!account) {

                if (emailError) {

                    emailError.textContent =
                        "Invalid email or password.";

                }

                return;
            }


            // ====================================
            // SAVE CURRENT USER
            // ====================================

            localStorage.setItem(
                "currentUserId",
                account.id
            );

            localStorage.setItem(
                "currentUserName",
                account.name
            );

            localStorage.setItem(
                "currentUserEmail",
                account.email
            );

            localStorage.setItem(
                "currentUserPhone",
                account.phone
            );

            localStorage.setItem(
                "loggedIn",
                "true"
            );


            // ====================================
            // GO TO DASHBOARD
            // ====================================

            window.location.href =
                "dashboard.html";

        }
    );

}


// ============================================
// FORGOT PASSWORD
// ============================================

const forgotPassword =
    document.getElementById("forgotPassword");

if (forgotPassword) {

    forgotPassword.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            alert(
                "Please contact your healthcare administrator to recover your account."
            );

        }
    );

}