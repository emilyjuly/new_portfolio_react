import CertificateCard from "../../components/CertificateCard";

import "./style.css";

const Certificates = () => {
    return (
        <>
            <CertificateCard
                url={"/certificates/english-certificate.png"}
                alt={"English Certificate"}
                title={"EF Set Certificate"}
                description={"Certificação da EF Set, para nivelamento do conhecimento em Inglês, onde obtive 45/100 pontos através do meu desempenho, o que me nivela como B1 - Intermediário."}
                icon_url={"/icons-skills/eua.png"}
                icon_alt={"EUA flag"}
                date={"19/10/22"}
                institution={"EF Standard English Test (EF SET) "}
                url_plataform={'www.efset.org'}
            />
            <CertificateCard
                url={"/certificates/english-certificate.png"}
                alt={"English Certificate"}
            />
            <CertificateCard
                url={"/certificates/english-certificate.png"}
                alt={"English Certificate"}
            />
            <CertificateCard
                url={"/certificates/english-certificate.png"}
                alt={"English Certificate"}
            />
        </>
    );
};

export default Certificates;
