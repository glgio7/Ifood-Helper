import * as S from "./styles";

const About = () => {
	return (
		<S.About>
			<img src="/images/about.svg" alt="Sobre" className="title-image" />
			<h2>Sobre o aplicativo</h2>
			<p>
				O Ifood Helper foi projetado para ajudar você a{" "}
				<strong>aproveitar ao máximo</strong> sua experiência com o iFood.
				Queremos tornar sua jornada mais segura e conveniente, fornecendo
				informações úteis sobre sua localização e alertando sobre possíveis
				problemas nas áreas ao seu redor. Aqui está o que você precisa saber
				sobre o nosso aplicativo:
			</p>
			<p>
				A <strong>interface</strong> do Ifood Helper foi inspirada no aplicativo
				iFood para Entregadores, um dos aplicativos de delivery mais utilizados.
				Isso torna a navegação familiar e intuitiva, facilitando o uso do nosso
				aplicativo.
			</p>
			<h3>Funcionalidades</h3>
			<p>
				<strong>Integração com API de Geolocalização:</strong> Nossa integração
				com a API de Geolocalização permite que você compartilhe sua localização
				com o aplicativo. Isso nos ajuda a fornecer alertas e informações
				relevantes para a sua área.
			</p>
			<p>
				<strong>Adicionar marcadores:</strong> Mesmo que você já não esteja mais
				em uma determinada localização, você ainda pode adicionar marcadores
				para alertar outros usuários sobre possíveis problemas. Queremos criar
				uma comunidade colaborativa onde todos possam contribuir para a
				segurança e o bem-estar uns dos outros.
			</p>
			<p>
				<strong>Pontuação de interação:</strong> Reconhecemos e valorizamos sua
				interação com o aplicativo. Por meio de sua participação ativa, você
				ganhará pontos, incentivando uma comunidade engajada e responsável.
			</p>
			<p>
				<strong>Agrupamento de marcadores:</strong> Quando você diminuir o zoom
				no mapa, os marcadores serão agrupados, indicando a quantidade de
				alertas naquela área específica. Isso permite que você tenha uma visão
				geral dos problemas relatados.
			</p>
			<p>
				<strong>Tipos de alertas:</strong> Inicialmente, os tipos de alertas
				disponíveis são: área de risco, baixa iluminação, buracos na pista e
				estabelecimentos com alta demanda. Essas informações iniciais nos
				ajudarão a criar uma base sólida para a comunidade.
			</p>
			<h3>Considerações do criador</h3>
			<p>
				Espero que você aproveite ao máximo o Ifood Helper e que ele se torne um
				aliado indispensável em suas experiências com o iFood. Me comprometo a
				fornecer um serviço confiável e útil para a comunidade. Se você tiver
				alguma dúvida ou sugestão, não hesite em entrar em contato.
			</p>
			<p>
				<strong> Meus agradecimentos por juntar-se ao Ifood Helper!</strong>
			</p>
		</S.About>
	);
};

export default About;
