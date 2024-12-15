import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
export default function Idioma() {
    const { isEnglish, toggleLanguage } = useContext(LanguageContext);

    return (
        <div className='text-gray-100 '>
            <button
                onClick={() => toggleLanguage()}
                className={`py-2 px-4 text-sm rounded-l-2xl border transition duration-300 ${isEnglish ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            >
                English
            </button>
            <button
                onClick={() => toggleLanguage()}
                className={`py-2 px-4 text-sm rounded-r-2xl border transition duration-300 ${!isEnglish ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            >
                Español
            </button>
        </div>
    );
}