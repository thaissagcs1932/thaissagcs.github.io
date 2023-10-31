class Usuario{
    constructor(){
        this.nome = '';
        this.idade = 0;
        this.login = '';
        this.senha = '';
    }

    setNome(nome){
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }
    setIdade(idade){
        this.idade = idade;
    }
    getIdade(){
        return this.idade;
    }
    setLogin(login){
        this.login = login;
    }
    getLogin(){
        return this.login;
    }
    setSenha(senha){
        this.senha = senha;
    }
    getSenha(){
        return this.senha;
    }

}