document.addEventListener("DOMContentLoaded", function() {
    var x = document.getElementById("entername");

    /* 
        var btn = document.getElementById("search1");
        var xhttp;

        btn.addEventListener('click',
            function(e) {

                e.preventDefault();
                var xhttp = new XMLHttpRequest();

                var url = "http://localhost:8080/superheroes.php";
                /*http://localhost/info2180-lab/superheroes.php
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


            }); */
    /* document.getElementById("entername").addEventListener("keyup", showHint(this.value));

    function showHint(str) {

        //document.getElementById("results").innerHTML = x;
    }
    btn2 = document.getElementById("btn2");

    btn2.addEventListener('click',
        function(e) {
            e.preventDefault();

            if (x.value.length == 0) {
                alert("Nothing")
                    //document.getElementById("results").innerHTML = "Nothing submitted"
            } else {
                var http2 = new XMLHttpRequest();
                http2.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        // document.getElementById("results").innerHTML = http2.responseText;
                        alert(http2.responseText)
                    }
                };
                http2.open("POST", "http://localhost:8080/superheroes.php?", true);
                http2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                http2.send("Hi");

            }
        }); */

    btn2 = document.getElementById("btn2");
    btn2.addEventListener('click',
        function(e) {
            e.preventDefault()
                /*    var data = new FormData();
                   data.append('name', document.getElementById("entername").value)*/
            var name = document.getElementById("entername").value;
            var data = "name = " + name;
            if (name.length == 0) {
                document.getElementById("results").innerHTML = this.responseText;
            } else {
                document.getElementById("results").innerHTML = this.responseText;
            }
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", "http://localhost:8080/superheroes.php", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.onreadystatechange = function() {
                if (this.readyState === 4 || this.status === 200) {
                    document.getElementById("results").innerHTML = this.responseText;
                }
            };
            xmlhttp.send(data);


        });
});