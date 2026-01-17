# 🔐 AuthGuard

AuthGuard é um projeto full stack de autenticação desenvolvido com foco em aprendizado e boas práticas, implementando login, registro, logout e proteção de rotas utilizando sessões no backend.

O objetivo do projeto é demonstrar um fluxo real de autenticação, integração entre front-end e back-end e persistência de dados.

---

## 🚀 Funcionalidades

- Cadastro de usuário
- Login com validação de credenciais
- Hash de senha com bcrypt
- Sessão baseada em cookies (backend)
- Proteção de rotas com middleware
- Logout e invalidação da sessão
- Dashboard acessível apenas para usuários autenticados

---

## 🧱 Stack Tecnológica

### Front-end
- Next.js (App Router)
- TypeScript
- Tailwind CSS

### Back-end
- API Routes (Next.js)
- Node.js
- Prisma ORM
- SQLite

---

## 📦 Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

- Node.js (v18 ou superior)
- npm ou yarn

---

## ⚙️ Como rodar o projeto localmente

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/ronizera/authguard
cd authguard

2️⃣ Instale as dependências

npm install ou yarn install

3️⃣ Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto:

DATABASE_URL="file:./dev.db"

4️⃣ Gere o banco de dados
npx prisma migrate dev

Isso irá:

Criar o banco SQLite

Aplicar as migrations

Gerar o Prisma Client

5️⃣ Rode o projeto
npm run dev


A aplicação estará disponível em:

http://localhost:3000