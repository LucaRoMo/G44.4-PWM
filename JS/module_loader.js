function module_loader(file, id, callback){
    fetch(file).then((response) => {
        return response.text();
    })
        .then((text)=>{
            document.getElementById(id).innerHTML = text;
            if(callback){
                callback();
            }
        })
        .catch(error=>console.error(error));
}