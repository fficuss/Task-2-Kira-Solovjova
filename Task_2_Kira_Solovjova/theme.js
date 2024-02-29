document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");
    const rejectCookiesButton = document.getElementById("reject-cookies");

    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (!cookiesAccepted) {
        cookieBanner.style.display = "block";
    }

    acceptCookiesButton.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", true);
        cookieBanner.style.display = "none";
    });

    rejectCookiesButton.addEventListener("click", function() {
        cookieBanner.style.display = "none";
    });
});