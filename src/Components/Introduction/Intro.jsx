import { useContext } from 'react';
import fotoCV from '../../assets/fotoCV.png';
import { LanguageContext } from '../../Context/LanguageContext';

function Intro() {
    const { isEnglish } = useContext(LanguageContext);
    const nombre = isEnglish ? 'Hi, I am Lucio Palmucci' : 'Hola, soy Lucio Palmucci';
    const descripcion = isEnglish
        ? '2nd year Computer Engineering student with experience in volunteering, 19 years old, ' +
        'looking for my first job opportunity in IT. Eager to contribute to technology projects ' +
        'to put into practice everything I have learned/am learning and provide my programming skills or the use of software tools.'
        : 'Estudiante de 2do año de Ingeniería en Informatica con experiencia en voluntariado, 19 años, ' +
        'buscando mi primera oportunidad laboral en IT. Ansioso por contribuir en proyectos de tecnología ' +
        'para poner en practica todo lo que aprendí brindando mis habilidades de programación o el uso de herramientas de software.';
    const funcion = isEnglish ? 'Web Developer' : 'Desarrollador Web';
    const manejo = isEnglish ? 'Technologies I handle:' : 'Tecnologías que manejo:';

    const tecnologias = [
        {
            name: 'HTML5',
            badgeUrl: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
            alt: 'HTML5'
        },
        {
            name: 'CSS3',
            badgeUrl: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
            alt: 'CSS3'
        },
        {
            name: 'JavaScript',
            badgeUrl: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
            alt: 'JavaScript'
        },
        {
            name: 'React',
            badgeUrl: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black',
            alt: 'React'
        },
        {
            name: 'Tailwind',
            badgeUrl: 'https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
            alt: 'TailwindCSS'
        },
        {
            name: 'Python',
            badgeUrl: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
            alt: 'Python'
        },
        {
            name: 'Git',
            badgeUrl: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
            alt: 'Git'
        }
    ];
    return (
        <div id="Home" className="justify-center items-center flex flex-col font-mono text-white">
            <div>
                <img src={fotoCV} className="w-64 h-64 rounded-full border-4 border-white animate-slideDown25" alt="Foto Portfolio" />
            </div>
            <div className='mt-4 text-start w-40'>
                <h1 className='text-2xl animate-slideLeft'>{nombre}</h1>
                <p className='text-lg text-gray-100 animate-slideLeft'>{funcion}</p>
                <br />
                <p className='text-base animate-slideLeft'>{descripcion}</p>
                <br />
                <p className='text-base'>{manejo}</p>
                <div className="flex space-x-2">
                    {tecnologias.map((tecnologia, index) => (
                        <img key={index} src={tecnologia.badgeUrl} alt={tecnologia.alt} className="opacity-0" style={{ animation: `slideLeft 1.5s ease-out forwards ${index * 0.2}s` }} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Intro;