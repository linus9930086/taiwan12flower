import React, { useEffect, useState } from 'react';
import Tabs from './Component/Tabs';
import Swiper from './Component/Swiper';
import { Route } from 'react-router';
import Box from './Component/Box';
import './test.scss';

const allFlower = require('./data.json');
const R = require('ramda');

const App = () => {
  console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL);

  const flowerArr = allFlower.flower;
  const [modal, setModal] = useState(false);
  const [flower, setFlower] = useState(0);

  console.log(flower);
  useEffect(() => {
    console.log(window.location);
    const hash = window.location.hash;
    if (R.includes('?flower', hash)) {
      setFlower(Number(hash[hash.length - 1]));
      setModal(true);
    }
    // const params = new URL(window.location.href).searchParams;
    // const flowerDefault = params.get('flower');
    // if (flowerDefault) {
    //   setFlower(Number(flowerDefault));
    //   setModal(true);
    // }
  }, []);
  const clickFunc = () => {
    const dom = document.querySelector('.taiwan12flower-box.box');
    if (dom) {
      const stateObj = { modal: false };
      window.history.replaceState(stateObj, '', '/taiwan12flower/#/information');
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
      <h1 className="taiwan12 title en-style">TAIWAN FLOWER</h1>
      <Route
        basename={process.env.PUBLIC_URL}
        path="/map"
        render={(props) => <Tabs flowerArr={flowerArr} setFlower={setFlower} {...props} />}
      />
      <Route
        basename={process.env.PUBLIC_URL}
        path="/information"
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
