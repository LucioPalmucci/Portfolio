import React from 'react';

function Proyecto({ title, description, imageUrl, repoUrl }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg m-4 w-1/2">
      <img src={imageUrl} alt={title} width={300} height={150} className="rounded-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-gray-400 mt-2">{description}</p>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Ver en GitHub
        </a>
      </div>
    </div>
  );
}

export default Proyecto;