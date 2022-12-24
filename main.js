//Simulando o que aqui seria o banco de dados com os usuários do sistema com um array
var Usuarios = [
    //se tivesse mais usuários eu colocaria mais, mas no escopo pediu só um
    {
        usuario: "vendemmia",
        senha: "123123123"
    },

]

//lembrando que nenhuma validação/autenticação é boa fazer pelo javascript (cliente) por ser de facil acesso a alteração pelo navegador
//o aconselhado é utilizar mesmo linguagens do back-end do lado do servidor para cuidar desse assunto(PHP,Java,ASP) para maior segurança
//esse código é apenas uma base da logica que seria usada no Javascript, mas que em outras linguagens entraria toda a parte de segurança e validação como por exemplo o uso de Variaveis de seção para controlar a autenticação e bloquear também o acesso direto a pagina sem logar

function logado() {
    //utilizando do SessionStorage apenas para simular uma variavel de sessão para validação 
    if (!sessionStorage.getItem("logar")) {
        Swal.fire({
            icon: 'error',
            title: 'Não é possivel visualizar essa página',
            text: 'Faça o login para ter acesso a essa página',
            footer: '<a href="index.html">Ir para a página de login</a>'
        })
        document.getElementById("contLista").style.display = "none";
    }
}
function validacao() {
    var usuario = document.getElementById('Usuario').value
    var senha = document.getElementById('Senha').value

    for (var i = 0; i < Usuarios.length; i++) {
        //Aqui chamaria a variavel de sessão responsavel por receber o usuario e a senha e validar com oq foi recebido pela consulta do banco()
        if (usuario == Usuarios[i].usuario && senha == Usuarios[i].senha) {
            sessionStorage.setItem("logar", "logou");
            //redirecionando para a lista se a validação for correta
            location = ("listaUsuarios.html");
            return
        }
    }
    document.getElementById("mensagemErro").style.display = "block";
}