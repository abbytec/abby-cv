import "./skills.sass";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return <>
    <section id='skills'>
      <h2 className="text-center">
        Habilidades
      </h2>

      <div className="tabbable" id="tabs-857045">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active show" href="#tab1" data-toggle="tab">Section 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#tab2" data-toggle="tab">Section 2</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="tab1">
            <div id="card-971157">
              <div className="card">
                <div className="card-header">
                  <a className="card-link" data-toggle="collapse" data-parent="#card-971157" href="#card-element-280836">Collapsible Group Item #1</a>
                </div>
                <div id="card-element-280836" className="collapse">
                  <div className="card-body">
                    Anim pariatur cliche...
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <a className="card-link collapsed" data-toggle="collapse" data-parent="#card-971157" href="#card-element-576757">Collapsible Group Item #2</a>
                </div>
                <div id="card-element-576757" className="collapse">
                  <div className="card-body">
                    Anim pariatur cliche...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab2">
            <p>
              Howdy, I&apos;m in Section 2.
            </p>
          </div>
        </div>
      </div>


      <table className="tablaSkillsGenerica">
        <tbody>
          <tr>
            <td>
              <div>
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div>
                &nbsp;Diseño y desarrollo de aplicaciones web, de escritorio y bases de datos con MySQL
              </div>
            </td>

            <td>
              <div>
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div>
                &nbsp;Auditorías, instalación, mantenimiento y automatización de sistemas
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div>
                &nbsp;Diseño de UI / UX e implementación de medidas de accesibilidad
              </div>
            </td>
            <td>
              <div>
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div>
                &nbsp;Edición multimedia
              </div>
            </td>
          </tr>
        </tbody>
      </table>


      <p>
        Utilizo Git y me siento comoda trabajando en Ubuntu-linux. También realice trabajos optimizando Speed Insights (mediante LightHouse y otras herramientas), automatizando Google Spreadsheets con Google Scripts y documentación como SOPs. <br></br>
        A lo largo de mi vida también utilicé Metabase, PHP y Wordpress, aunque no tengo tanta experiencia con ellos como con lo descripto arriba.
      </p><br></br>
    </section>
    <section id='aptitudes'>
      <h2 className="text-center">
        Aptitudes
      </h2>
      <p>
        - Liderazgo e inteligencia emocional.<br></br>
        - Buen uso de lógica y creatividad.<br></br>
        - Alta predisposición por la formación continua.<br></br>
        - Interés por la Informática y adquirir nuevos conocimientos y experiencias en <strong>DevSecOps</strong>.<br></br><br></br>
      </p>
    </section></>;
};

export default Skills;