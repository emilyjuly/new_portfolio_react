import CertificateCard from "../../components/CertificateCard";
import Skills from "../../components/Skills";

import "./style.css";

const Certificates = () => {
  return (
    <div className="certificates-container">
      <Skills />
      <h1 className="skill-title">Certificados</h1>

      <div className="grid-cards">
          <CertificateCard
              url={"/certificates/ux-certificate.png"}
              alt={"Certificado de UX"}
              title={"User Experience"}
              description={
                  "Certificado de conclusão do curso de user experience, distrubuído pela plataforma FIAP, na sua modalidade de Nano courses."
              }
              icon_url={"/icons-skills/design.png"}
              icon_alt={"ux design icon"}
              date={"04/02/2024"}
              institution={"FIAP"}
              url_plataform={"https://www.fiap.com.br"}
          />
          <CertificateCard
              url={"/certificates/linux-fundamentals-certificate.png"}
              alt={"Certificado de linux"}
              title={"Fundamentos de Linux"}
              description={
                  "Certificado de conclusão do curso de fundamentos de Linux, distrubuído pela plataforma FIAP, na sua modalidade de Nano courses."
              }
              icon_url={"/linux.png"}
              icon_alt={"linux icon"}
              date={"03/01/2024"}
              institution={"FIAP"}
              url_plataform={"https://www.fiap.com.br"}
          />
        <CertificateCard
          url={"/certificates/docker-certificate.png"}
          alt={"Certificado de docker"}
          title={"Docker"}
          description={
            "Certificado de conclusão do curso de Docker ministrado por Andre Iacono, através da plataforma de cursos Udemy. Me fornecendo conhecimentos sobre a ferramenta Docker."
          }
          icon_url={"/docker.png"}
          icon_alt={"docker icon"}
          date={"06/11/23"}
          institution={"Udemy"}
          url_plataform={"https://www.udemy.com/pt/"}
        />
          <CertificateCard
              url={"/certificates/rtl-certificate.png"}
              alt={"Certificado React Testing Library"}
              title={"React Testing Library"}
              description={
                  "Certificado de conclusão do curso Testing React apps with React Testing Library (RTL), que ensina como usar a biblioteca de testes para aplicações React."
              }
              icon_url={"/icons-skills/rtl.png"}
              icon_alt={"RTL ícone"}
              date={"26/09/23"}
              institution={"Udemy"}
              url_plataform={"https://www.udemy.com/pt/"}
          />
        <CertificateCard
          url={"/certificates/ux-design-certificate.png"}
          alt={"UX design Certificate"}
          title={"UX Design"}
          description={
            "Certificado de conclusão do curso UX design & User Experience Design Couse - Theory Only, na plataforma de curso Udemy. Onde aprimorei minhas skills sobre UX"
          }
          icon_url={"/icons-skills/design.png"}
          icon_alt={"ux design"}
          date={"17/09/23"}
          institution={"Udemy"}
          url_plataform={"https://www.udemy.com/pt/"}
        />
        <CertificateCard
          url={"/certificates/produtividade-certificate.png"}
          alt={"Produtividade inteligente certificado"}
          title={"Produtividade inteligente"}
          description={
            "Certificado curso que ensina sobre produtividade inteligente, da plataforma Conquer, ensinando habilidades essenciais de gerenciamento do tempo."
          }
          icon_url={"/icons-skills/inteligente.png"}
          icon_alt={"Inteligente ícone"}
          date={"05/08/23"}
          institution={"Conquer Business School"}
          url_plataform={"https://www.escolaconquer.com.br/"}
        />
        <CertificateCard
          url={"/certificates/csharp-certificate.png"}
          alt={"Fundamentos do C# certificado"}
          title={"Fundamentos do C#"}
          description={
            "Certificado de conclusão do curso de fundamentos do C#, da plataforma Balta.io. Curso ministrado pelo Andre Baltieri, MVP da Microsoft."
          }
          icon_url={"/c-sharp.png"}
          icon_alt={"c sharp ícone"}
          date={"01/03/23"}
          institution={"Balta IO"}
          url_plataform={"https://balta.io/"}
        />
        <CertificateCard
          url={"/certificates/testes-automaticos-certificate.jpg"}
          alt={"Certificado de testes"}
          title={"Testes automáticos"}
          description={
            "Certificado do curso de testes automatizados da plataforma Udemy. O instrutor do curso disponibilizou execelente conteúdo sobre testes de modo geral."
          }
          icon_url={"teste.png"}
          icon_alt={"teste ícone"}
          date={"26/12/22"}
          institution={"Udemy"}
          url_plataform={"https://www.udemy.com/pt/"}
        />
          <CertificateCard
              url={"/certificates/english-certificate.png"}
              alt={"English Certificate"}
              title={"EF Set Certificate"}
              description={
                  "Certificação da EF Set, para nivelamento do conhecimento em Inglês, onde obtive 45/100 pontos através do meu desempenho, o que me nivela como B1 - Intermediário."
              }
              icon_url={"/icons-skills/eua.png"}
              icon_alt={"EUA flag"}
              date={"19/10/22"}
              institution={"EF Standard English Test (EF SET)"}
              url_plataform={"www.efset.org"}
          />
          <CertificateCard
              url={"/certificates/postgresql-certificate.png"}
              alt={"Postgresql Certificate"}
              title={"Banco de dados PostgreSQL"}
              description={
                  "Certificado de conclusão do curso de conceitos e melhores práticas em banco de dados PostgreSQL, realizado na plataforma DIO."
              }
              icon_url={"/postgresql.png"}
              icon_alt={"postgresql icon"}
              date={"27/07/22"}
              institution={"DIO"}
              url_plataform={"https://www.dio.me/en"}
          />
          <CertificateCard
              url={"/certificates/si-certificate.png"}
              alt={"SI Certificate"}
              title={"Cibersegurança"}
              description={
                  "Certificação de boas práticas de cibersegurança, emitida pelo Instituto Brasileiro de Cibersegurança, onde mostrei proficiência nos conceitos de cibersegurança."
              }
              icon_url={"/si.png"}
              icon_alt={"si icon"}
              date={"08/05/22"}
              institution={"IBSEC"}
              url_plataform={"https://ibsec.com.br/"}
          />
      </div>
    </div>
  );
};

export default Certificates;
