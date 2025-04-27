document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    const themeText = document.getElementById('theme-text');
    
    if (body.classList.contains('white-theme')) {
        body.classList.remove('white-theme');
        body.classList.add('black-theme');
        themeText.textContent = "Is this White?";
    } else {
        body.classList.remove('black-theme');
        body.classList.add('white-theme');
        themeText.textContent = "Is this Black?";
    }
});