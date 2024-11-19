// Get the toggle button and the icon element
const toggleButton = document.getElementById('toggle-btn');
const icon = toggleButton.querySelector('i');

// Check if dark mode was previously enabled
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
}

// Function to toggle dark mode
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Toggle the icon between sun and moon
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        
        // Save the user's preference in localStorage
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        
        // Remove the user's preference from localStorage
        localStorage.removeItem('dark-mode');
    }
});
