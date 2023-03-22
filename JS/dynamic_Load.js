fetch("../JSON_Files/users.json")
    .then(response => response.json())
    .then(data => {
        const usuario = data.usuarios.find(u => u.id === 1);
        console.log(usuario.nombre);
        document.getElementById('elongated_card_user_text').textContent = usuario.nombre;
    })
    .catch(error => console.error(error));