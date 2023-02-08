import "./contact.sass";
import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelopeOpen, faPencilSquare } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('smtpmail', 'template_1v05tl8', e.target, 'wFKUkmxkaCa1mSdW8').then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }
  return <section id='contact'>
    <h2>
      Contacto
    </h2>
    <div className="col-md-12">
      <form className="form-horizontal contact-form" onSubmit={sendEmail}>
        <fieldset>
          <div className="form-group">
            <span className="col-md-1 col-md-offset-2 text-center"><FontAwesomeIcon icon={faUser} className="bigicon"></FontAwesomeIcon></span>
            <div className="col-md-8">
              <input id="fname" name="user_name" type="text" placeholder="Nombre" className="form-control"></input>
            </div>
          </div>

          <div className="form-group">
            <span className="col-md-1 col-md-offset-2 text-center"><FontAwesomeIcon icon={faEnvelopeOpen} className="bigicon"></FontAwesomeIcon></span>
            <div className="col-md-8">
              <input id="email" name="user_email" type="email" placeholder="Correo Electrónico" className="form-control"></input>
            </div>
          </div>

          <div className="form-group">
            <span className="col-md-1 col-md-offset-2 text-center"><FontAwesomeIcon icon={faPencilSquare} className="bigicon"></FontAwesomeIcon></span>
            <div className="col-md-8">
              <textarea className="form-control" id="message" name="message" placeholder="Sentite libre de hablar conmigo para cualquier cosa que necesites. Sean propuestas, solicitudes o simplemente para conversar. Gracias por pasarte!" rows="7"></textarea>
            </div>
          </div>

          <div className="form-group">
            <div className="col-md-12 text-center">
              <button type="submit" className="btn btnPaleta btn-lg" >Enviar</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </section>;
};

export default Contact;