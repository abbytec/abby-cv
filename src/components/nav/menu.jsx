/* eslint-disable react/react-in-jsx-scope */
import { loadedImgs } from '../../App.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function menuResponsive() {
    var navigation = document.getElementById("navigation");
    var content = document.getElementById("content");
    var interfaz = document.getElementById("interfaz");
    if (navigation.className === "navMenu") {
        navigation.className += " opened";
        interfaz.className = "opened";
        content.style.display = "none";
    } else {
        navigation.className = "navMenu";
        interfaz.className = "";
        content.style.display = "flex";
    }
}

function menuEvent(e) {
    const navMenu = document.getElementById("mynavMenu");
    // console.log(document.getElementById(e.target.getAttribute("href").slice(1)).offsetTop)
    var content = document.getElementById("navigation");
    if (content.className !== "navMenu") {
        menuResponsive();
    }
    navMenu.childNodes.forEach(a => {
        if (e.target === a.childNodes[1]) {
            a.childNodes[1].className = "active";
        } else {
            a.childNodes[1].className = "";
        }
    })


}

export function Nav() {
    window.addEventListener("resize", () => {
        if (window.innerWidth < 721) {
            var content = document.getElementById("content");
            content.style.display = "flex";
        }
    });
    return (<><a href="#" className="menuIcon" aria-label="Menú" style={{ top: "5px", left: "5px", position: "absolute" }} onClick={menuResponsive}>
        <FontAwesomeIcon icon={faBars} style={{ transform: "scale(1.5)" }} />
    </a><nav id="navigation" className="navMenu">
            <div className="navSection" id="foto">
                <img alt="Marco de mi foto" src="./assets/photo-frame.webp" style={{ transform: "scale(0.95)", position: "absolute", zIndex: "1", width: "224px", height: "224px" }} onLoad={loadedImgs}></img >
                <img itemProp="image" alt="Foto de perfil" src="./assets/foto.webp" style={{ margin: "26px", height: "174px", width: "174px" }} onLoad={loadedImgs}></img >
            </div>

            <hr className="navSection"></hr>

            <div className="navSection" id="divMenu">
                <ul id="mynavMenu">
                    <li> <Link to="/" className="active" onClick={e => menuEvent(e)}>Home</Link> </li>
                    <li> <Link to="/education" onClick={e => menuEvent(e)}>Formación</Link> </li>
                    <li> <Link to="/skills" onClick={e => menuEvent(e)}>Habilidades</Link> </li>
                    <li> <Link to="/experiences" onClick={e => menuEvent(e)}>Experiencias</Link> </li>
                    <li> <Link to="/contact" onClick={e => menuEvent(e)}>Contacto</Link> </li>
                </ul>
            </div>
            <div className="navSection"></div>
            <div id="navfooter" className="navSection">
                <hr className="navSection"></hr>
                <p style={{ paddingTop: "15px" }}>2022 - Made with 💜 by Abby</p>
            </div>
        </nav></>);
}