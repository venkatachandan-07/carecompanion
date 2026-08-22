// ============================================
// CARECOMPANION SIGNUP JAVASCRIPT
// ============================================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // ========================================
        // GET FORM VALUES
        // ========================================

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim().toLowerCase();

        const phone =
            document.getElementById("phone").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const terms =
            document.getElementById("terms");


        // ========================================
        // VALIDATION
        // ========================================

        if (name === "") {
            alert("Please enter your full name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }

        if (phone === "") {
            alert("Please enter your phone number.");
            return;
        }

        if (password === "") {
            alert("Please create a password.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (terms && !terms.checked) {
            alert("Please accept the Terms & Conditions.");
            return;
        }


        // ========================================
        // GET EXISTING ACCOUNTS
        // ========================================

        let accounts =
            JSON.parse(
                localStorage.getItem("careCompanionAccounts")
            ) || [];


        // ========================================
        // CHECK IF EMAIL ALREADY EXISTS
        // ========================================

        const existingAccount =
            accounts.find(function (user) {

                return user.email.toLowerCase() === email;

            });


        if (existingAccount) {

            alert(
                "An account with this email already exists. Please login."
            );

            window.location.href = "login.html";

            return;
        }


        // ========================================
        // CREATE UNIQUE USER ID
        // ========================================

        const userId =
            "user_" +
            Date.now() +
            "_" +
            Math.random()
                .toString(36)
                .substring(2, 8);


        // ========================================
        // CREATE ACCOUNT
        // ========================================

        const newAccount = {

            id: userId,

            name: name,

            email: email,

            phone: phone,

            password: password

        };


        // ========================================
        // ADD ACCOUNT
        // ========================================

        accounts.push(newAccount);


        localStorage.setItem(
            "careCompanionAccounts",
            JSON.stringify(accounts)
        );


        // ========================================
        // ACCOUNT CREATED
        // ========================================

        alert("Account created successfully!");

        window.location.href = "login.html";

    });

}