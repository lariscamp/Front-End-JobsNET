Este projeto foi desenvolvido com React.JS para a JobsNET com a Gama Academy

O projeto consiste no desenvolvimento uma página para atração de profissionais para conectar às oportunidades de emprego.

O projeto possuía duas fases:

Fase 1- Front-End: 
a) criação da Página;
b) apresentação da estrutura do projeto no github;
c) landing page com formulário para preenchimento de candidatura; e 
d) hospedagem da página
Obs.: o layout do formulário não possuía uma regra para o seu desenvolvimento.

Fase 2 - Back-End: 
Domínio - Modelagem de Dados:
 a) Cadastro de candidatos com os campos: nome, data de nascimento, estado civil, gênero, cargo,
    e-mail, celular, telefone fixo, endereço, bairro, cidade, estado, cep, RG, CPF, se possui veículo e CNH.

b) Para a conclusão do cadastro, consultar o seu endereço pelo CEP informado (Consultar a API VIA Cep) 
NOTA: O sistema deverá utilizar de algum client API para buscar um endereço do serviço via cep conforme link: https://viacep.com.br/ws/{SEU_CEP}/json/

As Regras de Negócio eram: 
-> Não podem haver 2 cadastros de candidatos com o mesmo CPF
-> Todo candidato precisará preencher os campos: CPF, Nome, Data de Nascimento, CEP, Endereço, Número, Bairro, -> Cidade, Email, Profissão e Celular

Integração entre a Página de Formulário e o Back-end:
-> Disponibilizar uma API Rest com a funcionalidade de cadastro de candidatos armazenando em um banco de dados.
-> Disponibilizar a documentação dos recursos Web Services REST - Uso do Swagger.

O repositório Back-End se encontra em: 
https://github.com/lariscamp/Back-End-JobsNet
