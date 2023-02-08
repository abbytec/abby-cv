import "./experiences.sass";
import React from 'react';

const Experiences = () => {
  return <section id='experiences'>
    <h2>
      Experiencias
    </h2>
    <p>
      Mi experiencia laboral es la siguiente:
    </p><br></br>
    <p><strong>Remoto, Proyectos Freelance</strong></p>
    <ul className="list">
      <li> Dashboard de un bot de Discord
        (2023)
        <strong> 	&lt;NodeJS y Angular&gt; </strong>
      </li>
      <li> Compression y subida automatizada a S3 de mapas de juegos en servidores virtuales
        (2022)
        <strong> &lt;Python, Contabo (AWS S3)&gt; </strong>
      </li>
      <li> App móvil de votaciones electorales mediante blockchain
        (2022-2023)
        <strong> &lt;Native Script - Angular&gt; </strong>
      </li>
      <li> Cryptocapy (web de un juego de nfts de carpinchos)
        (2022)
        <strong> &lt;Wordpress - Solidity&gt; </strong>
        <small> (Falto desarrollar el videojuego, terminamos abandonando el proyecto debido a que perdió la viabilidad económica) </small>
      </li>
    </ul>
    <p><br></br><strong>Ciudad: Villa Carlos Paz, Empleos temporales</strong></p>
    <ul className="list">
      <li> Recepcionista en Hotel Temú (2014-2023 Por temporadas)</li>
      <li> Ventas minoristas en Forrajería El Tucán (Ene 2022 - Feb 2022)</li>
      <li> Reparaciones de software de celulares y smartphones en Unno Computers (2015-2016).</li>
    </ul>
    <p><br></br><strong>EcomStyle, Remoto - Casper, Wyoming, US (2020 - 2021)</strong></p>
    <ul className="list">
      <li> Gestión de órdenes y logística, community manager, asistente ejecutiva y documentación de Procedimientos Operativos Estándar.</li>
      <li> Optimización de Speed Insights (mediante LightHouse y otras herramientas) y automatizdo de Google Spreadsheets con Google Scripts</li>
    </ul>
    <br></br>

    <div className="row">
      <div className="col-md-6">
        <h3 >
          ASISTENCIAS
        </h3>
        <p>
          - 7° Edición del <b>OWASP</b> Latam Tour<br></br>
          - Seminario: Conceptos Prácticos de Seguridad Informática (<b>IUA - FCA.2018</b>)<br></br>
          - Taller: Capacitación en Vigilancia Tecnológica e Inteligencia Estratégica (<b>IUA - FCA.2018</b>)<br></br><br></br>
        </p>

      </div>
      <div className="col-md-6">
        <h3>
          VOLUNTARIADOS
        </h3>
        <p>
          <b>Rotaract Club Villa Carlos Paz</b>: Participé de  un evento presencial de 12 horas de capacitación y en varios proyectos de servicio a la comunidad.
        </p>
      </div>
      <div className="col-md-12" id='col-tabla'>
        <p id="linkedinCursos" style={{ textAlign: "center", fontWeight: 600, fontSize: "23px" }}>Cursos e itinerarios de LinkedIn learning</p><br></br>
        <table className="tg">
          <tbody>
            <tr>
              <td className="tg-cell">Cloud &amp; Security
                <div>

                </div>
              </td>
              <td className="tg-cell">Web
                <div>
                  <a href='https://www.linkedin.com/learning/desarrollo-de-proyectos-web-avanzado' >● &emsp; Desarrollo de proyectos web avanzado</a><br></br>
                </div>
              </td>
            </tr>

            <tr>
              <td className="tg-cell">Microsoft
                <div>

                </div>
              </td>
              <td className="tg-cell">Java
                <div>

                </div>
              </td>
            </tr>
            <tr>
              <td className="tg-cell">Mobile
                <div>

                </div>
              </td>
              <td className="tg-cell" rowSpan="2">Python + (AI &amp; Data Science)
                <div>

                </div>
              </td>
            </tr>
            <tr>
              <td className="tg-cell">Google &amp; AWS
                <div>

                </div>
              </td>
            </tr>
            <tr>
              <td className="tg-cell" rowSpan="2">Soft Skills
                <div>
                  <a href='https://www.linkedin.com/learning/paths/mejora-la-comunicacion-en-el-ambito-empresarial'>● &emsp; Mejora la comunicación en el ámbito empresarial</a><br></br>
                  <a href='https://www.linkedin.com/learning/paths/mejora-tu-gestion-de-tiempo-y-productividad'>● &emsp; Mejora tu gestión de tiempo y productividad</a><br></br>
                  <a href='https://www.linkedin.com/learning/paths/destaca-en-tus-habilidades-empresariales-para-la-pequena-empresa'>● &emsp; Destaca en tus habilidades empresariales para la pequeña empresa</a><br></br>
                  <a href='https://www.linkedin.com/learning/paths/mejora-tus-habilidades-para-resolver-problemas'>● &emsp; Mejora tus habilidades para resolver problemas</a><br></br>
                  <a href='https://www.linkedin.com/learning/fundamentos-lgbtqi-plus-para-el-entorno-laboral/'>● &emsp; Fundamentos LGBTQI+ para el entorno laboral</a><br></br>
                  <a href='https://www.linkedin.com/learning/como-desarrollar-el-autoconocimiento/'>● &emsp; Curso de Cómo desarrollar el autoconocimiento</a><br></br>
                </div>
              </td>
              <td className="tg-cell">Dev &amp; IT
                <div>
                  <a href='https://www.linkedin.com/learning/paths/conviertete-en-especialista-en-soporte-it'>● &emsp; Conviértete en especialista en soporte IT</a><br></br>
                  <a href='https://www.linkedin.com/learning/microservicios-con-un-cafe'>● &emsp; Microservicios con un café</a><br></br>
                </div>
              </td>
            </tr>
            <tr>
              <td className="tg-cell">Orange Economy
                <div>
                  <a href='https://www.linkedin.com/learning/paths/economia-naranja-aprende-desarrollo-de-proyectos-web'>● &emsp; Aprende desarrollo de proyectos web</a><br></br>
                  <a href='https://www.linkedin.com/learning/paths/economia-naranja-primeros-pasos-en-diseno-web'>● &emsp; Primeros pasos en diseño web</a><br></br>
                  <a href='https://www.linkedin.com/learning/paths/economia-naranja-introduccion-a-la-seguridad-it'>● &emsp; Introducción a la seguridad IT</a><br></br>
                  <a href='https://www.linkedin.com/learning/paths/economia-naranja-primeros-pasos-en-usabilidad-para-software'>● &emsp; Primeros pasos en usabilidad para software</a><br></br>
                  <a href='https://www.linkedin.com/learning/paths/economia-naranja-introduccion-al-teletrabajo'>● &emsp; Introducción al teletrabajo</a><br></br>
                  <a href='https://www.linkedin.com/learning/paths/economia-naranja-quiero-gestionar-mi-tiempo'>● &emsp; Quiero gestionar mi tiempo</a><br></br>
                  <a href='https://www.linkedin.com/learning/paths/economia-naranja-quiero-gestionar-mi-crecimiento-profesional'>● &emsp; Quiero gestionar mi crecimiento profesional</a><br></br>
                  <a href='https://www.linkedin.com/learning/paths/economia-naranja-quiero-gestionar-mi-crecimiento-personal'>● &emsp; Quiero gestionar mi crecimiento personal</a><br></br>
                  <a href='https://www.linkedin.com/learning/paths/economia-naranja-primeros-pasos-en-cloud-computing'>● &emsp; Primeros pasos en cloud computing</a><br></br>
                  <a href='https://www.linkedin.com/learning/paths/economia-naranja-primeros-pasos-como-programador-o-programadora'>● &emsp; Primeros pasos como programador o programadora</a>
                </div>
              </td>
            </tr>
            <tr>
              <td className="tg-cell">Quantum Computing
                <div>

                </div>
              </td>
              <td className="tg-cell">Hobbies
                <div>

                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
      </div>
    </div>
  </section>;
};

export default Experiences;