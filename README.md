Ifood Helper

REQUISITOS FUNCIONAIS:

- Integração com API de Geolocalização. - Adicionado!
- O usuario deverá compartilhar a localização. - Adicionado!
- O usuário poderá adicionar um marcador mesmo que já não esteja mais na localização do alera. - Adicionado!
- O usuario terá uma pontuação mediante a interação com app.
- O usuario deverá realizar cadastro para uso da plataforma.
- Os marcadores serão agrupados quando o zoom do mapa for diminuídos, marcando a quantidade de alertas na área agrupada. - Adicionado!
- Cada marcador será obrigatóriamente associado a um usuário, mas um usuário poderá adicionar vários alertas.
- As informações inciais a serem adicionadas serão:

-> área de risco<br/>
-> baixa iluminação<br/>
-> buracos na pista<br/>
-> estabelecimentos com alta demanda<br/>

REQUISITOS NÃO-FUNCIONAIS:

- Monorepo | dividido em client e server
- API Rest
- MongoDB para cadastro de usuario e demais informações<br/>

-> possibilidade de migração para PostgreSQL mediante necessidade

UX/UI:

- A interface será baseada no aplicativo Ifood para Entregadores, visto que é o aplicativo de delivery mais utilizado.

TESTES:

- Será utilizado a biblioteca Vitest para automação de teste unitários no back-end.
