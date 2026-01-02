// Centralized translation logic
document.addEventListener('DOMContentLoaded', () => {


    // 2. Translation Functions
    async function loadAndTranslate(lang) {
        try {
            const response = await fetch(`locales/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Could not fetch ${lang}.json. Status: ${response.status}`);
            }
            const translations = await response.json();

            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[key]) {
                    // Handle title tag separately as it doesn't have textContent
                    if (element.tagName === 'TITLE') {
                        document.title = translations[key];
                    } else {
                        element.textContent = translations[key];
                    }
                }
            });
            
            // Update the page's lang attribute for accessibility and SEO
            document.documentElement.lang = lang;

        } catch (error) {
            console.error(`Error loading or applying translations for '${lang}':`, error);
        }
    }

    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        loadAndTranslate(lang);
    }

    // 3. Initial Load Logic
    // Get language from storage or default to Turkish
    const savedLang = localStorage.getItem('language') || 'tr'; 
    setLanguage(savedLang);
});