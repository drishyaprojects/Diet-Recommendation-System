function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    document.getElementById(page).style.display = 'flex';
}
showPage('loginPage');
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login successful!');
    showPage('homePage');
});
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        alert('Registration successful!');
        showPage('loginPage');
    } else {
        alert('Passwords do not match!');
    }
});
document.getElementById('dietForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activityLevel = document.getElementById('activityLevel').value;
    document.getElementById('result').innerText = 
        `Your daily calorie intake recommendation is: ${Math.round(tdee)} calories per day.`;
});
