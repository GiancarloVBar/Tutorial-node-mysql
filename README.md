1)
### npm init
para iniciar o projeto em node (criar o arquivo package)

2)
### npm install express
para instalar o gerenciador express de rotas e requisições

3) criar app.js - raiz do projeto
app.METHOD(PATH, HANDLER)
4)
### node app.js
para executar o projeto

5) http://localhost:8080 - para acessar o projeto no navegador
--
para não precisar ficar finalizando o servidor e reiniciando manualmente
--
6)
### npm install -g nodemon

7)
### npm install --save-dev nodemon

ALTERNATIVO >>>>>>> npm install nodemon -D >>> alterar, no app.js
"main": "app.js",
  "scripts": {
    "start": "nodemon ./bin/www"

--

8) criar a pasta models + db.js

9)
### npm install --save sequelize
instala o squelize para conversar com o db

10)
### npm install --save mysql2
driver para o DB

11) no arquivo db.js
### const { Sequelize } = require('sequelize')
### const sequelize = new Sequelize('database', 'username', 'password', {
###    host: 'localhost',
###    dialect: 'mysql'
### })

12) exportar sequelize

13) importar no app.js

14) usar a função authenticate para informar que a conexão foi estabelecida
### .then
para caso se conecte
### .catch
para caso não conecte

15) para cadastro, adicionar POST no app.js (não há acesso pelo navegador)

16) fazer o cadastro usando o insomnia

17) Para criar um registro, preciso criar uma models User.js
### const User = sequelize.define('User', {
###    //Model attributes are defined here
###    firstName: {
###        type: DataTypes.STRING,
###        allowNull: false
###    },
###    lastName: {
###        type: DataTypes.STRING
###    }, {
###        // Other model options go here
###    }
### })

18) acrescentar a models User.js no app.js

19) adicionar a Models User no app.js e executaar o servidor

20) verificar se foram criadas as tabelas - verificado - comentar User.sync()

21) Vamos tentar cadastrar usando o Insomnia, rota post
Para receber os dados corretamente, precisamos dizer ao app.js que vamos
receber um objeto JSON
### app.use(express.json())
e na rota post
### console.log(req.body)

22) com os dados obtidos corretamente, podemos cadastrar no DB
OBS: só posso usar o AWAIT se acrescentar o ASYNC na função de cadastro

23) Verificar no workbench se foi cadastrado - cadastrado com sucesso

