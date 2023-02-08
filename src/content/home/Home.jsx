import "./home.sass";
import React from 'react';
import { loadedImgs } from '../../App.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faDiscord, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCaretRight, faCaretLeft, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  function toggleMode() {
    const a = document.getElementById("App");
    if (a.className === "App") {
      a.className = "App dark-mode"
    } else {
      a.className = "App"
    }
  }
  return <section id='home'>
    <h1 itemProp="name" className="text-center">
      Abby Palmero
    </h1>
    <div style={{ position: "fixed", right: "30px", top: "20px", zIndex: "101" }}>
      <input type="checkbox" id="darkmode-toggle" onChange={() => toggleMode()} />
      <label id='labelA' htmlFor="darkmode-toggle">
        <FontAwesomeIcon icon={faSun} className="sun" />
        <FontAwesomeIcon icon={faMoon} className="moon" />
      </label>
    </div>

    <div className="row">
      <div className="col-md-4" style={{ verticalAlign: "middle" }}>

        <address className="text-center" style={{ fontSize: "calc(1.5em - 0.3vw)", letterSpacing: "0.1em", display: "grid" }}>
          <strong>Contacto</strong>
          <br></br> Battle 261, Villa Carlos Paz
          <br></br> Cordoba, Argentina 5152
          <br></br> Teléfono: +54 (3541) 208175
          <div id='socialMedia'>

            <a className="btn btn-lg btn-floating" aria-label="GMail" style={{ backgroundColor: "#EA4335" }} href="mailto:gpsmurfs@gmail.com" role="button"><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /></a>

            <a id="cursedBtn" className="btn btn-lg btn-floating" aria-label="Instagram" style={{ backgroundColor: "var(--theme-accent)", color: "var(--theme-color)" }} href="https://www.instagram.com/abbytec_hd/" role="button"><FontAwesomeIcon icon={faInstagram} aria-hidden="true" /></a>

            <a className="btn btn-lg btn-floating" aria-label="LinkedIn" style={{ backgroundColor: "#0e76a8" }} href="https://www.linkedin.com/in/abby-pal/" role="button"><FontAwesomeIcon icon={faLinkedin} aria-hidden="true" /></a>

            <a className="btn btn-lg btn-floating" aria-label="Discord" style={{ backgroundColor: "#7289d9" }} href="https://discordapp.com/users/🦋✿Abby✿🦋#3878/" role="button"><FontAwesomeIcon icon={faDiscord} aria-hidden="true" /></a>

            <a className="btn btn-lg btn-floating" aria-label="Github" style={{ backgroundColor: "#171515" }} href="https://github.com/abbytec/" role="button"><FontAwesomeIcon icon={faGithub} aria-hidden="true" /></a>

            <a className="btn btn-lg btn-floating" aria-label="Whatsapp" style={{ backgroundColor: "#4FCE5D" }} href="https://wa.me/+5493541209175" role="button"><FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" /></a>
          </div>
        </address>
      </div>
      <div className="col-md-8">
        <p className="text-left">
          Hola, me llamo Abby Palmero y soy una <strong>desarrolladora Full Stack</strong> apasionada por la informática, una chica transgenero cuyos hobbies son aprender cosas nuevas y jugar videojuegos con amigos.
          <br></br>
          Mis objetivos son crecer como profesional en un marco donde se destaquen el <em>aprendizaje continuo, la amistad y la perseverancia</em>.
          <br></br>
          Si bien mi fortaleza es el <strong>desarrollo web</strong>, tengo conocimientos en otras areas como <em>UI-UX, ciberseguridad, sistemas, bases de datos, programación orientada a objetos, scripting y desarrollo tanto movil/de escritorio como también de videojuegos</em>.
        </p>
        <br></br>
        <blockquote className="blockquote">
          <p className="mb-0">
            <cite>Nunca confíes en un ordenador que no puedas lanzar por una ventana</cite>
          </p>
          <footer className="blockquote-footer">
            Steve Wozniak
          </footer>
        </blockquote>
      </div>
    </div>


    <div className="carousel slide center" id="carousel-249247" style={{ marginTop: "0" }}>
      <ol className="carousel-indicators">
        <li data-slide-to="0" data-target="#carousel-249247">
        </li>
        <li data-slide-to="1" data-target="#carousel-249247">
        </li>
        <li data-slide-to="2" data-target="#carousel-249247" className="active">
        </li>
      </ol>
      <div className="carousel-inner w-100">
        <div className="carousel-item img-fluid">
          <img onLoad={loadedImgs} className="d-block w-100" alt="Primera imágen del carrusel" src="./content/carrousel/image1.webp"></img>
          <div className="carousel-caption">
            <p>
              Atardecer
            </p>
            <p>
              Foto sacada desde mi hogar
            </p>
          </div>
        </div>
        <div className="carousel-item img-fluid">
          <img className="d-block w-100" alt="Segunda imágen del carrusel" src="./content/carrousel/image2.webp"></img>
          <div className="carousel-caption">
            <p>
              Atardecer
            </p>
            <p>
              Foto sacada desde el IUA
            </p>
          </div>
        </div>
        <div className="carousel-item img-fluid active">
          <img className="d-block w-100" alt="Tercer imágen del carrusel" src="./content/carrousel/image3.webp"></img>
          <div className="carousel-caption">
            <p>
              Foto nocturna
            </p>
            <p>
              Foto sacada desde mi hogar
            </p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carousel-249247" data-slide="prev">
        <FontAwesomeIcon icon={faCaretLeft} style={{ height: "1.6rem" }}></FontAwesomeIcon>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carousel-249247" data-slide="next">
        <FontAwesomeIcon icon={faCaretRight} style={{ height: "1.6rem" }}></FontAwesomeIcon>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </section>;
};

export default Home;