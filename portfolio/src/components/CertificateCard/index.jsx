import { FormattedMessage } from 'react-intl';
import './style.css';

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
            <img src={icon_url} alt={icon_alt} className="skill-icon" />
          </div>
          <p className="institution">
            <FormattedMessage
              id="certificate.component.card"
              defaultMessage={'Emitido por: '}
            />
            {institution}
          </p>
          <a href={url_plataform} target="_blank" className="url">
            {url_plataform}
          </a>
          <p className="date-course">
            <FormattedMessage
              id="certificate.date.component.card"
              defaultMessage={'Concluído em: '}
            />
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
