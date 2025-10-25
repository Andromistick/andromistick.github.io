// main.js file for handling interactive features and dynamic behaviors of the privacy policy site

document.addEventListener('DOMContentLoaded', () => {
    // Initialize consent banner
    const consentBanner = document.getElementById('consent-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const declineButton = document.getElementById('decline-cookies');

    // Check if consent has already been given
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        consentBanner.style.display = 'none';
    } else {
        consentBanner.style.display = 'block';
    }

    // Event listener for accept button
    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        consentBanner.style.display = 'none';
    });

    // Event listener for decline button
    declineButton.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        consentBanner.style.display = 'none';
    });
});