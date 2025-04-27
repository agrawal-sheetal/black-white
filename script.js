document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    const themeText = document.getElementById('theme-text');
    const themeToggle = document.getElementById('theme-toggle');
    
    if (body.classList.contains('white-theme')) {
        body.classList.remove('white-theme');
        body.classList.add('black-theme');
        themeText.textContent = "Is this White?";
        themeToggle.textContent = "Sure?";
    } else {
        body.classList.remove('black-theme');
        body.classList.add('white-theme');
        themeText.textContent = "Is this Black?";
        themeToggle.textContent = "Sure?";
    }
});