function name_loader(ruta, id,name_id ,callback){
    fetch(ruta).then((response) => {
        return response.text();
    })
        .then((text)=>{
            document.getElementById(id).innerHTML = text;
            if(callback){
                callback();
            }
            fetch("../JSON_Files/users.json")
                .then((file) => file.json()).then((users) => {
                const usuario = users.find(u => u.id === name_id);
                console.log(usuario.nombre);
            }).catch(error=>console.error(error));
        })
        .catch(error=>console.error(error));

}