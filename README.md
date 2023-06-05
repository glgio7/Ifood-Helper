Ifood Helper

REQUISITOS FUNCIONAIS:

- O usuario terá uma pontuação mediante a interação com app.
- O usuario terá acesso há informações no raio de 5km da sua localização atual.
- O usuario deverá compartilhar a localização.
- Integração com API de Geolocalização.
- O usuario realizar cadastro para uso da plataforma.
- As informações inciais a serem adicionadas serão:

-> área de risco<br/>
-> baixa iluminação<br/>
-> buracos na pista<br/>
-> estabelecimentos com alta demanda<br/>

REQUISITOS NÃO-FUNCIONAIS:

- Monorepo | dividido em client e server
- Next.js para SSR e otimizacao de performance
- API Rest
- MongoDB para cadastro de usuario e demais informações<br/>

-> possibilidade de migração para PostgreSQL mediante necessidade

UX/UI:

- A interface será baseada no aplicativo Ifood para Entregadores, visto que é o aplicativo de delivery mais utilizado.

TESTES:

- Será utilizado a biblioteca Vitest para automação de teste unitários no back-end.
