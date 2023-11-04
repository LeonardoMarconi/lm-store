# LM Store 🛍️🛒

## 💻 Projeto

A LM Store é um e-commerce utilizando tecnologias do Next.js.
Esse foi construido e explicado durante as lives realizadas pelo [Felipe Rocha na Full Stack Week](https://github.com/felipemotarocha/fullstackweek-store). 

## Tecnologias Utilizadas 🚀

 - React: Uma biblioteca JavaScript popular para construir interfaces de usuário interativas.
 - Next.js 13: Um framework React que oferece renderização do lado do servidor (SSR), geração estática (SSG), entre muitos outros recursos.
 - Next Auth: Biblioteca para autenticação de usuários com OAuth.
 - Postgres: Um sistema de gerenciamento de banco de dados relacional.
 - Prisma: Um ORM (Object-Relational Mapping) para Node.js e TypeScript.
 - shadcn/ui: Uma biblioteca de componentes de IU reutilizáveis e estilizáveis.
 - Tailwind CSS: Um framework CSS que oferece várias classes para utilização já pré-estilizadas.
 - API do Stripe: Uma API de pagamento popular para processar pagamentos online de forma segura.

## Funcionalidades 📦

 - Login com o Google: Permitimos que os usuários façam login usando suas contas do Google para uma experiência de autenticação simplificada.
 - Navegação por Categorias: Os usuários podem explorar produtos por categorias, facilitando a busca e a compra.
 - Descontos em Produtos: Alguns produtos podem ter descontos especiais, permitindo aos usuários economizar em suas compras.
 - Gerenciamento do Carrinho de Compras: Os usuários podem adicionar produtos ao seu carrinho de compras, remover produtos e também modificar a quantidade de um produto no carrinho de compras conforme necessário.
 - Pagamento do Pedido com a API do Stripe: Oferecemos uma experiência segura de pagamento online com a integração da API do Stripe, incluindo o uso de webhooks para processar eventos relacionados ao pagamento. 
 - Os usuários podem concluir seus pedidos com facilidade e segurança.
 - Os usuários podem ver os pedidos realizados, bem como o endereço de entrega.

## Novas funcionalidades que serão implementadas no futuro 🧭

 - Dashboard e todo workflow administrativo do e-commerce ( Cadastro de produtos, status do pedido, gestão de clientes, etc).
 - Cálculo de frete apartir do CEP do usuário.
 - Gestão do endereço de entrega antes do envio da mercadoria.
 - Refatoração e mehoria em alguns pontos do código.

## Executando localmente 🌎

Primeiro, rode o server de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Será carregado o sistema neste endereço: [http://localhost:3000](http://localhost:3000).



