import React from 'react'
import PrincipalContent from '../../Components/PrincipalContent';
import "./style.css";
import publications from "../../backend/mocked";

export default function HomePage () {

    console.log(publications);

	return (
        <div className='HomeStyle'>     
            {
                publications.map((item) => {
                    return <PrincipalContent key={item.id} id={item.id} title={item.title} content={item.content} src={item.url} alt={item.alt} />
                })
            }           
            {/* <PrincipalContent title="Programação" content="Existem diversos cursos onlines onde você pode encontrar material. São cursos que você consegue aprender o básico da programação com Python como tipos de variáveis, como escrever funções, etc..." src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="código no vscode" />
            <PrincipalContent title="Mobile Apps" content="A mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or..." src="https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="mão segurando um smartphone" />
            <PrincipalContent title="Criando seu site" content="Crie o seu próprio site gratuito! Pode criar um site incrível com a Webnode em alguns minutos. Junte-se..." src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="código em um notebook" />
            <PrincipalContent title="Melhores Temas" content="Está à procura de temas VS Code para melhorar a sua produtividade? Então este artigo é para você!" src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dupla de mulheres analisando código" />
            <PrincipalContent title="HTML para leigos" content="HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores..." src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="oculos próximo a um notebook focando o na tela" /> */}
        </div>
	)
}