document.getElementById('heartButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default anchor action (optional)
    const heartIcon = document.getElementById('heartIco');
    
    if (heartIcon.name === 'heart-outline') {
        heartIcon.setAttribute('name', 'heart');  // Fill the heart
    } else {
        heartIcon.setAttribute('name', 'heart-outline');  // Unfill the heart
    }
});
