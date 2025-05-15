// localization.js

const translations = {
    en: {
        welcome: "Welcome to ZEDULEARN",
        description: "This is a simple website built from scratch."
    },
    ny: {
        welcome: "Takulandirani ku ZEDULEARN",
        description: "Iyi ndi webusaiti yosavuta yomwe yapangidwa kuchokera pansi."
    },
    // Add more languages as needed
};

function getTranslation(lang) {
    return translations[lang] || translations.en; // Default to English
}
