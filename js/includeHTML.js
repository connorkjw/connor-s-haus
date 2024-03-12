document.addEventListener("DOMContentLoaded", function(){
    // 문서준비가 완료된 이후에 동작해야하는 스크립트 작성!!
    includeHTML();
    
});

function includeHTML() {
    var headerElement = document.querySelector('header[include-html]');
    var footerElement = document.querySelector('footer[include-html]');

    if (headerElement) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                headerElement.innerHTML = this.responseText;

                document.getElementsByClassName('menuShow')[0].addEventListener('click', function(){
                    document.getElementsByClassName('full_screen_container')[0].style.display = 'block';
                })
                
                document.getElementById('menuHide').addEventListener('click', function(){
                    document.getElementsByClassName('full_screen_container')[0].style.display = 'none';
                }) 
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

