/* eslint-disable @next/next/no-img-element */
import { DownloadSimple, User } from 'phosphor-react'
import { Container, Title } from '../../styles/styles'
import { ButtonPrimary } from '../../styles/styles'
import { AboutContainer } from './styles'

export function About() {
  return (
    <Container id="about">
      <Title>
        Sobre
        <span>
          <User /> About
        </span>
      </Title>
      <AboutContainer>
        <div className="AboutImg">
          <img
            className="AboutImg"
            src="/MariaEduarda1.webp"
            alt="Imagem de perfil Eduarda"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <p>
              Sou desenvolvedora Full Stack e estou cursando 
              Sistemas de Informação na PUC Minas.
            </p>
            <p>
              Meu interesse e primeiro contato com desenvolvimento web começou
              em 2021, com a criação de um sistema feito em PHP, Laravel, JavaScript, Html, e Css.
            </p>
            <p>
              Atualmente estou estudando e desenvolvendo projetos web, de modo a
              ampliar meus conhecimentos e assim aprimorar ainda mais as
              habilidades que possuo.
            </p>
          </div>
          <a href="/pdf/Eduarda-Curriculo.pdf" download>
            <ButtonPrimary>
              <b>Download CV</b> <DownloadSimple weight="bold" />
            </ButtonPrimary>
          </a>
        </div>
      </AboutContainer>
    </Container>
  )
}
