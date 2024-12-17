import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';

const CV = () => {
    const { isEnglish } = useContext(LanguageContext);

    return (
        <div className='justify-center items-center flex flex-col font-mono text-white mt-10 animate-slideDown'>
            <div className="text-start w-40 max-sm:w-2/3">
                <button className='text-lg rounded-full text-gray-400 bg-transparent border border-white hover:bg-black text-white py-2 px-4 mt-4 transition duration-500'>
                    <a href={isEnglish ? '/resume.pdf' : '/CV.pdf'} download={isEnglish ? 'Lucio Palmucci Resume' : 'CV Lucio Palmucci'}>
                    <FontAwesomeIcon icon={faDownload}/> {isEnglish ? 'Download resume' : 'Descargar CV'}
                    </a>
                </button>
            </div>
        </div>
    );
};

export default CV;

