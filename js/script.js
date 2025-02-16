document.addEventListener("DOMContentLoaded", function () {
    // Handle time button selection
    const timeButtons = document.querySelectorAll(".time-buttons button");

    timeButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'selected' class from all buttons
            timeButtons.forEach(btn => btn.classList.remove("selected"));

            // Add 'selected' class to the clicked button
            this.classList.add("selected");
        });
    });

    //Script for Calendar 
    
        $(function() {
            $("#datepicker").datepicker({
                dateFormat: "dd/mm/yy"
            });
        });
    

    // Handle form submission
    document.getElementById("submitBtn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        console.log("Submit button clicked."); // Debugging log

        // Get form values
        let fullName = document.getElementById("full-name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let classSelection = document.getElementById("class").value;
        let instructor = document.getElementById("instructor").value;
        let lessonType = document.getElementById("lesson-type").value;
        let formatSelected = document.querySelector('input[name="format"]:checked');
        let timeSelected = document.querySelector(".time-buttons .selected");

        // Warning message container
        let warningMessage = document.getElementById("warningMessage");

        // Initialize an empty error message
        let errorMessage = "";

        // Check if any required field is empty
        if (fullName === "") {
            errorMessage += "❌ Full Name is required.\n";
        }
        if (email === "") {
            errorMessage += "❌ Email is required.\n";
        }
        if (phone === "") {
            errorMessage += "❌ Phone Number is required.\n";
        }
        if (classSelection === "Select an option") {
            errorMessage += "❌ Please select a class.\n";
        }
        if (instructor === "Anyone") {
            errorMessage += "❌ Please choose an instructor.\n";
        }
        if (lessonType === "Select an option") {
            errorMessage += "❌ Please select a lesson type.\n";
        }
        if (!formatSelected) {
            errorMessage += "❌ Please select a class format (In Person / Virtual).\n";
        }
        if (!timeSelected) {
            errorMessage += "❌ Please select a time slot.\n";
        }

        console.log("Validation Errors:", errorMessage); // Debugging log

        // If there are errors, show the warning message and prevent redirection
        if (errorMessage !== "") {
            warningMessage.style.display = "block";
            warningMessage.innerText = errorMessage;
            return; // Stop further execution (Prevents redirection)
        }

        // If all fields are valid, hide warning message and redirect
        warningMessage.style.display = "none";
        console.log("✅ Form is valid. Redirecting to confirmation page..."); // Debugging log
        window.location.href = "confirmation.html"; // Redirect to confirmation page
    });
});
