import { faBook, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Experiencia() {
    return(
        <div className="justify-center items-center flex flex-col font-mono text-white mt-8">
            <div className="text-start w-40">
                <h1 className="text-2xl">
                    <FontAwesomeIcon icon={faBriefcase} style={{fontSize:"0.8em"}} className="text-gray-400"/> Experiencia:
                </h1>
                <br/>
                <p className="ml-4 text-gray-300">Banco de Alimentos (Voluntariado)<br/>
                Tarea: Asesoro a organizaciones en el uso de una
                aplicación para la solicitud de alimentos.<br/>
                Período: Año 2023 – Actualidad.
                </p>
                <h1 className="text-2xl mt-6">
                    <FontAwesomeIcon icon={faBook} style={{fontSize:"0.8em"}} className="text-gray-400"/> Educación:
                </h1>
                <br/>
                <p className="ml-4 text-gray-300">Banco de Alimentos (Voluntariado)<br/>
                Tarea: Asesoro a organizaciones en el uso de una
                aplicación para la solicitud de alimentos.<br/>
                Período: Año 2023 – Actualidad.
                </p>
            </div>
        </div>
    );
}
export default Experiencia;