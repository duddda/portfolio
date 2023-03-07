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
            src="/Maria.webp"
            alt="Imagem de perfil Eduarda"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <p>
              Sou desenvolvedora Full Stack há 3 anos e graduanda
              em Sistemas de Informação na PUC Minas.
            </p>
            <p>
              Meu interesse e primeiro contato com desenvolvimento web começou
              em 2020, com a criação de um sistema feito em PHP, Laravel, JavaScript, Html, e Css.
            </p>
            <p>
              Atualmente trabalho não só como freelancer desenvolvendo projetos web
              como também no cargo de desenvolvedora full stack em uma empresa privada.
            </p>
          </div>
          <a href="/pdf/MariaEduardaTenório-Curriculo.pdf" download>
            <ButtonPrimary>
              <b>Download CV</b> <DownloadSimple weight="bold" />
            </ButtonPrimary>
          </a>
        </div>
      </AboutContainer>
    </Container>
  )
}
