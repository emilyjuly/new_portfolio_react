import "./style.css";

const redirectToLink = () => {
    window.open("https://forms.gle/KTmtXhwS6DyUH31G7", "_blank");
};

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
                        <a href="#inscricao">
                            <button className="h4y-btn1">Quero me inscrever</button>
                        </a>
                        <a href="#funcionamento">
                            <button className="h4y-btn2">Saiba mais</button>
                        </a>
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
            <div className="h4y-funcionamento" id="funcionamento">
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
                        <span className="h4y-funcionamento-text">Além de dicas para conseguir sua primeira oportunidade de trabalho, e ter boa visibilidade no LinkedIn.</span>
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
            <div className="h4y-inscricao" id="inscricao">
                <h3 className="h4y-inscricao-title">Inscrição</h3>
                <div className="h4y-inscricao-subtitle">
                    <span className="h4y-inscricao-subtitle1">Quer fazer parte desse projeto</span>
                    <span className="h4y-inscricao-subtitle2"> e impulsionar a sua carreira?</span>
                </div>
                <div className="h4y-inscricao-text1">
                    <span>Você vai ter a oportunidade única, de receber valiosos insights</span>
                    <span>para sua vida profissional, e de forma gratuita.</span>
                </div>
                <div className="h4y-inscricao-text2">
                    <span>Vem fazer parte desse projeto com a gente,</span>
                    <span>vai ser uma honra ter você conosco.</span>
                </div>
                <button className="cta" onClick={redirectToLink}>
                    <span className="span">ME INSCREVER</span>
                    <span className="second">
                            <svg width="50px" height="20px" viewBox="0 0 66 43" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="arrow" stroke="none" fill="none">
                                        <path
                                            className="one"
                                            d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                                            fill="#FFFFFF"/>
                                        <path className="two"
                                              d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                                              fill="#FFFFFF"/>
                                        <path className="three"
                                              d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                                              fill="#FFFFFF"/>
                                    </g>
                            </svg>
                        </span>
                </button>
            </div>
        </div>
    )
        ;
};

export default Help4You;
