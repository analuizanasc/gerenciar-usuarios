const { adicionarUsuarios, retornarUsuarios } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de gerenciamento de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        adicionarUsuarios({
            nome: 'Zefa',
            email: 'Zefa@email.com'
        })
        const listaUsuarios = retornarUsuarios()
        //expect(listaUsuarios.at(-1).nome).to.equal('Zefa')
        //to.deep.eql - > comparar dois objetos, listas
        //equal -> compara só um valor 
        expect(listaUsuarios.at(-1)).to.eql({
            nome: 'Zefa',
            email: 'Zefa@email.com'
        })
    });
})