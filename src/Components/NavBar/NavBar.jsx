import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import Idioma from './Idioma';
import "./NavBar.css";
function NavBar() {
    const { isEnglish } = useContext(LanguageContext);
    const Inicio = isEnglish ? 'Home' : 'Inicio';
    const Proyectos = isEnglish ? 'Projects' : 'Proyectos';
    const Experiencia = isEnglish ? 'Experience' : 'Experiencia';
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className='flex justify-between p-5 font-mono text-white'>
            <Idioma />
            <div className="flex space-x-10 mr-14 justify-between menu hidden md:flex items-center">
                <a href="#Home" className=" hover:text-gray-200">{Inicio}</a>
                <a href="#Proyectos" className=" hover:text-gray-200">{Proyectos}</a>
                <a href="#Experiencia" className=" hover:text-gray-200">{Experiencia}</a>
            </div>
            <div id="Redes" className='space-x-3 justify-end flex'>
                <a href='https://github.com/LucioPalmucci' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" alt="Github" className="icon text-white active:text-gray-600 icon-hover animate-slideDown" />
                </a>
                <a href='https://www.linkedin.com/in/lucio-palmucci' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size='lg' alt="Linkedin" className="icon text-white active:text-gray-600 icon-hover animate-slideDown" />
                </a>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </button>
            </div>
            {menuOpen && (
                <div className="absolute top-16 right-0 bg-gray-800 text-white p-4 rounded-lg shadow-lg md:hidden">
                    <a href="#Home" className="block">{Inicio}</a>
                    <a href="#Proyectos" className="block">{Proyectos}</a>
                    <a href="#Experiencia" className="block">{Experiencia}</a>
                </div>
            )}
        </nav>
    )
}

export default NavBar;