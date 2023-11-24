import "../../scss/page.scss";

import { Header } from "../Header";

export const Page = () => {
  return (
    <>
      <Header />
      <main>
        <div className="grid" id="home">
          <section className="section1">
            <img className="main-img" src="../images/main-img.jpg" />
            <div className="introduction">
              <h1>CareBot</h1>
              <p>
                Uma plataforma de saúde inovadora, moderna e centrada no
                paciente, redefinindo a experiência hospitalar com eficiência,
                tecnologia e humanização.
              </p>
            </div>
            <div className="saiba-mais">
              <a href="#section3">Mais Informações</a>
            </div>
          </section>
          <aside className="section2">
            <div className="aside">
              <div className="div-aside-border">
                <h2>O que é o CareBot?</h2>
                <p>
                  O CareBot é uma plataforma de saúde inovadora, moderna e
                  centrada no paciente, redefinindo a experiência hospitalar com
                  eficiência, tecnologia e humanização.
                </p>
              </div>
              <div className="div-aside-border">
                <h2>O que ele faz?</h2>
                <p>
                  Simplifica agendamentos, proporciona notificações em tempo
                  real, oferece acesso rápido a registros médicos, permite
                  check-in virtual e coleta feedback, transformando a interação
                  hospitalar para ser mais intuitiva e personalizada.
                </p>
              </div>
              <div className="div-aside">
                <h2>Como funciona?</h2>
                <p>
                  Funciona integrando agendamentos online, notificações em tempo
                  real e registros médicos eletrônicos. Com check-in virtual, os
                  pacientes têm uma experiência eficiente, priorizando a
                  comunicação e feedback para melhorias contínuas.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <section className="section3" id="section3">
          <div className="cards">
            <div className="card">
              <div className="card-img">
                <img
                  src="../images/agendamento.svg"
                  alt="pessoa mexendo no calendário"
                />
              </div>
              <div className="card-texto">
                <h2>Agendamento Simplificado</h2>
                <p>
                  Facilita a vida dos pacientes com agendamento online
                  intuitivo, escolha de especialidades e horários.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="../images/notificacoes.svg"
                  alt="pessoa recebendo notificação no celular"
                />
              </div>
              <div className="card-texto">
                <h2>Notificações em Tempo Real</h2>
                <p>
                  Mantém os pacientes informados sobre agendamentos, evitando
                  atrasos e proporcionando tranquilidade.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="../images/informacoes.svg"
                  alt="pessoa analisando um gráfico"
                />
              </div>
              <div className="card-texto">
                <h2>Registro Médico Acessível</h2>
                <p>
                  Acesso rápido e seguro aos registros médicos eletrônicos,
                  promovendo uma gestão eficiente da saúde.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="../images/check-in.svg"
                  alt="família fazendo o check-in"
                />
              </div>
              <div className="card-texto">
                <h2>Check-in Virtual Eficiente</h2>
                <p>
                  Agiliza o processo de atendimento com check-in virtual,
                  reduzindo o tempo na recepção hospitalar.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="../images/feedback.svg"
                  alt="pessoas dando suas respectivas avaliações"
                />
              </div>
              <div className="card-texto">
                <h2>Feedback para Melhorias</h2>
                <p>
                  Promove a participação dos pacientes com um sistema de
                  feedback, impulsionando melhorias contínuas.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  src="../images/colaboracao.svg"
                  alt="pessoas juntando engrenagens"
                />
              </div>
              <div className="card-texto">
                <h2>Integração Colaborativa</h2>
                <p>
                  Colabora de forma estreita com equipes médicas e de TI,
                  garantindo uma implementação eficaz e contínua.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
