function update(carrera){
    var filename, titulo, orientaciones, plan
    var id = '#'+carrera
    switch(carrera){
        case 'informatica':
            orientaciones = true
            filename = 'data/informatica-1986.csv'
            titulo = 'Ingeniería en Informática'
            plan = 'Plan 1986'
            break
        case 'sistemas':
            orientaciones = false
            filename = 'data/sistemas-1986.csv'
            titulo = 'Licenciatura en Análisis de Sistemas'
            plan = 'Plan 1986'
            break
        case 'quimica':
            orientaciones = false
            filename = 'data/quimica-1986.csv'
            titulo = 'Ingeniería Química'
            plan = 'Plan 1986'
            break
        case 'civil':
            orientaciones = false
            filename = 'data/civil-2009.csv'
            titulo = 'Ingeniería Civil'
            plan = 'Plan 2009'
            break
        case 'alimentos':
            orientaciones = false
            filename = 'data/alimentos-2000.csv'
            titulo = 'Ingeniería de Alimentos'
            plan = 'Plan 2000'
            break
        case 'electricista':
            orientaciones = false
            filename = 'data/electricista-2009.csv'
            titulo = 'Ingeniería Electricista'
            plan = 'Plan 2009'
            break
        case 'naval':
            orientaciones = false
            filename = 'data/naval-1986.csv'
            titulo = 'Ingeniería Naval y Mecánica'
            plan = 'Plan 1986'
            break
        case 'mecanica':
            orientaciones = true
            filename = 'data/mecanica-1986.csv'
            titulo = 'Ingeniería Mecánica '
            plan = 'Plan 1986'
            break
        case 'petroleo':
            orientaciones = false
            filename = 'data/petroleo-2015.csv'
            titulo = 'Ingeniería en Petróleo'
            plan = 'Plan 2015'
            break
        case 'agrimensura':
            orientaciones = false
            filename = 'data/agrimensura-2000.csv'
            titulo = 'Ingeniería en Argimensura'
            plan = 'Plan 2000'
            break
    }

    fiubamap(filename)
    $("#carrera-actual").text(titulo + ' | ' + plan)
    $("#carreras .active").removeClass('active')
    $(id).addClass('active')
    document.title = 'FIUBA Map | ' + titulo
    displayOrientaciones(orientaciones)
}

function displayOrientaciones(show){
    if (show) {$("#orientaciones-hidden").show()}
    else {$("#orientaciones-hidden").hide()}
}

function fiubamap(file){
    $.ajax({
        url: file,
        dataType: 'text',
        success: function(data, jqXHR, textStatus) {graphFromCSV(data)}
    })
}