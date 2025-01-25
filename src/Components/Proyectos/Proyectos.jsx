import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from 'react';
import exploraventuraImg from '../../assets/Exploraventura.png';
import moviereviewsImg from '../../assets/Movies-reviews.png';
import { LanguageContext } from '../../Context/LanguageContext';
import Proyecto from './Proyecto';

function Proyectos() {
    const { isEnglish } = useContext(LanguageContext);
    
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    
    const proyectos = [
        {
            title: 'Explora Aventura',
            description: isEnglish ? 'Clone of the official page of exploraventura.com.ar' : 'Clon de la pagina Oficial de exploraventura.com.ar',
            imageUrl: exploraventuraImg,
            repoUrl: 'https://github.com/LucioPalmucci/ExploraAventura',
            pageURL: 'https://luciopalmucci.github.io/ExploraAventura/',
        },
        {
            title: 'Movies-reviews',
            description: isEnglish ? "Page about film's review using the TMDB API to get the information (in progress)" : 'Pagina sobre reseñas de peliculas utilizando la API de TMDB para obtener la informacion (en progreso)',
            imageUrl: moviereviewsImg,
            repoUrl: 'https://github.com/LucioPalmucci/Movies-reviews',
            pageURL: 'https://luciopalmucci.github.io/Movies-reviews/',
        }
    ];
    

    return (
        <div id="Proyectos" className="justify-center items-center flex flex-col font-mono text-white mt-20">
            <div className='mt-4 text-start md:w-40 max-md:w-2/3 animate-slideDown25'>
                <h1 className="text-2xl">
                    <FontAwesomeIcon icon={faCode} className="text-2xl" /> {isEnglish ? 'Projects:' : 'Proyectos:'}
                </h1>
                <div className="flex flex-wrap justify-start animate-slideRight max-2xl:w-screen">
                    {proyectos.map((proyecto, index) => (
                        <Proyecto
                            key={index}
                            title={proyecto.title}
                            description={proyecto.description}
                            imageUrl={proyecto.imageUrl}
                            repoUrl={proyecto.repoUrl}
                            pageURL={proyecto.pageURL}
                        />
                    ))}
                </div>
            </div>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed text-sm bottom-6 right-10 bg-white p-1 pl-2 pr-2 rounded-full text-black border border-black hover:bg-gray-950 hover:text-white transition duration-300"
                >
                    ↑
                </button>
            )}
        </div>
    );
}

export default Proyectos;