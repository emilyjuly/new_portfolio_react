import CertificateCard from '../../components/CertificateCard';
import Skills from '../../components/Skills';
import { FormattedMessage } from 'react-intl';

import './style.css';

const Certificates = () => {
  return (
    <div className="certificates-container">
      <Skills />
      <h1 className="skill-title">
        <FormattedMessage
          id="certificates.title"
          defaultMessage="Certificados"
        />
      </h1>

      <div className="grid-cards">
        <CertificateCard
          url={'/certificates/responsive-design.png'}
          alt={
            <FormattedMessage
              id="certificate.designResponsive.title"
              defaultMessage="Certificado de Design Responsivo"
            />
          }
          title={
            <FormattedMessage
              id="certificate.designResponsive.title"
              defaultMessage="Design Responsivo"
            />
          }
          description={
            <FormattedMessage
              id="certificate.designResponsive.description"
              defaultMessage="Certificação de design responsivo, obtida após executar diversos projetos provando meu conhecimento, através da plataforma Free Code Camp."
            />
          }
          icon_url={'/icons-skills/design.png'}
          icon_alt={'ux design icon'}
          date={'29/04/2024'}
          institution={'Free Code Camp'}
          url_plataform={'https://www.freecodecamp.org'}
        />
        <CertificateCard
          url={'/certificates/design-system-certificate.png'}
          alt={
            <FormattedMessage
              id="certificate.designSystem.title"
              defaultMessage="Certificado de Design System"
            />
          }
          title={
            <FormattedMessage
              id="certificate.designSystem.title"
              defaultMessage="Design System"
            />
          }
          description={
            <FormattedMessage
              id="certificate.designSystem.description"
              defaultMessage="Certificado de conclusão da formação de design system com Tailwind CSS e Storybook, distribuído pela plataforma Alura."
            />
          }
          icon_url={'/icons-skills/design.png'}
          icon_alt={'ux design icon'}
          date={'13/03/2024'}
          institution={'Alura'}
          url_plataform={'https://cursos.alura.com.br'}
        />
        <CertificateCard
          url={'/certificates/ux-certificate.png'}
          alt={
            <FormattedMessage
              id="certificate.ux.title"
              defaultMessage="Certificado de UX"
            />
          }
          title={
            <FormattedMessage
              id="certificate.ux.title"
              defaultMessage="User Experience"
            />
          }
          description={
            <FormattedMessage
              id="certificate.ux.description"
              defaultMessage="Certificado de conclusão do curso de user experience, distribuído pela plataforma FIAP, na sua modalidade de Nano courses."
            />
          }
          icon_url={'/icons-skills/design.png'}
          icon_alt={'ux design icon'}
          date={'04/02/2024'}
          institution={'FIAP'}
          url_plataform={'https://www.fiap.com.br'}
        />
        <CertificateCard
          url={'/certificates/linux-fundamentals-certificate.png'}
          alt={
            <FormattedMessage
              id="certificate.linuxFundamentals.title"
              defaultMessage="Certificado de Linux"
            />
          }
          title={
            <FormattedMessage
              id="certificate.linuxFundamentals.title"
              defaultMessage="Fundamentos de Linux"
            />
          }
          description={
            <FormattedMessage
              id="certificate.linuxFundamentals.description"
              defaultMessage="Certificado de conclusão do curso de fundamentos de Linux, distribuído pela plataforma FIAP, na sua modalidade de Nano courses."
            />
          }
          icon_url={'certificates-icons/linux.png'}
          icon_alt={'linux icon'}
          date={'03/01/2024'}
          institution={'FIAP'}
          url_plataform={'https://www.fiap.com.br'}
        />
        <CertificateCard
          url={'/certificates/docker-certificate.png'}
          alt={
            <FormattedMessage
              id="certificate.docker.title"
              defaultMessage="Certificado de Docker"
            />
          }
          title={
            <FormattedMessage
              id="certificate.docker.title"
              defaultMessage="Docker"
            />
          }
          description={
            <FormattedMessage
              id="certificate.docker.description"
              defaultMessage="Certificado de conclusão do curso de Docker ministrado por Andre Iacono, através da plataforma de cursos Udemy. Me fornecendo conhecimentos sobre a ferramenta Docker."
            />
          }
          icon_url={'certificates-icons/docker.png'}
          icon_alt={'docker icon'}
          date={'06/11/23'}
          institution={'Udemy'}
          url_plataform={'https://www.udemy.com/pt/'}
        />
        <CertificateCard
          url={'/certificates/rtl-certificate.png'}
          alt={
            <FormattedMessage
              id="certificate.rtl.title"
              defaultMessage="Certificado React Testing Library"
            />
          }
          title={
            <FormattedMessage
              id="certificate.rtl.title"
              defaultMessage="React Testing Library"
            />
          }
          description={
            <FormattedMessage
              id="certificate.rtl.description"
              defaultMessage="Certificado de conclusão do curso Testing React Apps with React Testing Library (RTL), que ensina como usar a biblioteca de testes para aplicações React."
            />
          }
          icon_url={'/icons-skills/rtl.png'}
          icon_alt={'RTL ícone'}
          date={'26/09/23'}
          institution={'Udemy'}
          url_plataform={'https://www.udemy.com/pt/'}
        />
        <CertificateCard
          url={'/certificates/ux-design-certificate.png'}
          alt={
            <FormattedMessage
              id="certificate.uxDesign.title"
              defaultMessage="Certificado de UX Design"
            />
          }
          title={
            <FormattedMessage
              id="certificate.uxDesign.title"
              defaultMessage="UX Design"
            />
          }
          description={
            <FormattedMessage
              id="certificate.uxDesign.description"
              defaultMessage="Certificado de conclusão do curso UX Design & User Experience Design Course - Theory Only, na plataforma de curso Udemy. Onde aprimorei minhas skills sobre UX."
            />
          }
          icon_url={'/icons-skills/design.png'}
          icon_alt={'ux design'}
          date={'17/09/23'}
          institution={'Udemy'}
          url_plataform={'https://www.udemy.com/pt/'}
        />
        <CertificateCard
          url={'/certificates/csharp-certificate.png'}
          alt={
            <FormattedMessage
              id="certificate.csharp.title"
              defaultMessage="Certificado de Fundamentos do C#"
            />
          }
          title={
            <FormattedMessage
              id="certificate.csharp.title"
              defaultMessage="Fundamentos do C#"
            />
          }
          description={
            <FormattedMessage
              id="certificate.csharp.description"
              defaultMessage="Certificado de conclusão do curso de fundamentos do C#, da plataforma Balta.io. Curso ministrado pelo Andre Baltieri, MVP da Microsoft."
            />
          }
          icon_url={'certificates-icons/csharp.png'}
          icon_alt={'c sharp ícone'}
          date={'01/03/23'}
          institution={'Balta IO'}
          url_plataform={'https://balta.io/'}
        />
        <CertificateCard
          url={'/certificates/testes-automaticos-certificate.jpg'}
          alt={
            <FormattedMessage
              id="certificate.automatedTests.title"
              defaultMessage="Certificado de Testes Automáticos"
            />
          }
          title={
            <FormattedMessage
              id="certificate.automatedTests.title"
              defaultMessage="Testes automáticos"
            />
          }
          description={
            <FormattedMessage
              id="certificate.automatedTests.description"
              defaultMessage="Certificado do curso de testes automatizados da plataforma Udemy. O instrutor do curso disponibilizou excelente conteúdo sobre testes de modo geral."
            />
          }
          icon_url={'certificates-icons/teste.png'}
          icon_alt={'teste ícone'}
          date={'26/12/22'}
          institution={'Udemy'}
          url_plataform={'https://www.udemy.com/pt/'}
        />
        <CertificateCard
          url={'/certificates/english-certificate.png'}
          alt={
            <FormattedMessage
              id="certificate.english.title"
              defaultMessage="Certificado de Inglês"
            />
          }
          title={
            <FormattedMessage
              id="certificate.english.title"
              defaultMessage="EF Set Certificate"
            />
          }
          description={
            <FormattedMessage
              id="certificate.english.description"
              defaultMessage="Certificação da EF Set, para nivelamento do conhecimento em Inglês, onde obtive 45/100 pontos através do meu desempenho, o que me nivela como B1 - Intermediário."
            />
          }
          icon_url={'/icons-skills/eua.png'}
          icon_alt={'EUA flag'}
          date={'19/10/22'}
          institution={'EF Standard English Test (EF SET)'}
          url_plataform={'www.efset.org'}
        />
        <CertificateCard
          url={'/certificates/postgresql-certificate.png'}
          alt={
            <FormattedMessage
              id="certificate.postgresql.title"
              defaultMessage="Certificado de PostgreSQL"
            />
          }
          title={
            <FormattedMessage
              id="certificate.postgresql.title"
              defaultMessage="Banco de dados PostgreSQL"
            />
          }
          description={
            <FormattedMessage
              id="certificate.postgresql.description"
              defaultMessage="Certificado de conclusão do curso de conceitos e melhores práticas em banco de dados PostgreSQL, realizado na plataforma DIO."
            />
          }
          icon_url={'certificates-icons/postgresql.png'}
          icon_alt={'postgresql icon'}
          date={'27/07/22'}
          institution={'DIO'}
          url_plataform={'https://www.dio.me/en'}
        />
        <CertificateCard
          url={'/certificates/si-certificate.png'}
          alt={
            <FormattedMessage
              id="certificate.cybersecurity.title"
              defaultMessage="Certificado de Cibersegurança"
            />
          }
          title={
            <FormattedMessage
              id="certificate.cybersecurity.title"
              defaultMessage="Cibersegurança"
            />
          }
          description={
            <FormattedMessage
              id="certificate.cybersecurity.description"
              defaultMessage="Certificação de boas práticas de cibersegurança, emitida pelo Instituto Brasileiro de Cibersegurança, onde mostrei proficiência nos conceitos de cibersegurança."
            />
          }
          icon_url={'certificates-icons/si.png'}
          icon_alt={'si icon'}
          date={'08/05/22'}
          institution={'IBSEC'}
          url_plataform={'https://ibsec.com.br/'}
        />
      </div>
    </div>
  );
};

export default Certificates;
