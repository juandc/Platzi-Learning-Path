import React from 'react';

export const Header = ({ username, userImg }) => {
  return (
    <header className="w-full h-64">
      <div className="bg-platzi w-full h-56 shadow-md flex justify-center font-header border-b-8 border-green-500">
        <h1 className="text-2xl text-white my-auto text-center">
          {`Crea tu propia ruta de aprendizaje ${username}`}
        </h1>
      </div>
      <div className="rounded-full">
        <img
          src={userImg}
          alt="user"
          className="rounded-full h-24 mx-auto -my-12 shadow-lg"
        />
      </div>
    </header>
  );
};
