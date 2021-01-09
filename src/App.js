import React, { useEffect, useState } from 'react';
import Tabs from './Component/Tabs';
import Swiper from './Component/Swiper';
import { Route } from 'react-router';
import Box from './Component/Box';
import './test.scss';

const allFlower = require('./data.json');

const App = () => {
  console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL);

  const flowerArr = allFlower.flower;
  const [modal, setModal] = useState(false);
  const [flower, setFlower] = useState(0);
  const [prePageFunc, setPrePageFunc] = useState(true);

  console.log(flower);
  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const flowerDefault = params.get('flower');
    if (flowerDefault) {
      setFlower(Number(flowerDefault));
      setPrePageFunc(false);
      setModal(true);
    }
  }, []);
  const clickFunc = () => {
    const dom = document.querySelector('.taiwan12flower-box.box');
    if (dom) {
      const stateObj = { modal: false };
      window.history.replaceState(stateObj, '', '/taiwan12flower/information');
      // dom.classList.add('close');
      setModal(false);
      // setTimeout(() => {
      // }, 300);
    }
  };
  useEffect(() => {
    window.addEventListener('click', () => {
      clickFunc();
    });
    return () => {
      window.removeEventListener('click', () => {
        clickFunc();
      });
    };
  }, []);

  return (
    <div className={`taiwan12flower ${modal ? 'modal' : ''}`}>
      <h1 className="taiwan12 title en-style fade-in-animation">TAIWAN FLOWER</h1>
      <Route
        path="/taiwan12flower/map"
        render={(props) => <Tabs flowerArr={flowerArr} setFlower={setFlower} {...props} />}
      />
      <Route
        path="/taiwan12flower/information"
        render={(props) => (
          <Swiper
            flowerArr={flowerArr}
            flower={flower}
            setFlower={setFlower}
            setModal={setModal}
            {...props}
            modal={modal}
          />
        )}
      />
      {modal && <Box data={flowerArr[flower]} flower={flower} closeModal={clickFunc} />}
    </div>
  );
};

export default App;
