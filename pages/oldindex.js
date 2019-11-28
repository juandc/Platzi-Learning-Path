import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import dynamic from 'next/dynamic';

import Head from 'next/head';
import '../styles/main.css';
import { CourseCard } from '../oldcomponents/CourseCard';
import { data, initialCourses } from '../db/db.json';
import userMockup from '../db/userMock.json';
import { CourseSelector } from '../oldcomponents/CourseSelector';
import { Header } from '../oldcomponents/Header';
import { Modal } from '../oldcomponents/Modal';
const CaptureScreen = dynamic(
  () => import('../oldcomponents/CaptureScreen').then(e => e.CaptureScreen),
  {
    ssr: false
  }
);

const AnimatedCourseCard = animated(CourseCard);

const Home = () => {
  const [user, setUser] = useState({
    ...userMockup
  });
  const [courses, setCourses] = useState([]);
  const [recommended, setRecommended] = useState([]);

  const showCardTransition = useTransition(courses, courses => courses.id, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: {
      ...config.wobbly,
      clamp: true
    }
  });

  const handleSelectorClick = course => {
    setCourses([...courses, course]);
    setRecommended(
      filterRecommended(
        course.recommended,
        courses.map(course => course.id)
      )
    );
  };

  const handleRemoveClick = id => {
    setCourses(courses.filter(e => e.id !== id));
  };

  const filterRecommended = (recommendedList, coursesIdList) =>
    recommendedList.filter(
      recommendedId => coursesIdList.indexOf(recommendedId) === -1
    );

  return (
    <div className="relative">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header username={user.name} userImg={user.img} />

      <main className="sm:block">
        <div className="p-5 sm:w-full flex justify-between">
          <CourseSelector
            coursesId={
              recommended.length === 0 && courses.length === 0
                ? initialCourses
                : recommended
            }
            handleClick={handleSelectorClick}
          />
          {<CaptureScreen className="flex-end" items={courses.length} />}
        </div>

        <animated.div className="container flex flex-wrap mx-auto justify-center sm:w-full  ">
          {showCardTransition.map(({ item, key, props }) => {
            return (
              <animated.div key={key} style={props}>
                <AnimatedCourseCard
                  key={key}
                  id={item.id}
                  title={item.name}
                  logo={`/${item.asset}`}
                  style={props}
                  handleRemoveClick={handleRemoveClick}
                  short=" "
                />
              </animated.div>
            );
          })}
        </animated.div>
      </main>
    </div>
  );
};

export default Home;
