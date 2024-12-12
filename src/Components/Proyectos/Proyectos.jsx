import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import exploraventuraImg from '../../assets/Exploraventura.png';
import Proyecto from './Proyecto';

function Proyectos() {

    const proyectos = [
        {
        title: 'Explora Aventura',
        description: 'Clon de la pagina Oficial de exploraventura.com.ar',
        imageUrl: exploraventuraImg,
        repoUrl: 'https://github.com/LucioPalmucci/ExploraAventura'
        },
    ];

    return (
        <div className="justify-center items-center flex flex-col font-mono text-white mt-8">
        <div className='mt-4 text-start w-40'>
            <h1 className="text-2xl">
            <FontAwesomeIcon icon={faCode} className="text-2xl"/> Proyectos
            </h1>
        </div>
        <div className="flex flex-wrap justify-start w-40">
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
        </div>
    );
}

export default Proyectos;