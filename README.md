# Mestres da Web

Repositório do projeto **[mestres da web](https://mestresdaweb.com.br/)**, feito com **HTML**, **CSS** e **JS**.

Todos os arquivos **.html** se encontram no diretório "**_html** > **public**".

É necessário ter o npm instalado.

Foi utilizado o **express.js** para criar um servidor local, com **nodemon** para monitorar alterações nos arquivos e **dotenv** para armazenar as variáveis de ambiente.



## Como rodar?

Acesse a pasta _html.

```bash
cd _html
```

Crie uma cópia do arquivo "**.env.example**", nomeado como "**.env**".

```bash
cp .env.example .env
```

Instale as dependências.

```bash
npm install
```

Agora é só rodar o projeto.

```bash
npm start
```

Se tudo deu certo, basta acessar o endereço "http://localhost:3000/software" no navegador.

Nota: Se nenhum valor for inserido na variável **PORT**, a aplicação será executada por padrão na porta 3000.