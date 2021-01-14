import React from 'react';
import Icon01 from '../Img/map-01.svg';
import Icon02 from '../Img/map-02.svg';
import Icon03 from '../Img/map-03.svg';
import Icon04 from '../Img/map-04.svg';
import Icon05 from '../Img/map-05.svg';
import Icon06 from '../Img/map-06.svg';
import Icon07 from '../Img/map-07.svg';
import Icon08 from '../Img/map-08.svg';
import Icon09 from '../Img/map-09.svg';
import Icon10 from '../Img/map-10.svg';
import Icon11 from '../Img/map-11.svg';
import Icon12 from '../Img/map-12.svg';

const MapIcon = (props) => {
  const { no } = props;
  let img;
  switch (no) {
    case 0:
      img = <img src={Icon01} alt="main-img" />;
      break;
    case 1:
      img = <img src={Icon02} alt="main-img" />;
      break;
    case 2:
      img = <img src={Icon03} alt="main-img" />;
      break;
    case 3:
      img = <img src={Icon04} alt="main-img" />;
      break;
    case 4:
      img = <img src={Icon05} alt="main-img" />;
      break;
    case 5:
      img = <img src={Icon06} alt="main-img" />;
      break;
    case 6:
      img = <img src={Icon07} alt="main-img" />;
      break;
    case 7:
      img = <img src={Icon08} alt="main-img" />;
      break;
    case 8:
      img = <img src={Icon09} alt="main-img" />;
      break;
    case 9:
      img = <img src={Icon10} alt="main-img" />;
      break;
    case 10:
      img = <img src={Icon11} alt="main-img" />;
      break;
    case 11:
      img = <img src={Icon12} alt="main-img" />;
      break;
    default:
      img = <img src={Icon01} alt="main-img" />;
      break;
  }
  return img;
};

export default MapIcon;
