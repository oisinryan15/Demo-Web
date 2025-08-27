document.addEventListener('DOMContentLoaded', function() {
    const darkBtn = document.getElementById('darkModeBtn');
    if (darkBtn) {
        darkBtn.onclick = function() {
            document.body.classList.toggle('dark-theme');
        };
    }
    // font select 
    const fontSelect = document.getElementById('fontSelect');
    if (fontSelect) {
        fontSelect.onchange = function() {
            document.body.style.fontFamily = fontSelect.value;
        };
    }

    // font size slider
    const fontSlider = document.getElementById('fontSlider');
    if (fontSlider) {
        fontSlider.addEventListener('input', function() {
            document.body.style.fontSize = fontSlider.value + 'px';
        });
    }
});