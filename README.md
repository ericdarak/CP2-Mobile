# 📱 Aplicativo de Autenticação — React Native (Expo)

## 📌 Sobre o projeto

Este projeto foi desenvolvido como parte dos meus estudos em **React Native com Expo**, com foco na construção de aplicações mobile e navegação entre telas.

A aplicação simula um fluxo de autenticação completo, contendo telas de login, cadastro, recuperação de senha e uma tela principal (Home), além de integração com banco de dados.

---

## 🎯 Funcionalidades

* Tela de Login
* Tela de Cadastro
* Tela de Recuperação de Senha
* Tela Home
* Navegação entre telas utilizando Stack Navigation
* Persistência de dados com banco de dados

---

## 🧱 Tecnologias utilizadas

* React Native
* Expo (SDK 54)
* React Navigation
* Firebase (Backend e banco de dados)

---

## 🗄️ Banco de dados

A aplicação utiliza o **Firebase** como backend para persistência de dados.

* Usuários cadastrados são armazenados no banco
* Produtos também são salvos e recuperados do banco de dados
* Comunicação feita via API do Firebase

Essa integração permite simular um ambiente mais próximo de uma aplicação real, com dados persistentes.

---

## 🚀 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/ericdarak/CP2-Mobile.git
```

### 2. Acessar a pasta do projeto

```bash
cd CP2-Mobile
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o projeto

```bash
npx expo start
```

---

## 🧭 Navegação

* Login → Home
* Login → Cadastro
* Login → Recuperação de senha
* Cadastro → Login
* Recuperação → Login
* Home → Logout

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, pratiquei:

* Criação de aplicações mobile com React Native
* Navegação entre telas com React Navigation
* Integração com backend (Firebase)
* Persistência de dados em banco de dados
* Organização de código e estrutura de projeto
* Manipulação de estados com hooks (`useState`)

---

## 🛠️ Problemas enfrentados

### Erro: react-native-screens

Solução:

```bash
npm install react-native-screens@4.16.0 --save-exact
```

---

## 🚧 Melhorias futuras

* Validação de formulários
* Melhorias de UI/UX
* Autenticação mais robusta
* Controle de sessão do usuário
* CRUD completo de produtos

---

## 👨‍💻 Autor

* Professor **Luiz Camilo**
* Aprimorado por **Eric Darakjian**

---
