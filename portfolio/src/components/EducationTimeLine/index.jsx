import { IoMdSchool } from 'react-icons/io';
import { FormattedMessage } from 'react-intl';

import TimelineCard from '../TimelineCard';

import './style.css';

const EducationTimeLine = () => {
  return (
    <div className="education-container">
      <div className="top-title-education">
        <IoMdSchool />
        <p>
          <FormattedMessage
            id="education.intro"
            defaultMessage="Vamos saber um pouco mais sobre minhas formações..."
          />
        </p>
      </div>
      <TimelineCard
        title={
          <FormattedMessage
            id="timeline.technicalEducation.title"
            defaultMessage="Técnico em informática"
          />
        }
        date={'2017 - 2019'}
        company={'Institudo Federal Fluminense'}
        description={
          <FormattedMessage
            id="timeline.technicalEducation.description"
            defaultMessage="Participação em um projeto extracurricular de robótica que foi selecionado para ser apresentado na Organização brasileira de robótica em João Pessoa - PB."
          />
        }
      />
      <TimelineCard
        title={
          <FormattedMessage
            id="timeline.bachelorEducation.title"
            defaultMessage="Bacharelado em sistemas de informação"
          />
        }
        date={'05/2022 - 12/2025'}
        company={'Universidade Cruzeiro do Sul'}
        description={
          <FormattedMessage
            id="timeline.bachelorEducation.description"
            defaultMessage="Envolvimento em projetos extracurriculares, na área de tecnologia e na área acadêmica."
          />
        }
      />
    </div>
  );
};

export default EducationTimeLine;
