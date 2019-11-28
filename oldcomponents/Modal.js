import React from 'react';
import { useTransition, a, config } from 'react-spring';

export const Modal = ({ children, onOutClick, show }) => {
  const showBackgroundTransition = useTransition(show, null, {
    from: {
      background: `rgba(0, 0, 0, ${0})`,
      transform: `translate3d(0, ${-20}px, 0)`,
      opacity: 0
    },
    enter: item => async (next, cancel) => {
      await next({ background: `rgba(0, 0, 0, ${0.4})` });
      await next({ transform: `translate3d(0, ${0}, 0)`, opacity: 1 });
    },
    leave: item => async (next, cancel) => {
      await next({ background: `rgba(0, 0, 0, ${0})` });
      await next({ transform: `translate3d(0, ${-20}px, 0)`, opacity: 0 });
    },
    config: {
      ...config.wobbly,
      tension: 140,
      clamp: true
    }
  });

  return showBackgroundTransition.map(
    ({ item, key, props }) =>
      item && (
        <a.div
          key={key}
          onClick={() => onOutClick(false)}
          class="fixed inset-0 z-50"
          style={{ background: props.background }}
        >
          <a.div
            className="absolute top-0 bottom-0 left-0 right-0 opacity-100 flex text-xl p-16"
            style={{}}
          >
            <a.div
              onClick={e => e.stopPropagation()}
              className="bg-white w-auto h-auto my-auto mx-auto"
              style={{ transform: props.transform, opacity: props.opacity }}
            >
              {children}
            </a.div>
          </a.div>
        </a.div>
      )
  );
};
