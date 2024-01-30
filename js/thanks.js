var ul = document.getElementById("links");

ul.addEventListener("click", function(event) {
    if (event.target.tagName === "A") {
        var selectedLink = event.target.innerHTML;
        if (selectedLink === "BACK TO WEBSITE") {
            window.location.href = "index.html";
        }
        event.preventDefault(); // Prevent the default link behavior (navigating to the URL)
    }
});
