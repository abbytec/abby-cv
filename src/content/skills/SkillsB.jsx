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
      <div className="row">
        <div className="col-md-4">
          <div className="wrapper">
            <a href="#demo-modal">Open Demo Modal</a>
          </div>
        </div>
      </div>
      <div id="demo-modal" className="modal">
        <div className="modal__content">
          <h1>CSS Only Modal</h1>

          <p>
            You can use the :target pseudo-class to create a modals with Zero JavaScript. Enjoy!
          </p>
          <a href="#" className="modal__close">&times;</a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card text-white" style={{ backgroundColor: "rgb(238,101,53)" }}>
            <h3 className="card-header" >
              HTML - Bootstrap
            </h3>
            <div className="card-body">
              <img alt="Html Logo" src="./assets/logos/HTML_logo.svg"></img>
            </div>
            <div className="card-footer" style={{ backgroundColor: "rgb(166,70,37)" }}>
              <img alt="Bootstrap Logo" src="./assets/logos/Bootstrap_logo.svg"></img>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white" style={{ backgroundColor: "rgb(38,147,204)" }}>
            <h3 className="card-header">
              CSS - SASS
            </h3>
            <div className="card-body">
              <img alt="CSS Logo" src="./assets/logos/CSS_logo.svg"></img>
            </div>
            <div className="card-footer" style={{ backgroundColor: "rgb(26,102,142)" }}>
              <img alt="SASS Logo" src="./assets/logos/Sass_logo.svg" style={{ backgroundColor: "rgba(255,255,255,0.9)", borderRadius: "10px" }}
              ></img>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white" style={{ backgroundColor: "rgb(239,216,29)" }}>
            <h3 className="card-header">
              JavaScript - TS
            </h3>
            <div className="card-body">
              <img alt="JavaScript Logo" src="./assets/logos/JavaScript_logo.svg"></img>
            </div>
            <div className="card-footer" style={{ backgroundColor: "rgb(167,151,20)" }}>
              <img alt="TypeScript Logo" src="./assets/logos/Typescript_logo.svg" style={{ margin: "0 auto" }}></img>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white" style={{ backgroundColor: "#444" }}>
            <h3 className="card-header">
              React - NodeJS
            </h3>
            <div className="card-body">
              <img alt="React Logo" src="./assets/logos/React_logo.svg"></img>
            </div>
            <div className="card-footer" style={{ backgroundColor: "rgb(47,47,47)" }}>
              <img alt="NodeJS Logo" src="./assets/logos/nodejs_logo.svg" style={{ margin: "0 auto" }}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card text-white" style={{ borderColor: "rgb(172, 92, 20)" }}>
            <h3 className="card-header" style={{ backgroundColor: "rgb(172, 92, 20)" }}>
              Java - Rest Api
            </h3>
            <div className="card-body">
              <img alt="Java Logo" src="./assets/logos/Java_logo.svg" style={{ width: "76px" }}></img>
            </div>
            <div className="card-footer" style={{ backgroundColor: "rgb(245,130,25)" }}>
              <img alt="Rest Logo" src="./assets/logos/rest_logo.svg"></img>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white" style={{ borderColor: "rgb(63, 120, 39)" }}>
            <h3 className="card-header" style={{ backgroundColor: "rgb(63, 120, 39)" }}>
              Spring Boot
            </h3>
            <div className="card-body">
              <img alt="Java Spring Logo" src="./assets/logos/Spring_logo.svg"></img>
            </div>
            <div className="card-footer" style={{ backgroundColor: "rgb(104,189,69)" }}>
              <img alt="Spring Boot Logo" src="./assets/logos/SpringBoot_logo.svg" style={{ backgroundColor: "rgb(255,255,255)", borderRadius: "5%" }}></img>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white" style={{ borderColor: "rgb(53, 100, 149)" }}>
            <h3 className="card-header" style={{ backgroundColor: "rgb(53, 100, 149)" }}>
              C/C++
            </h3>
            <div className="card-body">
              <img alt="C Logo" src="./assets/logos/C_logo.svg"></img>
            </div>
            <div className="card-footer" style={{ backgroundColor: "rgb(101,154,210)" }}>
              <img alt="C++ Logo" src="./assets/logos/C++_logo.svg" style={{ backgroundColor: "rgb(255,255,255)", borderRadius: "5%" }}></img>
            </div>
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
                &nbsp;Soporte IT; auditorías; instalación, mantenimiento y automatización de sistemas
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
                &nbsp;Armado, seguimiento y actualización de SOPs
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div>
                &nbsp;Edición de audio, video e imagen
              </div>
            </td>
            <td>
              <div>
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
              </div>
              <div>
                &nbsp;Uso de Autocad y Solid WORKS
              </div>
            </td>
          </tr>
        </tbody>
      </table>


      <p>
        Utilizo Git y me siento comoda trabajando en Ubuntu-linux. También realice trabajos optimizando Speed Insights (mediante LightHouse y otras herramientas) y automatizando Google Spreadsheets con Google Scripts. <br></br>
        A lo largo de mi vida también utilicé Metabase, PHP, Wordpress, Python y Assembler. Aunque no tengo tanta experiencia con ellos como con lo descripto arriba.
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
    </section>
  </>
    ;
};

export default Skills;