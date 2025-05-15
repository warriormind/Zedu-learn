// script.js

// Load the default language
let currentLang = 'en'; // Default to English

function updateContent() {
    const translations = getTranslation(currentLang);
    document.querySelector('h1').textContent = translations.welcome;
    document.querySelector('p').textContent = translations.description;
}

// Call updateContent to set initial content
updateContent();

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    updateContent();
}

// Example usage: changeLanguage('ny'); // Change to Nyanja
