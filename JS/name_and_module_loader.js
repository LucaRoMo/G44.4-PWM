function name_and_module_loader(ruta, id, clase, texto , callback){
    fetch(ruta).then((file) => {
        return file.text()
    }).then((text) => {
        document.getElementById(id).innerHTML = text;
        document.querySelector("." + clase).textContent = texto;
        if(callback){
            callback();
        }
    })

}