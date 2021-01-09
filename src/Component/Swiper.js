import React, { useEffect } from 'react';
import Icon from './FIcon';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from './icon';

const Swiper = (props) => {
  const { flowerArr, flower, setFlower, setModal, modal } = props;
  console.log('modal', modal);
  const pre = () => {
    let no = flower;
    if (flower > 0) {
      no -= 1;
    } else {
      no = 11;
    }
    setFlower(no);
  };
  const next = () => {
    let no = flower;
    if (flower < 11) {
      no += 1;
    } else {
      no = 0;
    }
    setFlower(no);
  };
  const openModal = () => {
    const stateObj = { modal: 'bar' };
    window.history.replaceState(stateObj, '', `?flower=${flower}`);
    setModal(true);
  };
  return (
    <>
      {!modal && (
        <div className="taiwan12 taiwan-12-swiper-container">
          <div className="taiwan12 flower-no en-style">
            {flowerArr[flower].position === 'right' ? flowerArr[flower].start : flowerArr[flower].end}
          </div>
          <div className="taiwan12 flower-name">{flowerArr[flower].name}</div>
          <div className="taiwan12 taiwan-12-swiper fade-in">
            <div className="taiwan12 swiper-pre" onClick={pre}>
              <ChevronLeft />
            </div>
            <div className="taiwan12 flower-icon">
              <Icon no={flower} />
            </div>
            <div className="taiwan12 swiper-next" onClick={next}>
              <ChevronRight />
            </div>
          </div>
          <div className="taiwan12 change-page fade-in">
            <div
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
              //   className="taiwan12  change-page-button-container"
            >
              <div className="taiwan12 change-page-button en-style">about</div>
            </div>
            <div className="taiwan12 change-page-line" />
            <Link
              onClick={(e) => {
                e.stopPropagation();
              }}
              //   className="taiwan12 change-page-button-container"
              to="/map"
            >
              <div className="taiwan12 change-page-border-button en-style">map</div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Swiper;
