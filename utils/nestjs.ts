export const nestjsList = [
    {name: 'Nestjs', seq: 0, passo: 'Crie o projeto e instale essas bibliotecas para começar', desc: 'npm install --save typeorm mysql2 / npm i --save @nestjs/typeorm typeorm / npm install --save class-validator class-transformer', img: './images/nestjs/0.png'},
    {name: 'Nestjs', seq: 1, passo: 'Criando pastas e arquivos da tabela', desc: 'Esse processo é padrão, Cria-se a pasta com o nome da tabela, depois cria-se as 3 pastas e seus respectivos arquivos.', img: './images/nestjs/1.png'},
    {name: 'Nestjs', seq: 2, passo: 'Setando comandos padrões para o main.ts', desc: 'o TZ é para setar o horario padrão, o global é para setar a biblioteca de validationPipe globalmente no app para poder ser usado em qualquer lugar, o terceiro..., o quarto é a porta que irá ficar o link da api, você pode escolher o numero', img: './images/nestjs/2.png'},
    {name: 'Nestjs', seq: 3, passo: 'Deixe o app.module.ts assim', desc: 'Alguma descrição', img: './images/nestjs/3.png'},
    {name: 'Nestjs', seq: 4, passo: 'Coloque esses codigos no post.controller.ts', desc: 'Alguma descrição', img: './images/nestjs/4.png'},
    {name: 'Nestjs', seq: 5, passo: 'Importa o post.controller no produto.module.ts', desc: 'Alguma descrição', img: './images/nestjs/5.png'},
    {name: 'Nestjs', seq: 6, passo: 'Importa o postModule do post.module no app.module.ts', desc: 'Alguma descrição', img: './images/nestjs/6.png'},
    {name: 'Nestjs', seq: 7, passo: 'Passando os metodos dos comandos', desc: 'Passa os metodos de cada comando. O /post do @Controller é o caminho global e inicial como testado no passo 8 no imsomnia.', img: './images/nestjs/7.png'},
    {name: 'Nestjs', seq: 8, passo: 'Testa no Insomnia', desc: 'Alguma descrição', img: './images/nestjs/8.png'},
    {name: 'Nestjs', seq: 9, passo: 'Criando as colunas das tabelas', desc: 'Alguma descrição', img: './images/nestjs/9.png'},
    {name: 'Nestjs', seq: 10, passo: 'Conecta com o banco de dados', desc: 'Alguma descrição', img: './images/nestjs/10.png'},
    {name: 'Nestjs', seq: 11, passo: 'Conectar colunas da tabelas com o BD', desc: 'Alguma descrição', img: './images/nestjs/11.png'},
    {name: 'Nestjs', seq: 11.1, passo: 'Cria o provider para importar o ProdutoService', desc: 'Alguma descrição', img: './images/nestjs/11.1.png'},
    {name: 'Nestjs', seq: 11.2, passo: 'exports TypeOrmModule', desc: 'Alguma descrição', img: './images/nestjs/11.2.png'},
    {name: 'Nestjs', seq: 11.3, passo: 'Importa a Entity para o BD', desc: 'Alguma descrição', img: './images/nestjs/11.3.png'},
    {name: 'Nestjs', seq: 12, passo: 'Passando contructor e codigo do POST', desc: 'descrever o que o constructor faz, etc...', img: './images/nestjs/12.png'},
    {name: 'Nestjs', seq: 13, passo: 'Injetando no BD, puxando constructor e metodo de POST', desc: 'Alguma descrição', img: './images/nestjs/13.png'},
    {name: 'Nestjs', seq: 13.1, passo: 'Inserindo no BD Mysql no Imsonia, POST', desc: 'Populando BD com dados pelo comando do passo 12 e 13', img: './images/nestjs/16.png'},
    {name: 'Nestjs', seq: 13.2, passo: 'Visualisando a tabela com os items no WorkBench', desc: '', img: './images/nestjs/19.png'},
    {name: 'Nestjs', seq: 14, passo: 'Metodo de pegar todos as infos do BD', desc: 'Alguma descrição', img: './images/nestjs/14.png'},
    {name: 'Nestjs', seq: 14.1, passo: 'Testando no Imsonia, GET -> GetAll', desc: 'Pegando todas as infos da API, referente ao passo 14', img: './images/nestjs/17.png'},
    {name: 'Nestjs', seq: 15, passo: 'método de pegar 1 item pelo id', desc: 'Alguma descrição', img: './images/nestjs/15.png'},
    {name: 'Nestjs', seq: 15.1, passo: 'Testando no Imsonia, GET -> GetById', desc: 'Pegando todas as infos da API, referente ao passo 14', img: './images/nestjs/18.png'},
    {name: 'Nestjs', seq: 16, passo: 'Metodo de GET para buscar por titulo', desc: 'Pegando todas as infos da API, referente ao passo 14', img: './images/nestjs/20.png'},
    {name: 'Nestjs', seq: 17, passo: 'Metodo PUT para atualizar um dado', desc: 'Pegando todas as infos da API, referente ao passo 14', img: './images/nestjs/21.png'},
    {name: 'Nestjs', seq: 17, passo: 'Metodo DELETE para deletar um dado', desc: 'Pegando todas as infos da API, referente ao passo 14', img: './images/nestjs/22.png'},
    {name: 'Nestjs', seq: 18, passo: 'Criando as pastas da tabela de Relacionamento', desc: 'Pegando todas as infos da API, referente ao passo 14', img: './images/nestjs/23.png'},
    {name: 'Nestjs', seq: 19, passo: 'Codigo do entity de relacionamento com Relação One to Many', desc: 'Pegando todas as infos da API, referente ao passo 14', img: './images/nestjs/24.png'},
    {name: 'Nestjs', seq: 20, passo: 'Codigo do entity de relacionamento com Relação One to Many', desc: 'Pegando todas as infos da API, referente ao passo 14', img: './images/nestjs/25.png'},
    {name: 'Nestjs', seq: 21, passo: 'Codigo do entity de relacionamento com Relação One to Many', desc: 'Pegando todas as infos da API, referente ao passo 14', img: './images/nestjs/26.png'},
    {name: 'Nestjs', seq: 21, passo: 'Codigo do entity de relacionamento com Relação One to Many', desc: 'Pegando todas as infos da API, referente ao passo 14', img: './images/nestjs/27.png'},
    {name: 'Nestjs', seq: 21, passo: 'Codigo do entity de relacionamento com Relação One to Many', desc: 'Pegando todas as infos da API, referente ao passo 14', img: './images/nestjs/28.png'},
    {name: 'Nestjs', seq: 21, passo: 'Codigo do entity de relacionamento com Relação One to Many', desc: 'Pegando todas as infos da API, referente ao passo 14', img: './images/nestjs/29.png'},
    {name: 'Nestjs', seq: 21, passo: 'Codigo do entity de relacionamento com Relação One to Many', desc: 'Pegando todas as infos da API, referente ao passo 14', img: './images/nestjs/30.png'},
]