import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="text-white flex space-x-4 p-10">
                <p>&copy; 2024 Lucio Palmucci.</p>
                <div className="social-links space-x-2">
                    <a href='mailto:lucio.palmucci@hotmail.com' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} size='lg' className="hover:text-gray-200"/>
                    </a>
                    <a href='https://www.instagram.com/lucio.palmucci/' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size='lg' className="hover:text-gray-200"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;