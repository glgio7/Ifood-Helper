Ifood Helper

REQUISITOS FUNCIONAIS:

- Usuários

- Integração com API de Geolocalização. - Adicionado!
- O usuario poderá ou não, compartilhar sua localização atual. - Adicionado!
- O usuario deverá realizar cadastro para uso da plataforma. - Adicionado!
- O usuario terá uma pontuação mediante a interação com app.

- Marcadores

- Os marcadores serão agrupados quando o zoom do mapa for diminuídos, marcando a quantidade de alertas na área agrupada. - Adicionado!
- Cada marcador será obrigatóriamente associado a um usuário. - Adicionado!
- Um marcador informa o nome do criador, horário criado e o tipo de alerta, com um comentário. - Adicionado!

- Um marcador terá 2 opções de avaliações:
- Like - Somará 1 ponto ao score do usuário.
- Dislike - Somará um ponto a pontuação de dislikes do marcador, ao atingir 3 dislikes o marcador será excluído da lista.

  
- Os tipos de alertas a serem adicionadas serão: - Adicionado!

-> área de risco<br/>
-> baixa iluminação<br/>
-> buracos na pista<br/>
-> estabelecimentos com alta demanda<br/>
-> diversos (outros alertas)

REQUISITOS NÃO-FUNCIONAIS:

- Monorepo | dividido em client e server.
- API Rest.
- JsonWebToken para persistência de login.
- Bcrypt para criptografia de senhas dos usuários.
- MongoDB para cadastro de usuario, marcadores e demais informações<br/>

-> possibilidade de migração para PostgreSQL mediante necessidade

UX/UI:

- A interface será baseada no aplicativo Ifood para Entregadores, visto que é o aplicativo de delivery mais utilizado.

TESTES:

- API desenvolvida em TDD, onde é utilizada a biblioteca Vitest para maior desempenho e realização de testes como criação de objetos e testes de rotas.
