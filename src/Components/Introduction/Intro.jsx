import fotoCV from '../../assets/fotoCV.png';
function Intro() {
  return (
    <div className="justify-center items-center flex flex-col font-mono text-white">
        <div>
            <img src={fotoCV} className="w-64 h-64 rounded-full border-4 border-white" alt="Foto Portfolio" />
        </div>
        <div className='mt-4 text-start w-1/3'>
            <h1 className='text-2xl'>Hi, I'm Lucio Palmucci</h1>
            <p>Web Developer</p>
        </div>
    </div>
  );
}

export default Intro;