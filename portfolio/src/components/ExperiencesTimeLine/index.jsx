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
                    title={"Frontend developer"}
                    date={"12/2023 - Atual"}
                    company={"DBC Company"}
                    description={
                        "Trabalho na implementação de novas features e correção de bugs, na plataforma web de CRM da cooperativa de crédito Unicred do Brasil. Utilizando o framework Vuejs com Vuetify. Uso de Kanban para agilidade do time, com dailys e meetings semanais de alinhamento e novidades nas demandas. Interação com o time de agilidade, UX, QA, Product Owners e os Tech Leaders para alinhamento e bom fluxo de desenvolvimento."
                    }
                    skills={
                        "Vuejs, Vuetify, Figma, Jest, Scrum, Git, Azure e Docker, trabalho em equipe, interação entre outros setores"
                    }
                />
                <TimelineCard
                    title={"Full stack developer"}
                    date={"09/2022 - 12/2023"}
                    company={"Minsait"}
                    description={
                        "Desenvolvo e faço a sustentação de aplicações com tecnologias como Javascript, VueJS e NodeJS, Nestjs e Typescript. Trabalho com aplicações RPA (Autonomous Payment Receipt), com C#. Reparo bugs de projetos, analisando e buscando melhores implementações para a qualidade do produto. Atuei em uma equipe de Nível 4 para o cliente Petrobras, com manipulação de XML, banco de dados SQL e atendimentos de tickets de demandas específicas no framework Clarity."
                    }
                    skills={
                        "Nestjs, Typescript, Vue.js, Quasar, Postgresql, C#, RPA, Figma, Git, Gitlab e Scrum"
                    }
                />
                <TimelineCard
                    title={"Suporte técnico N1 e N2"}
                    date={"10/2020 - 09/2022"}
                    company={"Minsait"}
                    description={
                        "Suporte avançado para o cliente Petrobras realizei um o suporte em algumas aplicações com: Microsoft Office, servidores de impressão e de arquivos, terminal virtual, instalação de softwares e de drivers e Windows"
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
