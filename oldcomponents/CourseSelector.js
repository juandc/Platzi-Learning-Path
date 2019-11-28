import React, { useState, useEffect, useRef } from 'react';
import { getCourseById } from '../utils/dbUtils';
import { MdAdd } from 'react-icons/md/';
import { useSpring, a, useTransition, config } from 'react-spring';
import useMeasure from 'react-use-measure';
import { ActionButton } from './ActionButton';

const AnimatedMdAdd = a(MdAdd);
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

export const CourseSelector = ({ coursesId, handleClick }) => {
  const [show, setShow] = useState(false);

  const rotateAnimation = useSpring({
    transform: show ? `rotate(${45}deg)` : `rotate(${0}deg)`,
    config: {
      friction: 10,
      clamp: true
    }
  });

  const showListTransition = useTransition(show, null, {
    from: {
      transform: `translate3d(0, ${-10}px , 0)`,
      transformOrigin: '0 0',
      opacity: 0
    },
    enter: {
      transform: `translate3d(0, ${0} ,0)`,
      opacity: 1
    },
    leave: {
      transform: `translate3d(0, ${-10}px ,0)`,
      opacity: 0
    },
    config: {
      ...config.wobbly,
      tension: 140
    }
  });
  const courses = coursesId.map(id => getCourseById(id));

  return (
    <div className="max-w-md w-full h-12 relative" data-html2canvas-ignore>
      <div className="container absolute z-10">
        <ActionButton
          show={true}
          onClickAction={() => setShow(!show)}
          className="bg-green-500"
        >
          <AnimatedMdAdd className="my-auto mx-auto" style={rotateAnimation} />
        </ActionButton>
        <div>
          {showListTransition.map(
            ({ item, key, props }) =>
              item && (
                <a.ul
                  className="container w-full m-2 shadow-lg py-1 rounded-lg bg-gray-100 px-4"
                  style={props}
                  key={key}
                >
                  {/* <input
                    type="text"
                    placeholder="search for a course"
                    className="border-green-300 border-2 pl-2 py-1 w-full rounded-full text-gray-900 focus:outline-none focus:border-green-500 my-2"
                  />  TO-DO*/}
                  {courses.length === 0 ? (
                    <li className="flex flex-no-wrap my-2 w-full h-12 text-center justify-center align-middle">
                      No hay mas cursos en mi base de datos :(
                    </li>
                  ) : (
                    courses.map(course => (
                      <li
                        className="flex flex-no-wrap my-2"
                        key={course.id}
                        onClick={() => handleClick(course)}
                      >
                        <img
                          className="w-12 h-12 mr-2"
                          src={course.asset}
                          alt={course.short}
                        />
                        <span className="my-auto">{course.name}</span>
                      </li>
                    ))
                  )}
                </a.ul>
              )
          )}
        </div>
      </div>
    </div>
  );
};
