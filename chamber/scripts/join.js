// Set the current timestamp
document.getElementById('timestamp').value = new Date().toISOString();

// Modal functionality (simplified example)
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.card button');
const closeButtons = document.querySelectorAll('.close');

buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
        modals[index].style.display = 'block';
        });
});

closeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
        });
});
