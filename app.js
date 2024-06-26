document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var searchInput = document.getElementById("searchInput");
    var query = searchInput.value;
    var url = `https://duckduckgo.com/?t=h_&q=${encodeURIComponent(query)}&ia=web`;
    window.location.href = url;
});