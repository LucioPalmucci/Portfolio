import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./NavBar.css";

function NavBar(){
    return(
        <nav>
            <div id="Redes" className='p-5 space-x-3 justify-end flex'>
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