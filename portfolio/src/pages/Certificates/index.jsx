import CertificateCard from "../../components/CertificateCard";
import Skills from "../../components/Skills";

import "./style.css";

const Certificates = () => {
    return (
        <div className="certificates-container">
            <Skills />
            <h1 className="skill-title">Certificados</h1>

            <div className="two-cards">
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
                    url={"/certificates/docker-certificate.png"}
                    alt={"Dcoker Certificate"}
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
                    url={"/certificates/ux-design-certificate.png"}
                    alt={"UX design Certificate"}
                    title={"UX Design"}
                    description={
                        "Certificado de conclusão do curso UX design & User Experience Design Couse - Theory Only, na plataforma de curso Udemy. Onde aprimorei minhas skills sobre UX"
                    }
                    icon_url={"/icons-skills/design.png"}
                    icon_alt={"EUA flag"}
                    date={"17/09/23"}
                    institution={"Udemy"}
                    url_plataform={"https://www.udemy.com/pt/"}
                />
            </div>
            <div className="two-cards">
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
                    url={"/certificates/english-certificate.png"}
                    alt={"English Certificate"}
                    title={"EF Set Certificate"}
                    description={
                        "Certificação da EF Set, para nivelamento do conhecimento em Inglês, onde obtive 45/100 pontos através do meu desempenho, o que me nivela como B1 - Intermediário."
                    }
                    icon_url={"/icons-skills/eua.png"}
                    icon_alt={"EUA flag"}
                    date={"19/10/22"}
                    institution={"EF Standard English Test (EF SET) "}
                    url_plataform={"www.efset.org"}
                />
            </div>
        </div>
    );
};

export default Certificates;
