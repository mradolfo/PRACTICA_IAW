    $(function () {
        $("#boton").on("click", function (e) {
            var jqxhr = $.ajax({
                url: 'https://randomuser.me/api/',
                method: "get",
                dataType: "json",
                data: {results: 50}
            });

            jqxhr.done(function (data) {
                    $("#boton").hide();
                    var listaUsuarios = data["results"];
                    var texto = "";
                    for (usuario of listaUsuarios) {
                        var nombre = usuario["name"]["first"];
                        var apellido = usuario["name"]["last"];
                        var email = usuario["email"];
                        var localidad = usuario["location"]["city"]
                        var estado = usuario["location"]["state"]
                        var cp = usuario["location"]["postcode"]
                        var calle = usuario["location"]["street"]
                        var imagen = usuario["picture"]["large"];
                        texto="<div class='fila'>";
                        texto+="<figure>";
                        texto += "<img src='" + imagen + "'>";
                        texto+="</figure>";
                        texto+="<div class='texto'>";
                        texto += "<p>"+nombre + " " + apellido + "</p>";
                        texto += "<p>"+email + "</p>";
                        texto += "<p>"+calle + ", " + cp + ", " + localidad + " (" + estado + ")</p>";
                        texto += "</div>";
                        texto+="</div>";
                        $("#contenido").append(texto);
                    }
                    $(".fila").on("click",function (e) {
                        $(this).remove();
                        var jqxhr2 = $.ajax({
                            url: 'https://randomuser.me/api/',
                            method: "get",
                            dataType : "json"
                        });
                        jqxhr2.done(function (datos) {
                            var listaPersonas = data[1];
                            var textu = "";
                            for (personas of listaPersonas){
                                var nombre2 = personas["name"]["first"];
                                var apellido2 = personas["name"]["last"];
                                var email2 = personas["email"];
                                var localidad2 = personas["location"]["city"]
                                var estado2 = personas["location"]["state"]
                                var cp2 = personas["location"]["postcode"]
                                var calle2 = personas["location"]["street"]
                                var imagen2 = personas["picture"]["large"];
                                textu="<div class='fila2'>";
                                textu+="<figure>";
                                textu += "<img src='" + imagen2 + "'>";
                                textu+="</figure>";
                                textu+="<div class='texto2'>";
                                textu += "<p>"+nombre2 + " " + apellido2 + "</p>";
                                textu += "<p>"+email2 + "</p>";
                                textu += "<p>"+calle2 + ", " + cp2 + ", " + localidad2 + " (" + estado2 + ")</p>";
                                textu += "</div>";
                                textu+="</div>";
                                $("#contenido").append(texto);
                            }
                        })
                    })
                })
                .fail(function (jxhr, textStatus) {
                    console.log(textStatus);
                })
        })

    })