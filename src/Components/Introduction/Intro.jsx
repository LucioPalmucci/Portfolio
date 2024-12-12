import fotoCV from '../../assets/fotoCV.png';
function Intro() {
  return (
    <div className="justify-center items-center flex flex-col font-mono text-white">
        <div>
            <img src={fotoCV} className="w-64 h-64 rounded-full border-4 border-white" alt="Foto Portfolio" />
        </div>
        <div className='mt-4 text-start w-40'>
            <h1 className='text-2xl'>Hola, soy Lucio Palmucci</h1>
            <p className='text-lg'>Desarrollador Web</p>
            <br/>
            <p className='text-base'>Estudiante de 2º año de Ingeniería en Informática con
            experiencia en voluntariado, buscando mi primera
            oportunidad laboral en sistemas. Con muchas ganas de
            contribuir en proyectos de tecnología, aportando mis
            habilidades en programación o el uso de herramientas
            del software.
            </p>
            <br/>
            <p className='text-base'>Tecnologías que manejo:</p>
            <p align="left" className='flex space-x-1'>
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
              <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
              <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
              <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
              <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
              <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
            </p>
        </div>
    </div>
  );
}

export default Intro;