import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import Idioma from './Idioma';
import "./NavBar.css";

function NavBar() {
    const { isEnglish } = useContext(LanguageContext);
    const Inicio = isEnglish ? 'Home' : 'Inicio';
    const Proyectos = isEnglish ? 'Projects' : 'Proyectos';
    const Experiencia = isEnglish ? 'Experience' : 'Experiencia';

    return (
        <nav className='flex justify-between p-5 font-mono text-white'>
            <Idioma />
            <div className="flex space-x-10 justify-between mr-14">
                <a href="#Home" className=" hover:text-gray-200">{Inicio}</a>
                <a href="#Proyectos" className=" hover:text-gray-200">{Proyectos}</a>
                <a href="#Experiencia" className=" hover:text-gray-200">{Experiencia}</a>
            </div>
            <div id="Redes" className=' space-x-3 justify-end flex'>
                <a href='https://github.com/LucioPalmucci' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" className="icon text-white active:text-gray-600 icon-hover animate-slideDown" />
                </a>
                <a href='https://www.linkedin.com/in/lucio-palmucci' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size='lg' className="icon text-white active:text-gray-600 icon-hover animate-slideDown" />
                </a>
            </div>
        </nav>
    )
}

export default NavBar;