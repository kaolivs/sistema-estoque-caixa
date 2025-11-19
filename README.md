📦 Sistema de Gestão de Estoque e Caixa

📝 Descrição do Projeto
Este é um sistema web desenvolvido como parte da avaliação de Gerência de Configuração de Software (N2). O objetivo é demonstrar a arquitetura cliente-servidor e a gestão de itens de configuração (ICs) em um ambiente de desenvolvimento Full Stack.

O sistema implementa um Mínimo Produto Viável (MVP) focado no Cadastro e Gestão de Estoque, comprovando a comunicação entre o Frontend e o Backend

Backend: API RESTful construída com Java Spring Boot.

Frontend: Interface de usuário construída com Angular.


Banco de Dados: H2 Database (em memória para desenvolvimento).

⚙️ Tecnologias Utilizadas
Backend

Tecnologia,Versão,Descrição
Java,17+,Linguagem principal.
Spring Boot,3.x,Framework para API REST e injeção de dependência.
Spring Data JPA,-,Persistência de dados e Repositórios.
H2 Database,-,Banco de dados em memória e embutido.
Maven,-,Gerenciamento de dependências (pom.xml).

Frontend
Tecnologia	Versão	Descrição
Angular	16/17	Framework para o lado cliente (Single Page Application).
TypeScript	-	Linguagem de desenvolvimento.
Bootstrap 5	-	
Estilização e design responsivo.

npm	-	Gerenciamento de pacotes (package.json).

🏗️ Estrutura do Repositório

sistema-estoque-caixa/
├── backend/            # Lógica de servidor, API REST (Java/Spring Boot)
├── frontend/           # Interface do usuário (Angular)
├── database/           # Scripts de criação e seeds SQL (para futuras migrations)
└── docs/               # Documentação do projeto (Requisitos, RFCs)

▶️ Como Executar o Sistema (Passo a Passo)

Certifique-se de ter o JDK (Java Development Kit) e o Node.js instalados.

1. Inicializar o Backend (API REST)
O servidor precisa ser iniciado primeiro para que o Frontend possa se conectar.

    1. Abra um terminal e navegue até a pasta backend.

    2. Execute o comando usando o Maven Wrapper:
    .\mvnw spring-boot:run

2. Inicializar o Frontend (Angular)
    1. Abra um segundo terminal e navegue até a pasta frontend.

    2. Instale as dependências (necessário apenas na primeira vez): npm install

    3. Inicie o servidor de desenvolvimento do Angular: npm start

3. Acessar o Sistema

Abra seu navegador no endereço:
http://localhost:4200/

Você poderá interagir com o formulário de Cadastro de Produtos. As requisições HTTP serão enviadas do Frontend (:4200) para o Backend (:8080) para persistir os dados no H2.