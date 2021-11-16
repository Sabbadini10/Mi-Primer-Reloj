$(function () {
    var actualizarHora = function () {
        var fecha = new Date(),
            hora = fecha.getHours(),
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            anio = fecha.getFullYear(),
            ampm;

        var $pHoras = $("#horas"),
            $pSegundos = $("#segundos"),
            $pMinutos = $("#minutos"),
            $pAMPM = $("#ampm"),
            $pDiaSemana = $("#diaSemana"),
            $pDia = $("#dia"),
            $pMes = $("#mes"),
            $pAnio = $("#anio");
        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        $pDiaSemana.text(semana[diaSemana]);
        $pDia.text(dia);
        $pMes.text(meses[mes]);
        $pAnio.text(anio);
        if (hora >= 12) {
            hora = hora - 12;
            ampm = "PM";
        } else {
            ampm = "AM";
        }
        if (hora == 0) {
            hora = 12;
        }
        if (hora < 10) { $pHoras.text("0" + hora) } else { $pHoras.text(hora) };
        if (minutos < 10) { $pMinutos.text("0" + minutos) } else { $pMinutos.text(minutos) };
        if (segundos < 10) { $pSegundos.text("0" + segundos) } else { $pSegundos.text(segundos) };
        $pAMPM.text(ampm);

    };


    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
});


function meses() {
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = "domingo";
    weekday[1] = "lunes";
    weekday[2] = "martes";
    weekday[3] = "miercoles";
    weekday[4] = "jueves";
    weekday[5] = "viernes";
    weekday[6] = "sabado";

    let numeroDia = weekday[d.getDay()];
    if (numeroDia === 'domingo') {
        return 'Domingo'
    } else if (numeroDia === 'lunes') {
        return 'Lunes'
    }
    else if (numeroDia === 'martes') {
        return 'Martes'
    } else if (numeroDia === 'miercoles') {
        return 'Miercoles'
    } else if (numeroDia === 'jueves') {
        return 'Jueves'
    } if (numeroDia === 6) {
        return 'Viernes'
    } else return 'Sabado'
}
meses();
