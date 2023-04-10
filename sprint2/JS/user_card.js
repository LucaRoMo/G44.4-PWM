fetch("../JSON_Files/users.json")
    .then(response => response.json())
    .then(data => {
        const usuario = data.usuarios.find(u => u.id === 1);
        console.log(usuario.nombre);
        document.getElementById('card-information-user-table').textContent = usuario.nombre + ' ' + usuario.apellidos + ' v ';
    })
    .catch(error => console.error(error));