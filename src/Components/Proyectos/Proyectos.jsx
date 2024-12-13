import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import exploraventuraImg from '../../assets/Exploraventura.png';
import Proyecto from './Proyecto';

function Proyectos() {

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
        description: 'Clon de la pagina Oficial de exploraventura.com.ar',
        imageUrl: exploraventuraImg,
        repoUrl: 'https://github.com/LucioPalmucci/ExploraAventura'
        },
    ];

    return (
        <div id="Proyectos" className="justify-center items-center flex flex-col font-mono text-white mt-20">
            <div className='mt-4 text-start w-40 animate-slideDown25'>
                <h1 className="text-2xl">
                <FontAwesomeIcon icon={faCode} className="text-2xl"/> Proyectos
                </h1>
            </div>
            <div className="flex flex-wrap justify-start w-40 animate-slideRight">
                {proyectos.map((proyecto, index) => (
                <Proyecto
                    key={index}
                    title={proyecto.title}
                    description={proyecto.description}
                    imageUrl={proyecto.imageUrl}
                    repoUrl={proyecto.repoUrl}
                />
                ))}
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