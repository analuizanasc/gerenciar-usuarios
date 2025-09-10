const usuarios = [
    {
        nome: 'ana',
        email: 'ana@email.com'
    },
    {
        nome: 'maria',
        email: 'maria@email.com'
    },
    {
        nome: 'joana',
        email: 'joana@email.com'
    },
    {
        nome: 'carla',
        email: 'carla@email.com'
    }
]

function retornarUsuarios() {
    return usuarios;
}

function adicionarUsuarios(usuario) {
    usuarios.push(usuario)
}

module.exports = {
    retornarUsuarios, adicionarUsuarios
}