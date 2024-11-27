import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  public arrayPortfolio = signal([
    {
      src: 'assets/portifolio1.jpg',
      alt: 'imagem de fundo padrão do projeto',
      href: 'https://github.com/Caco0/PUCPR-Sistema-de-gest-o-de-Dados-Acad-micos-',
      target: 'blank',
      rel: 'noreferrer noopener',
      div: {
        h4: 'Sis. de Gestão de Dados Acadêmico',
        p: 'Implementação de estruturas, condicionais if elif else, e estruturas de repetição for e while, funções com retorno e para navegar e manipular dados do sistema, com o avanço nos estudos serão incluídas classes e mais funções no código, afim de deixar o sistema eficiente e com o código com fácil leitura, boas praticas de programação. Volte mais vezes para conferir o andamento do projeto!',
      },
    },
    {
      src: 'assets/portifolio2.jpg',
      alt: 'imagem de fundo padrão do projeto',
      href: 'https://play-store-angular-project-x4s5.vercel.app/',
      target: 'blank',
      rel: 'noreferrer noopener',
      div: {
        h4: 'PlayStation Store Angular',
        p: 'Projeto de estudos de reprodução parcial da loja virtual PlayStation, com significativas mudanças estéticas e de funcionalidades, o projeto utiliza-se do framework Angular para implementação e visa principalmente aplicar na prática o uso do framework. sendo assim o projeto tem a finalidade de demostrador de skill.',
      },
    },
    {
      src: 'assets/portifolio3.jpg',
      alt: 'imagem de fundo padrão do projeto',
      href: 'https://project-buzz-feed.vercel.app/',
      target: 'blank',
      rel: 'noreferrer noopener',
      div: {
        h4: 'BuzzFeed Clone',
        p: 'Projeto de estudos Angular, clone do BuzzFeed com Framework Angular Ts, implementando API mocada',
      },
    },
    //----------------------------------------------------------------
    {
      src: 'assets/portifolio4.jpg',
      alt: 'imagem de fundo padrão do projeto',
      href: 'https://project-buzz-feed.vercel.app/',
      target: 'blank',
      rel: 'noreferrer noopener',
      div: {
        h4: 'Blog Angular',
        p: 'Projeto de estudos Angular, implementando projetos e rotas. este projeto busca implementar o aproveitamento de rotas no angular.',
      },
    },
    //----------------------------------------------------------------
    {
      src: 'assets/portifolio5.jpg',
      alt: 'imagem de fundo padrão do projeto',
      href: 'https://react-project1-ten.vercel.app/',
      target: 'blank',
      rel: 'noreferrer noopener',
      div: {
        h4: 'React Projetc',
        p: 'Neste primeiro projeto React desenvolvo as skills de básicas de react/js como: Componentes de Classe Stateful, State com Arrey e Objetos Lifecycle Methods, Data Fetching, Props, Organização de componentes, Inputs de texto, Fluxos de dados, Componentes State vs Props, Eventos Sintéticos, Padronização Eslint, Prettier, Jest e Testing Library, Mock service Worker',
      },
    },
    {
      src: 'assets/portifolio1.jpg',
      alt: 'imagem de fundo padrão do projeto',
      href: 'https://portifolio-rafael-chi.vercel.app/#portifolio',
      target: 'blank',
      rel: 'noreferrer noopener',
      div: {
        h4: '1º Portfólio HTML CSS',
        p: 'Neste Portfólio faço uso de todas as principais skills adquiridas no decorrer do curso, Html 5, e suas semânticas, CSS e todas as suas técnicas de estilização como grid, flexbox, responsividade, acessibilidade entre outros para a apresentação das minhas habilidades.',
      },
    },
    {
      src: 'assets/portifolio2.jpg',
      alt: 'imagem de fundo padrão do projeto',
      href: 'https://caco0.github.io/Mid/',
      target: 'blank',
      rel: 'noreferrer noopener',
      div: {
        h4: 'Project MID',
        p: 'Este é MID, e neste projeto eu realizo a implementação de códigos em JavaScript para automatização de funções, com programação orientada a objeto para que funções em comum sejam compartilhadas em outras partes do projeto.',
      },
    },
    {
      src: 'assets/portifolio3.jpg',
      alt: 'imagem de fundo padrão do projeto',
      href: 'https://caco0.github.io/projeto-alura-newsletter/',
      target: 'blank',
      rel: 'noreferrer noopener',
      div: {
        h4: 'Newsletter Responsivo',
        p: 'Projeto Newsletter, aqui é feita a utilização de SVGs para deixar o projeto mais atrativo e implementado a responsividade que confere a página características e estilizações diferentes conforme a resolução do dispositivo detectado.',
      },
    },
    {
      src: 'assets/portifolio4.jpg',
      alt: 'imagem de fundo padrão do projeto',
      href: 'https://caco0.github.io/Projeto-SVG-Verao/',
      target: 'blank',
      rel: 'noreferrer noopener',
      div: {
        h4: 'Verão | SVG',
        p: 'O projeto Verão é feita a implementação de SVG para animações na landing page, com a finalidade de adquirir, mais essa habilidade de implementação de tecnologias permitindo uma flexibilização maior nos projetos sem o uso extensivo de JavaScript e imagens muito pesadas.',
      },
    },
    {
      src: 'assets/portifolio5.jpg',
      alt: 'imagem de fundo padrão do projeto',
      href: 'https://caco0.github.io/CSS-Grid-Simplificado/#',
      target: 'blank',
      rel: 'noreferrer noopener',
      div: {
        h4: 'Alura Responsivo',
        p: 'No projeto Alura Responsivo há a implementação da responsividade da página, que se adapta a vários padrões de telas disponíveis no mercado, bem como o reforço de todos os outros conceitos adquiridos anteriormente.',
      },
    },
    {
      src: 'assets/portifolio1.jpg',
      alt: 'imagem de fundo padrão do projeto',
      href: 'https://caco0.github.io/Alurabooks/',
      target: 'blank',
      rel: 'noreferrer noopener',
      div: {
        h4: 'Alurabooks',
        p: 'Com o Alurabooks inicio a implementação de mais funções e marcações mais elaboradas em Html 5, com a semântica mais aperfeiçoada, e também usando de estilização Css mais complexa a fim de aprimorar os conhecimentos no Frontend.',
      },
    },
    {
      src: 'assets/portifolio2.jpg',
      alt: 'imagem de fundo padrão do projeto',
      href: 'https://caco0.github.io/Projetos-de-estudos-Alura-HTML/',
      target: 'blank',
      rel: 'noreferrer noopener',
      div: {
        h4: 'Primeira Página',
        p: 'Este é o primeiro projeto de aplicação web Html e Css, nele é posto em prática a marcação html e o css para a estilização da landing page organizando todo a estética da página apresentada',
      },
    },
  ]);
}
