enum Trabalho {
    contadora,
    recepcionista,
    advogado,
    faxineiro
}

type funcionario = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoaUm: funcionario = {
    nome: "maria",
    idade: 30,
    profissao: Trabalho.contadora
};

let pessoaDois: funcionario  = {
    nome: "roberto",
    idade: 27,
    profissao: Trabalho.advogado
};

let pessoaTres = {
    nome: "laura",
    idade: 18,
    profissao: Trabalho.recepcionista
};

let pessoaQuatro = {
    nome: "carlos",
    idade: 35,
    profissao: Trabalho.faxineiro
}