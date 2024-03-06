function includeHTML() {
    var headerElement = document.querySelector('header[include-html]');
    var footerElement = document.querySelector('footer[include-html]');

    if (headerElement) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                headerElement.innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", headerElement.getAttribute('include-html'), true);
        xhttp.send();
    }

    if (footerElement) {
        var xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                footerElement.innerHTML = this.responseText;
            }
        };
        xhttp2.open("GET", footerElement.getAttribute('include-html'), true);
        xhttp2.send();
    }
}