import { BsFillBriefcaseFill } from "react-icons/bs";
import TimelineCard from "../TimelineCard";

import "./style.css";

const ExperiencesTimeLine = () => {
    return (
        <div className="experiences-container">
            <div className="top-title">
                <BsFillBriefcaseFill />
                <p>
                    Vamos saber um pouco mais sobre minhas experiências
                    profissionais...
                </p>
            </div>
            <div className="cards">
                <TimelineCard
                    title={"Full stack developer"}
                    date={"Atual - 09/2022"}
                    company={"Minsait"}
                    description={
                        "Desenvolvo e faço a sustentação de aplicações com tecnologias como Javascript, VueJS e NodeJS, Nestjs e Typescript. Trabalho com aplicações RPA (Autonomous Payment Receipt), com C#. Reparo bugs de projetos, analisando e buscando melhores implementações para a qualidade do produto. Atuei em uma equipe de Nível 4 para o cliente Petrobras, com manipulação de XML, banco de dados SQL e atendimentos de tickets de demandas específicas no framework Clarity."
                    }
                    skills={
                        "Nestjs, Typescript, Vue.js, Quasar, Postgresql, C#, RPA, Figma, Git, Gitlab e Scrum"
                    }
                />
                <TimelineCard
                    title={"Suporte técnico N2"}
                    date={"03/2022 - 09/2022"}
                    company={"Minsait"}
                    description={
                        "Suporte avançado para o cliente Petrobras realizei um o suporte em algumas aplicações com: Microsoft Office, servidores de impressão e de arquivos, terminal virtual, instalação de softwares e de drivers e Windows"
                    }
                    skills={
                        "Trabalho em equipe, suporte de nível avançado, repasse de demandas, Microsoft Windows, Office 365 e 2016, impressoras, servidores."
                    }
                />
                <TimelineCard
                    title={"Suporte técnico N1"}
                    date={"10/2020 - 02/2022"}
                    company={"Minsait"}
                    description={
                        "Suporte técnico ao cliente petrobras com tecnologias como: Active Directory, Microsoft Azure, Horizon, VMWare, criptografia AIP, acesso remoto, Microsoft Office e Windows"
                    }
                    skills={
                        "Trabalho em equipe, suporte ao cliente, suporte receptivo, repasse de demandas, Microsoft Windows, Office 365 and 2016."
                    }
                />
            </div>
        </div>
    );
};

export default ExperiencesTimeLine;
