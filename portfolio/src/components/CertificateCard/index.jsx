import "./style.css";

const CertificateCard = ({
    url,
    alt,
    title,
    description,
    icon_url,
    icon_alt,
    date,
    institution,
    url_plataform,
}) => {
    return (
        <div className="container-certificate">
            <div className="card">
                <img src={url} alt={alt} className="certificate-img" />
                <div className="informations">
                    <h1 className="title">{title}</h1>
                    <p className="description">{description}</p>
                    <div className="skills">
                        <img
                            src={icon_url}
                            alt={icon_alt}
                            className="skill-icon"
                        />
                    </div>
                    <p className="institution">Emitido por: {institution}</p>
                    <p className="url">{url_plataform}</p>
                    <p className="date-course">Concluído em: {date}</p>

                </div>
            </div>
        </div>
    );
};

export default CertificateCard;
