import "./education.sass";
import React from 'react';
const Education = () => {
  return <section id="education">
    <h2 className="text-center">
      Formación educativa
    </h2>
    <div className="row">
      <div className="col-md-6">
        <h3>
          Académica
        </h3>
        <h4>
          Instituto Universitario Aeronáutico, <cite className="text-muted">Ciudad: Córdoba</cite>
        </h4>
        <p>
          2018-2022 - Estudiante avanzada de Ingeniería en Informática.
        </p>
        <p>
          <a className="btn" href="https://www.iua.edu.ar/">Ver Detalles »</a>
        </p>
        <br></br>
        <h4>
          Instituto Industrial Cristo Obrero, <cite className="text-muted">Ciudad: Villa Carlos Paz</cite>
        </h4>
        <p>
          2011-2017 - Educación secundaria completa. Título “Técnico Mecánico”.
        </p>
        <p>
          <a className="btn" href="http://www.iico.com.ar/">Ver Detalles »</a>
        </p>
      </div>
      <div className="col-md-6">
        <h3>
          Complementaria
        </h3>
        <h4>
          Cursos con certificaciones Online
        </h4>
        <p>2022 - <a href="https://www.linkedin.com/learning/">LinkedIn Learning</a>: Múltiples Cursos e Itinerarios <a href='#linkedinCursos'>(ver abajo)</a></p>
        <p>2022 - <a href="https://www.linkedin.com/learning/">CertiProf</a>: Scrum foundation professional certificate (SFPC)</p>
        <p>2020 - <a href="https://www.netacad.com/">Cisco Networking Academy</a>: “Introducción a la Seguridad Cibernética”</p>
        <p>2019-2022 - <a href="https://www.sololearn.com/home">SOLOLEARN</a>: Refuerzo de conocimientos de programación mediante 8 cursos</p>
        <p>2019 - <a href="https://www.tutellus.com/">Tutellus</a>: “Aprende a usar tu cámara de una vez por todas”</p>
      </div>
    </div>
  </section>;
};

export default Education;