// index.js

function toggleDetails(button) {
    const detailsContent = button.nextElementSibling;

    detailsContent.style.backgroundColor = '#f5f5f5';

    if (detailsContent.style.display === 'block') {
        detailsContent.style.display = 'none';
        button.innerHTML = 'Learn More ▼'; // Change to down arrow
        button.classList.remove('open');
    } else {
        detailsContent.style.display = 'block';
        button.innerHTML = 'Learn More ▲'; // Change to up arrow
        button.classList.add('open');
    }
}
