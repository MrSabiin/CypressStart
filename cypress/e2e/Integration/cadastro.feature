Feature: Cadastro

    Como usuário, desejo realizar um cadastro
    Para que eu possa acessar o sistema

Scenario: Cadastro de usuário no site
    Given que acesso o site
    When informar meus dados
    And Salvar
    Then devo ser cadastrado com sucesso