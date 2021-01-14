import React from 'react';
import Pic01 from '../Img/pic-01.svg';
import Pic02 from '../Img/pic-02.svg';
import Pic03 from '../Img/pic-03.svg';
import Pic04 from '../Img/pic-04.svg';
import Pic05 from '../Img/pic-05.svg';
import Pic06 from '../Img/pic-06.svg';
import Pic07 from '../Img/pic-07.svg';
import Pic08 from '../Img/pic-08.svg';
import Pic09 from '../Img/pic-09.svg';
import Pic10 from '../Img/pic-10.svg';
import Pic11 from '../Img/pic-11.svg';
import Pic12 from '../Img/pic-12.svg';

const Pic = (props) => {
  const { no } = props;
  let img;
  switch (no) {
    case 0:
      img = <img src={Pic01} alt="main-img" />;
      break;
    case 1:
      img = <img src={Pic02} alt="main-img" />;
      break;
    case 2:
      img = <img src={Pic03} alt="main-img" />;
      break;
    case 3:
      img = <img src={Pic04} alt="main-img" />;
      break;
    case 4:
      img = <img src={Pic05} alt="main-img" />;
      break;
    case 5:
      img = <img src={Pic06} alt="main-img" />;
      break;
    case 6:
      img = <img src={Pic07} alt="main-img" />;
      break;
    case 7:
      img = <img src={Pic08} alt="main-img" />;
      break;
    case 8:
      img = <img src={Pic09} alt="main-img" />;
      break;
    case 9:
      img = <img src={Pic10} alt="main-img" />;
      break;
    case 10:
      img = <img src={Pic11} alt="main-img" />;
      break;
    case 11:
      img = <img src={Pic12} alt="main-img" />;
      break;
    default:
      img = <img src={Pic02} alt="main-img" />;
      break;
  }
  return img;
};

export default Pic;
