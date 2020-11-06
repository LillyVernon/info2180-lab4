document.addEventListener("DOMContentLoaded", function() {


    var btn = document.getElementById("search1");
    var xhttp;

    btn.addEventListener('click',
        function(e) {

            e.preventDefault();
            var xhttp = new XMLHttpRequest();

            var url = "http://localhost:8080/superheroes.php";
            /*http://localhost/info2180-lab/superheroes.php*/
            xhttp.onreadystatechange = loadButton;
            xhttp.open("GET", url);

            xhttp.send();



            function loadButton() {
                if (xhttp.readyState === XMLHttpRequest.DONE) {
                    if (xhttp.status === 200) {
                        var response = xhttp.getResponseHeader;
                        alert(this.response);





                    } else {
                        alert('There was a problem with the request.');
                    }
                }
            }

        });
});