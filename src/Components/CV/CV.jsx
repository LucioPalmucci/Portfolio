import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';

const CV = () => {
    const { isEnglish } = useContext(LanguageContext);

    const curriculum = "/CV.pdf"
    const resume = "/resume.pdf"

    return (
        <div className='justify-center items-center flex flex-col font-mono text-white mt-10 animate-slideDown'>
            <div className="text-start w-40 max-sm:w-2/3">
                <a
                    href={isEnglish ? resume : curriculum}
                    target="_blank" rel="noopener noreferrer"
                    className='text-lg rounded-full text-gray-400 bg-transparent border border-white hover:bg-black text-white py-2 px-4 mt-4 transition duration-500 ease-in-out inline-flex items-center'
                >
                    <FontAwesomeIcon icon={faEye} className="mr-2" /> {isEnglish ? 'View resume' : 'Ver CV'}
                </a>
            </div>
        </div>
    );
};

export default CV;
