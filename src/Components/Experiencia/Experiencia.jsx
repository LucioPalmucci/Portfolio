import { faBook, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';

function Experiencia() {

    const { isEnglish } = useContext(LanguageContext);
    const Experiencia = isEnglish ? 'Experience:' : 'Experiencia:';
    const Educación = isEnglish ? 'Education:' : 'Educación:';
    const voluntariado = isEnglish ? 'Volunteer' : 'Voluntariado';
    const tarea = isEnglish
    ? 'Task: Help organizations use an application for food requests.'
    : 'Tarea: Asesoro a organizaciones en el uso de una aplicación para la solicitud de alimentos.';
    const peroiodo = isEnglish ? 'Period: Year 2023 - 2024.' : 'Período: Año 2023 – 2024.';
    const peroiodo2 = isEnglish ? 'Period: Year 2023 - present. (3rd year)' : 'Período: Año 2023 – actualidad. (3º año)';
    const Universidad = isEnglish ? 'University of Salvador' : 'Universidad del Salvador';
    const carrera = isEnglish ? 'Career: Computer Engineering.' : 'Carrera: Ingeniería en Informática.';

    return (
        <div id="Experiencia" className="justify-center items-center flex flex-col font-mono text-white mt-20">
            <div className="text-start md:w-40 max-md:w-2/3">
                <h1 className="text-2xl animate-show">
                    <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: "0.8em" }} className="text-gray-400" /> {Experiencia}
                </h1><br />
                <p className="ml-4 animate-slideLeft">
                    Banco de Alimentos ({voluntariado})<br />
                    {tarea}<br />
                    {peroiodo}
                </p>
                <h1 className="text-2xl mt-6 animate-show">
                    <FontAwesomeIcon icon={faBook} style={{ fontSize: "0.8em" }} className="text-gray-400" /> {Educación}
                </h1><br />
                <p className="ml-4 animate-slideRight">{Universidad}<br />
                    {carrera}<br />
                    {peroiodo2}
                </p>
            </div>
        </div>
    );
}
export default Experiencia;