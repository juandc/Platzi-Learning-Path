import React from 'react';
import { useTransition, a, config } from 'react-spring';

export const ActionButton = ({ children, className, onClickAction, show }) => {
  const showButtonTransition = useTransition(show, null, {
    from: {
      transform: `scale(0.5)`,
      opacity: 0
    },
    enter: {
      transform: `scale(1)`,
      opacity: 1
    },
    leave: {
      transform: `scale(0.5)`,
      opacity: 0
    },
    config: {
      ...config.wobbly,
      tension: 140
    }
  });
  return showButtonTransition.map(
    ({ item, key, props }) =>
      item && (
        <a.button
          key={key}
          style={props}
          data-html2canvas-ignore
          className={`rounded-full w-12 h-12 bg-platzi text-white p-2 text-2xl m-2 flex ${className}`}
          onClick={onClickAction}
        >
          {children}
        </a.button>
      )
  );
};
