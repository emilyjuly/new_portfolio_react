import "./style.css";

const Help4You = () => {
    return (
        <div>
            <div className="h4y-container">
                <section className="h4y-text">
                    <span className="h4y-text-title">{`Código e carreira 1° edição </>`}</span>
                    <span className="h4y-text-subtitle">O Help4you retorna em um formato renovado!</span>
                    <span className="h4y-text-subtitle2">Junte-se a nós para receber orientação técnica</span>
                    <span
                        className="h4y-text-subtitle2">e direcionamento no mercado de trabalho, totalmente grátis.</span>
                    <span className="h4y-text-subtitle2">Durante três meses, ofereceremos suporte para impulsionar sua carreira</span>
                    <span className="h4y-text-subtitle2">como desenvolvedor de software.</span>
                    <div className="h4y-btns">
                        <button className="h4y-btn1">Quero me inscrever</button>
                        <button className="h4y-btn2">Saiba mais</button>
                    </div>
                </section>
                <section className="h4y-img-container">
                    <img className="h4y-img" src="/logo.png" alt="Logo help 4 you"/>
                </section>
            </div>
            <div className="h4y-requisitos">
                <h3>Requisitos</h3>
                <div className="h4y-container-list">
                    <div className="h4y-list">
                        <li>Possuir computador com acesso a internet</li>
                        <li>Disponibilidade de pelo menos 4h semanais</li>
                    </div>
                    <div className="h4y-list">
                        <li>Estar desempregado ou em transição de carreira</li>
                        <li>Conhecimentos básicos no segmento que deseja seguir</li>
                    </div>
                </div>
            </div>
            <div className="h4y-funcionamento">
                <h3>Como vai funcionar?</h3>
                <div className="h4y-funcionamento-container">
                    <div className="h4y-funcionamento-conteudo">
                        <strong>Seleção</strong>
                        <span className="h4y-funcionamento-text">Serão selecionados apenas 3 participantes nessa primeira fase.</span>
                        <span className="h4y-funcionamento-text">A seleção será feita de acordo com os requisitos informados acima, e avaliação de engajamento do participante com seus objetivos.</span>
                        <span className="h4y-funcionamento-text">Participarão apenas 3 pessoas, pois será uma ajuda prestada de forma gratuita, e limitada pela minha disponibilidade.</span>
                        <span
                            className="h4y-funcionamento-text">As inscrições ocorrerão do dia 27/03 até o dia 05/04.</span>
                        <span className="h4y-funcionamento-text">Os participantes aprovados serão comunicados via E-mail / Whatsapp a partir do dia 12/04, caso o mesmo não tenha interesse, outra pessoa será chamada no seu lugar.</span>
                    </div>
                    <div className="h4y-funcionamento-conteudo">
                        <strong>Funcionamento</strong>
                        <span className="h4y-funcionamento-text">Os participantes receberão uma trilha de aprendizagem personalizada com conteúdo gratuito, de acordo com seus conhecimentos prévios e seus objetivos.</span>
                        <span className="h4y-funcionamento-text">Além de dicas para conseguir sua primeira oportunidade de trabalho e ter boa visibilidade no LinkedIn.</span>
                        <span className="h4y-funcionamento-text">Todo o acompanhamento será voltado para o mercado de trabalho, os participantes vão entender como funciona o mundo cooporativo para um desenvolvedor.</span>
                        <span className="h4y-funcionamento-text">O acompanhamento será feito de forma individual, para que seja possível entender as necessidades de cada um, porém haverá informações que serão passadas de forma geral.</span>
                    </div>
                    <div className="h4y-funcionamento-conteudo">
                        <strong>Mais informações</strong>
                        <span className="h4y-funcionamento-text">Não é de responsabilidade do projeto, nenhum tipo de garantia de oportunidade de trabalho.</span>
                        <span className="h4y-funcionamento-text">A sua evolução depende muito mais de você do que do projeto, por isso, aproveite essa oportunidade para aprender o máximo que conseguir.</span>
                        <span className="h4y-funcionamento-text">Não haverá nenhum gasto financeiro, é um projeto sem fins lucrativos, com o intuito de ajudar quem está buscando sua primeira oportunidade.</span>
                        <span className="h4y-funcionamento-text">É um projeto em etapa experimental, esteja ciente disso ao aceitar a oportunidade.</span>
                        <span className="h4y-funcionamento-text">Conforme o projeto for tomando maiores proporções, haverá uma lista de espera para a próxima edição.</span>
                    </div>
                </div>
            </div>
            <div className="h4y-cronograma">
                <h3>Cronograma</h3>
                <div className="h4y-cronograma-container">
                    <div className="h4y-cronograma-conteudo">
                        <span className="h4y-cronograma-conteudo-title">
                            <img src="/inscricao.png" alt="Ícone de inscrição" height={25}/>
                            Inscrição
                        </span>
                        <span className="h4y-cronograma-conteudo-text">27/03 a 05/04</span>
                    </div>
                    <div className="h4y-cronograma-conteudo">
                        <span className="h4y-cronograma-conteudo-title">
                            <img src="/selecao.png" alt="Ícone de inscrição" height={25}/>
                            Seleção
                        </span>
                        <span className="h4y-cronograma-conteudo-text">05/04 a 12/04</span>
                    </div>
                    <div className="h4y-cronograma-conteudo">
                        <span className="h4y-cronograma-conteudo-title">
                            <img src="/divulgacao.png" alt="Ícone de inscrição" height={30}/>
                            Divulgação dos aprovados
                        </span>
                        <span className="h4y-cronograma-conteudo-text">
                            Dia 17/04 no meu perfil do
                            <a href="https://www.linkedin.com/in/emily-july/" target="_blank"> LinkedIn</a>
                        </span>
                    </div>

                    <div className="h4y-cronograma-conteudo">
                        <span className="h4y-cronograma-conteudo-title">
                            <img src="/inicio.png" alt="Ícone de inscrição" height={25}/>
                            Início do programa
                        </span>
                        <span className="h4y-cronograma-conteudo-text">
                            Dia 22/04
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help4You;
