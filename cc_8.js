document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registrationForm');
    const registrationDisplay = document.getElementById('registrationDisplay');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const eventDate = document.getElementById('eventDate').value;
        const preferences = Array.from(document.querySelectorAll('input[name="preference"]:checked')).map(pref => pref.value);

        if (!name || !email || !eventDate || preferences.length === 0) {
            alert("Please fill out all fields and select at least one preference.");
            return;
        }


    }}

