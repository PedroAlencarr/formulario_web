# Projeto de Exemplo com Flask e Frontend Dinâmico
Este projeto é uma aplicação web que utiliza Flask para servir um frontend dinâmico. O frontend é atualizado com dados de um arquivo JSON e uma API externa. O projeto inclui funcionalidades de navegação, exibição de conteúdo principal, formulários de contato e uma lista de usuários obtida de uma API.

## Estrutura do Projeto
* app.py: Aplicação Flask que serve o conteúdo estático e fornece uma API para obter dados de usuários.
### - templates
* index.html: Página principal da aplicação que contém a estrutura HTML da aplicação.
### - static
#### -- styles
* styles.css: Arquivo de estilos CSS que define a aparência da aplicação.
#### -- js
* scripts.js: Arquivo JavaScript que carrega e manipula o conteúdo dinâmico da página.
#### -- images
* imagens utilizafas na aplicação.

## Instalação
1. Clone o repositório:

```bash
git clone <https://github.com/PedroAlencarr/formulario_web>
cd <formulario web>
Crie e ative um ambiente virtual:
```
2. Crie e ative um ambiente virtual:
```bash
python -m venv venv
source venv/bin/activate  # No Windows use `venv\Scripts\activate`
```
3. Instale as dependências:

```bash
pip install -r requirements.txt
```
4. Inicie a aplicação Flask:

```bash
python app.py
```
A aplicação estará disponível em http://localhost:5000.

## Arquitetura do Projeto

### Frontend
* #### HTML (index.html):

    * Define a estrutura da página.
Inclui elementos como cabeçalho, navegação, conteúdo principal, formulário de contato e lista de usuários.

* #### CSS (styles.css):

    * Define o estilo da aplicação, incluindo a aparência da navegação, cabeçalho, conteúdo principal e formulário.

* #### JavaScript (scripts.js):

    * Carrega o conteúdo do arquivo JSON e atualiza a página dinamicamente.
    Requisita dados de usuários de uma API externa e os exibe na lista de usuários.
    Manipula a interação com o formulário de contato.

* #### Backend (Flask)
     * app.py:
    Define a aplicação Flask e as rotas.
    Serve a página principal (/).
    Fornece uma API (/api/users) que retorna uma lista de usuários obtida de uma API externa (randomuser.me).

### Funcionalidades

* #### Navegação Dinâmica:

    * Atualiza a navegação com base em dados de um arquivo JSON.
    ink "Home" recarrega a página principal.

* #### Conteúdo Dinâmico:

    * Atualiza o cabeçalho, o conteúdo principal e o formulário de contato com dados de um arquivo JSON.

* #### Lista de Usuários:

    * Obtém dados de uma API externa e exibe uma lista de usuários com suas fotos e informações.

* #### Formulário de Contato:

    * Envia dados do formulário e exibe uma mensagem de sucesso.

## Dependências
* Flask
* Flask-Cors
* Requests

## Como Contribuir
1. Faça um Fork do repositório

2. Crie uma branch para sua feature:

```bash
git checkout -b minha-nova-feature
```

3. Faça commit das suas alterações:

```bash
git commit -m 'Adiciona nova feature'
```
4. Push para a branch:

```bash
git push origin minha-nova-feature
```
5. Crie um Pull Request



# Comentário pessoal
**Se fosse de tecnologia de livre uso, eu teria usado React e bibliotecas para animação que poderiam ter deixado a página de um modo mais moderno ainda, mas acredito que fiz um bom trabalho dentro dos meus conhecimentos em javascript e a minha capacidade de ler documentações.**