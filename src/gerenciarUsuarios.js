const usuarios = ['ana', 'maria', 'joana', 'carla'];

function retornarUsuarios() {
    return usuarios;
}

function adicionarUsuarios(nome) {
    usuarios.push(nome)
}

module.exports = {
    retornarUsuarios, adicionarUsuarios
}