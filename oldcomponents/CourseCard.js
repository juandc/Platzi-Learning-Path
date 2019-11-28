import React, { useState } from 'react';
import { MdRemoveCircle } from 'react-icons/md';
import { useSpring, a } from 'react-spring';

export const CourseCard = ({
  title,
  id,
  logo,
  link,
  short,
  handleRemoveClick
}) => {
  const [hovered, setHovered] = useState(false);

  const hover = useSpring({
    transform: hovered ? 'scale(1.1)' : 'scale(1)'
  });

  return (
    <a.div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-wrap m-4 rounded-lg p-4 h-48 w-48"
      style={hover}
    >
      <div className="h-1/2 w-full flex">
        <img
          src={logo}
          alt={short}
          className="h-20 w-20 mx-auto my-auto border-4 border-gray-300 rounded-full justify-center"
        />
        <div
          className="text-red-600 ml-auto text-2xl absolute top-0 right-0 bottom-0 mr-4 mt-4"
          onClick={() => handleRemoveClick(id)}
        >
          <MdRemoveCircle data-html2canvas-ignore />
        </div>
      </div>
      <div className="h-1/2 w-full flex">
        <h2 className="font-bold w-full font-sans text-sm mx-6 my-auto text-center my-auto">
          {title}
        </h2>
      </div>
    </a.div>
  );
};
