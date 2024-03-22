import "./style.css";

const Help4You = () => {
    return (
        <div className="help4you-container">
            <img src="/help4you.png" alt="Logo do projeto help 4 you" height={400}/>
          <div className="help4you-text-container">
            <span className="help4you-title">
              <img src="/aviso.png" alt="Boneco segurando um megafone" height={50}/>
              Inscrições em breve!
            </span>
            <span className="help4you-text">Agora em um novo formato, o projeto que já ajudou muitas pessoas a um tempo atrás estará de volta.</span>
            <span>
                  <li>Produção de trilha de aprendizagem.</li>
                  <li>Direcionamento para o mercado de trabalho.</li>
                  <li>Técnicas para conseguir mais visibilidade no Linkedin.</li>
                  <li>Acompanhamento individual.</li>
            </span>
            <span className="help4you-text">Com duração de 3 meses, as pessoas selecionadas irão passar por um processo de mentoria comigo, onde irei me disponibilizar a acompanhar e direcionar para seguir no mercado de trabalho como desenvolvedor de software.</span>
            <span>Mais detalhes serão divulgados em breve...</span>
            <span className="help4you-gratis">100% Gratuito</span>
          </div>
        </div>
    );
};

export default Help4You;
