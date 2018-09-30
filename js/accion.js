    $(function () {
        $("#boton").on("click", function (e) {
            var jqxhr = $.ajax({
                url: 'https://randomuser.me/api/',
                method: "get",
                dataType: "json",
                data: {results: 50}
            });

            jqxhr
                .done(function (data) {
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
                })
                .fail(function (jxhr, textStatus) {
                    console.log(textStatus);
                })
        })

    })