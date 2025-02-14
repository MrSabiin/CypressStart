#language: pt
Funcionalidade: Listagem

    Como usuário, desejo acessar uma listagem
    Para que eu possa visualizar meus dados cadastrados
    
    Cenário: Listagem sem registros
        Dado que o site não possui registros
        Quando  acessar a listagem
        Então devo visualizar a listagem vazia

    Cenário: Listagem com apenas um registro
        Dado que o site possui apenas um registro
        Quando acesso a listagem 
        Então Devo visualizar apenas um registro  