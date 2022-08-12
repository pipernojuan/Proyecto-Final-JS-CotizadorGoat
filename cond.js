const swa = () => {
    Swal.fire({
        title: '¡No te olvides!',
        text: 'Seleccioná una Divisa y una Cripto para poder cotizar',
        icon: 'warning',
        timer: 8000,
        timerProgressBar: true,
    })
}

function swalert(e){
    console.log
    e.preventDefault();
    // objBusqueda está en app.js: 
    const {moneda, criptomoneda} = objBusqueda;
    if (moneda === '' || criptomoneda === '') {
        swa ();
    }
    else{consultarAPI(moneda, criptomoneda);
    //console.log(moneda);
    //console.log(criptomoneda);
    }
}