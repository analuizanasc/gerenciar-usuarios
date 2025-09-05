const {adicionarUsuarios, retornarUsuarios} = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe ('Testar as funções de gerenciamento de Usuários', function(){
    it('Validar que posso adicionar um novo nome de usuário na lista', function(){
        adicionarUsuarios('Zefa')
        const listaUsuarios = retornarUsuarios()
        expect(listaUsuarios.at(-1)).to.equal('Zefa')
    })
})